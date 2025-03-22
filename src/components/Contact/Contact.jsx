
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
            <a href="mailto:tirthchapla123@email.com">tirthchapla123@email.com</a>
          </li>
          <li className={styles.link}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png"
              alt="LinkedIn icon"
            />
            <a href="https://www.linkedin.com/in/tirth-chapla-589227297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedin.com/Tirth Chapla</a>
          </li>
          <li className={styles.link}>
            <img src="https://img.icons8.com/?size=96&id=63777&format=png" 
            alt="Github icon" />
            <a href="https://github.com/TirthChapla">github.com/Tirth Chapla</a>
          </li>
        </ul>
      </footer>
    );
  };