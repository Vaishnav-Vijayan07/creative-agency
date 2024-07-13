import React from "react";
import styles from "../../styles/HeroBanner.module.scss";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div style={{ height: "100%" }}>
      <div className={styles.video_container}>
        <video autoPlay muted loop className={styles.video} id="background-video">
          <source src="/video/bg_video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.collage_container}>
        <div className={styles.collage_sub_container}>
          <div className={styles.image_1}>
            <Image src="/images/collage_1.png" width="380" height="380" />
          </div>
          <div className={styles.image_2}>
            <Image src="/images/collage_2.png" width="380" height="380" />
          </div>
          <div className={styles.image_3}>
            <Image src="/images/collage_3.png" width="380" height="380" />
          </div>
          <div className={styles.image_4}>
            <Image src="/images/collage_4.png" width="380" height="380" />
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h1>The Creators' Cafe</h1>
        <h3>Crafting Digital Excellence</h3>
        <p>
          The Creators' Cafe is a multi-service agency that transforms visions into reality through innovative
          storytelling, evocative designs, and strategic creativity.
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
