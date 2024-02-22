import React from "react";

import styles from "./about.module.css";
import { getImageUrl } from "../../utils";

 export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="
        Me sitting with a laptaop"
        className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
            <div className={styles.aboitItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a Frontend developer with experience in buliding responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server" />
            <div className={styles.aboitItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised Backend systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI" />
            <div className={styles.aboitItemText}>
              <h3>UI Designer</h3>
              <p>
                I have Designer multiple landing pages and created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};


