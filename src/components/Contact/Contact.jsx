
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
      <footer id="Contact" className={styles.container} >
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src="https://cdn-icons-png.flaticon.com/128/15047/15047587.png" alt="Email icon" />
            <a href="mailto:myemail@email.com">tirthchapla123@email.com</a>
          </li>
          <li className={styles.link}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png"
              alt="LinkedIn icon"
            />
            <a href="https://www.linkedin.com/myname">linkedin.com/Tirth Chapla</a>
          </li>
          <li className={styles.link}>
            <img src="https://img.icons8.com/?size=96&id=63777&format=png" 
            alt="Github icon" />
            <a href="https://www.github.com/myname">github.com/Tirth Chapla</a>
          </li>
        </ul>
      </footer>
    );
  };