import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section id="Contact" className={styles.contactSection}>
      <div className={styles.container}>
        
        {/* Left Column - Contact Form */}
        <div className={styles.formColumn}>
          <h2 className={styles.heading}>CONTACT WITH ME</h2>
          <p className={styles.subtext}>
            If you have any questions or concerns, please don't hesitate to contact me.
            I am open to any work opportunities that align with my skills and interests.
          </p>

          <form className={styles.contactForm}>
            <label>Your Name:</label>
            <input type="text" placeholder="Enter your name" required />

            <label>Your Email:</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Your Message:</label>
            <textarea placeholder="Write your message..." required></textarea>

            <p className={styles.requiredText}>All fields are required!</p>
            <button type="submit" className={styles.sendButton}>
              SEND MESSAGE ✉
            </button>
          </form>
        </div>

        {/* Right Column - Contact Info */}
        <div className={styles.infoColumn}>
          <div className={styles.text}>
            <h2 style={{ color: "#576cbc" }} >Connect Me Here !</h2>
            <p>Feel free to reach out!</p>
          </div>
          <ul className={styles.links}>
            <li className={styles.link}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/15047/15047587.png"
                alt="Email icon"
              />
              <a href="mailto:tirthchapla123@email.com">
                tirthchapla123@email.com
              </a>
            </li>
            <li className={styles.link}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png"
                alt="LinkedIn icon"
              />
              <a href="https://www.linkedin.com/in/tirth-chapla-589227297">
                linkedin.com/Tirth Chapla
              </a>
            </li>
            <li className={styles.link}>
              <img
                src="https://img.icons8.com/?size=96&id=63777&format=png"
                alt="Github icon"
              />
              <a href="https://github.com/TirthChapla">
                github.com/Tirth Chapla
              </a>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};





// import styles from "./Contact.module.css";

// export const Contact = () => {
//     return (
//       <footer id="Contact" className={styles.container} >
//         <div className={styles.text}>
//           <h2>Contact</h2>
//           <p>Feel free to reach out!</p>
//         </div>
//         <ul className={styles.links}>
//           <li className={styles.link}>
//             <img src="https://cdn-icons-png.flaticon.com/128/15047/15047587.png" alt="Email icon" />
//             <a href="mailto:tirthchapla123@email.com">tirthchapla123@email.com</a>
//           </li>
//           <li className={styles.link}>
//             <img
//               src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png"
//               alt="LinkedIn icon"
//             />
//             <a href="https://www.linkedin.com/in/tirth-chapla-589227297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedin.com/Tirth Chapla</a>
//           </li>
//           <li className={styles.link}>
//             <img src="https://img.icons8.com/?size=96&id=63777&format=png" 
//             alt="Github icon" />
//             <a href="https://github.com/TirthChapla">github.com/Tirth Chapla</a>
//           </li>
//         </ul>
//       </footer>
//     );
//   };