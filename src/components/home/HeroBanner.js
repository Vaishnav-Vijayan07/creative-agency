import React from "react";
import styles from "../../styles/HeroBanner.module.css";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div>
      <div className={styles.video_container}>
        <video autoPlay muted loop className={styles.video} id="background-video">
          <source src="/video/bg_video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.collage_container}>
        <div className={styles.collage_sub_container}>
          <Image src="/images/collage_1.png" width="280" height="280" id="image1" />
          <Image src="/images/collage_2.png" width="280" height="280" id="image2" />
          <Image src="/images/collage_3.png" width="280" height="280" id="image3" />
          <Image src="/images/collage_4.png" width="280" height="280" id="image4" />
        </div>
      </div>

      <div className={styles.content}>
        <h1>Minari Creatives</h1>
        <h3>Crafting Digital Excellence</h3>
        <p>
          Minari Creatives is a multi-service agency that transforms visions into reality through innovative
          storytelling, evocative designs, and strategic creativity.
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
