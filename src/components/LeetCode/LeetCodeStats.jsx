import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./LeetCodeStats.module.css";

export default function LeetCodeStats({ username }) {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Error fetching LeetCode stats:", err));
  }, [username]);

  if (!stats) return <div className={styles.loading}>Loading...</div>;

  const percentage = (stats.totalSolved / stats.totalQuestions) * 100;

  return (
    <div className={styles.statsContainer}>
      <div className={styles.card}>
        {/* Progress Circle */}
        <div className={styles.circleWrapper}>
          <CircularProgressbar
            value={percentage}
            maxValue={100}
            strokeWidth={8}
            styles={buildStyles({
              pathColor: `url(#gradient)`,
              trailColor: "#2c2c2c",
              strokeLinecap: "round",
            })}
          />
          {/* Gradient for multi-color */}
          <svg style={{ height: 0 }}>
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#00d26a" />
                <stop offset="50%" stopColor="#f0a500" />
                <stop offset="100%" stopColor="#ff4d4d" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Text */}
          <div className={styles.centerText}>
            <h2>
              {stats.totalSolved}
              <span className={styles.total}>/{stats.totalQuestions}</span>
            </h2>
            <p className={styles.solved}>Solved</p>
            <p className={styles.attempting}>
              {stats.totalQuestions - stats.totalSolved} Attempting
            </p>
          </div>
        </div>

        {/* Difficulty Breakdown */}
        <div className={styles.difficultyStats}>
          <div className={`${styles.diffBox} ${styles.easy}`}>
            Easy {stats.easySolved}/{stats.totalEasy}
          </div>
          <div className={`${styles.diffBox} ${styles.medium}`}>
            Med. {stats.mediumSolved}/{stats.totalMedium}
          </div>
          <div className={`${styles.diffBox} ${styles.hard}`}>
            Hard {stats.hardSolved}/{stats.totalHard}
          </div>
        </div>
      </div>
    </div>
  );
}
