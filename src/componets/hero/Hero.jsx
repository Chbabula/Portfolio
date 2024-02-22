import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi, I'm Babula</h1>
        <h3 className={styles.desc}>
          Wellcome to my Portfolio <br />
          I'm a full-stack developer and using this Portfolio you can find my
          work and experiences{" "}
        </h3>
        <a href="mail2babulal786@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero1.png")}
        alt="hero1"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.buttomBlur}></div>
    </section>
  );
};

export default Hero;
