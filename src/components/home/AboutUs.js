import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

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

      <div>
        <div>
          <Image src="/images/aboutus_1.png" width={100} height={100} />
          <p>
            Through strategic digital marketing, including SEO, social media, and influencer campaigns, we help you
            achieve long-term success. Our advertising and production team crafts impactful video productions, digital
            ads, and promotional campaigns tailored to your needs.
          </p>
          <button>Know more about us</button>
        </div>
        <div>
          <Image src="/images/aboutus_2.png" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
