import React from "react";
import GitHubCalendar from "react-github-calendar";
import styles from "./Github.module.css";

function Github() {
  return (
    <div className={styles.githubSection}>
      <h1>
        Days I <strong style={{ color: "#576cbc" }}>Code</strong>
      </h1>
      <div className={styles.calendarWrapper}>
        <GitHubCalendar
          username="TirthChapla"
          blockSize={15}
          blockMargin={5}
          color="#576cbc"
          fontSize={16}
        />
      </div>

      <div className={styles.statsImages}>
  <img
    src="https://github-readme-streak-stats.herokuapp.com/?user=TirthChapla&theme=radical"
    alt="GitHub streak stats"
  />
  <img
    src="https://github-readme-stats.vercel.app/api/top-langs/?username=TirthChapla&layout=compact&theme=radical"
    alt="Most used languages"
  />
</div>
    </div>
  );
}

export default Github;








// import React from "react";
// import GitHubCalendar from "react-github-calendar";
// import styles from "./Github.module.css";

// function Github() {
//   return (
//     <div className={styles.githubSection}>
//       <h1>
//         Days I <strong style={{ color: "#576cbc" }}>Code</strong>
//       </h1>
//       <div className={styles.calendarWrapper}>
//         <GitHubCalendar
//           username="TirthChapla"
//           blockSize={15}
//           blockMargin={5}
//           color="#576cbc"
//           fontSize={16}
//         />
//       </div>
//     </div>
    
//   );
// }

// export default Github;