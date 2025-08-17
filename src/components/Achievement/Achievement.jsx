


import { useState } from "react";
import achievements from "../../Data/achievements.json";
import styles from "./Achievement.module.css";

export const Achievement = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const initialCount = 3;
  const visibleAchievements = showAll
    ? achievements
    : achievements.slice(0, initialCount);

  return (
    <section className={styles.container} id="Achievement">
      <h2 className={styles.title}>Achievements</h2>

      <div className={styles.cards}>
        {visibleAchievements.map((item) => (
          <div key={item.id} className={styles.card}>
            <img
              src={item.image}
              alt={item.title}
              className={styles.image}
              onClick={() => setSelectedImage(item.image)}
              style={{ cursor: "pointer" }}
            />
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>

      {achievements.length > initialCount && (
        <button
          className={styles.viewButton}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "View Less" : "View More"}
        </button>
      )}

      {/* Modal Overlay */}
      {selectedImage && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
            <img src={selectedImage} alt="Full view" className={styles.fullImage} />
          </div>
        </div>
      )}
    </section>
  );
};
