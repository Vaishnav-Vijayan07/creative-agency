import React from "react";
import styles from "../../styles/HeroBanner.module.scss";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

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
        <h1>THE CREATORS’ CAFÉ</h1>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'DREAMERS',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'DOERS',
            1000,
            'VISIONARIES',
            1000,
            'INNOVATORS',
            1000,
            'HUSTLERS',
            1000

          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
        />
        <h3>Serving Creators Of Every Kind</h3>
        {/* <p>
          The Creators' Cafe is a multi-service agency that transforms visions into reality through innovative storytelling, evocative designs, and strategic creativity.
        </p> */}
      </div>

      {/* <div className={styles.collage_container}>

        <div className={styles.collage_sub_container}>
          <div className={styles.image_1} data-aos="fade-right">
            <img src="/images/img3.png"/>
          </div>
          <div className={styles.image_2} data-aos="fade-up">
            <img src="/images/img4.png"  />
          </div>
          <div className={styles.image_3} data-aos="fade-down">
            <img src="/images/img2.png"  />
          </div>
          <div className={styles.image_4} data-aos="fade-left">
            <img src="/images/img1.png"  />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeroBanner;
