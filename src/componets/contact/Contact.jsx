import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./contact.module.css"

export const Contact = () => {
  return (
    <footer id="contacts" className={styles.container} >
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Hye! feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="https://mail2babulal786@gmail.com">Email to me</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
          <a href="https://github.com/Chbabula">myGitHub</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedin Icon"
          />
          <a href="https://www.linkedin.com/in/ch-babula-developer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            My linkedin Profile
          </a>
        </li>
        
      </ul>
    </footer>
  );
};



