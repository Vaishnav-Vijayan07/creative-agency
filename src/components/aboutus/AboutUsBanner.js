import React from "react";
// import styles from "@/styles/AboutUs.module.scss";
import styles from "../../styles/AboutUs.module.scss";

const AboutUsBanner = () => {
  return (
    <div style={{ height: "100%" }}>
      <div className={styles.video_container}>
        <video autoPlay muted loop  playsInline className={styles.video} poster="/images/background.png" id="background-video">
          <source src="/video/bg_video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.content}>
        <p className={styles.aboutus_para}>About The Creators’ Café </p>
        <h1>Behind the Scenes</h1>
      </div>
    </div>
  );
};

export default AboutUsBanner;
