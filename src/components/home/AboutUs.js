import React from "react";
import styles from "../../styles/Home.module.scss";

const AboutUs = () => {
  return (
    <div className={styles.aboutus_section}>
      <div className={styles.aboutus_heading}>
        <h4>Empower Your Vision with Tailored Creative Solutions</h4>
        <p>
          At Minari Creatives, we partner with businesses of all sizes and visionary individuals to bring your ideas to
          life. We specialize in transforming your vision into compelling stories, whether through engaging articles,
          captivating blogs, or dynamic website content. Our evocative designs, from graphic illustrations to
          animations, ensure your brand stands out.
        </p>
      </div>

      <img src="/images/aboutus_1.png" alt="" id={styles.aboutus_image1_mob} />
      <div className={styles.aboutus_content}>
        <div className={styles.content_left_wrapper}>
          <img src="/images/aboutus_1.png" alt="" id={styles.aboutus_image1} />
          <p>
            Through strategic digital marketing, including SEO, social media, and influencer campaigns, we help you
            achieve long-term success. Our advertising and production team crafts impactful video productions, digital
            ads, and promotional campaigns tailored to your needs.
          </p>
          <button id={styles.about_us_button}>Know more about us <img src="/icons/arrow.png" id={styles.arrow_icon} /></button>
        </div>
        <div className={styles.content_right_wrapper}>
          <img src="/images/aboutus_2.png" alt="" id={styles.aboutus_image2} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
