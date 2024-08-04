import React from "react";
import styles from "../../styles/HeroBanner.module.scss";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div style={{ height: "100%" }}>
      <div className={styles.video_container}>
        <video muted autoPlay loop playsInline preload="metadata" poster="/images/background.png" aria-label="Video player" className={styles.video} id="background-video">
          <source src="/video/bg_video.mp4" type="video/mp4" />
          This video is not supported in this browser
        </video>
      </div>

      <div className={styles.content}>
        <h1>The Creators' Cafe</h1>
        <h3>Crafting Digital Excellence</h3>
        <p>
          The Creators' Cafe is a multi-service agency that transforms visions into reality through innovative
          storytelling, evocative designs, and strategic creativity.
        </p>
      </div>

      <div className={styles.collage_container}>

        <div className={styles.collage_sub_container}>
          <div className={styles.image_1}>
            <img src="/images/img3.png" />
          </div>
          <div className={styles.image_2}>
            <img src="/images/img4.png" />
          </div>
          <div className={styles.image_3}>
            <img src="/images/img2.png" />
          </div>
          <div className={styles.image_4}>
            <img src="/images/img1.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
