"use client"
import React from "react";
import styles from "../../styles/Home.module.scss";
import { useRouter } from "next/navigation";

const AboutUs = () => {
  const router = useRouter()
  const handleClick = () =>{
      router.push('/about-us'); // Navigate to the /about page
  }
  return (
    <div className={styles.aboutus_section}>
      <div className={styles.aboutus_heading} data-aos="fade-up">
        <h4>Bespoke Creative Solutions</h4>
        <p>
          We are a multi-service creative agency, partnering with individuals and businesses of all sizes to bring your ideas to life. We offer the right support to transform your vision into a compelling, marketable solution.
        </p>
      </div>

      <img src="/images/aboutus_1.png" alt="" id={styles.aboutus_image1_mob} data-aos="fade-right" />
      <div className={styles.aboutus_content}>
        <div className={styles.content_left_wrapper}>
          <img src="/images/aboutus_1.png" alt="" id={styles.aboutus_image1} data-aos="fade-right" />
          <p data-aos="fade-up">
          Let’s make your brand stand out through evocative content and designs, strategic digital marketing, and impactful video production services tailored to your needs.
          </p>
          <button id={styles.about_us_button} data-aos="fade-up">Know more about us <img src="/icons/arrow.png" id={styles.arrow_icon} onClick={handleClick} /></button>
        </div>
        <div className={styles.content_right_wrapper}>
          <img src="/images/aboutus_2.png" alt="" id={styles.aboutus_image2} data-aos="fade-left" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
