import React from "react";
// import styles from "@/styles/AboutUs.module.scss";
import styles from "../../styles/AboutUs.module.scss";

const AboutUsBanner = () => {
  return (
    <div style={{ height: "100%" }}>
      <div className={styles.video_container}>
        <video autoPlay muted loop  playsInline className={styles.video} id="background-video">
          <source src="/video/bg_video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.content}>
        <p className={styles.aboutus_para}>About Creaters' Cafe</p>
        <h1>Our Story</h1>
      </div>
    </div>
  );
};

export default AboutUsBanner;
