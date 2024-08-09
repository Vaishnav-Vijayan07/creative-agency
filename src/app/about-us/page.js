"use client"
import AboutUsBanner from '@/components/aboutus/AboutUsBanner'
import React, { useEffect } from 'react'
import styles from '@/styles/AboutUs.module.scss'
import Image from 'next/image'
import CountUp from 'react-countup'
import AOS from 'aos'
import "aos/dist/aos.css";

const page = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <AboutUsBanner />
      <section className={styles.aboutus_description}>

        <img src="/images/logoDark.png" alt="" className={styles.logo_image} data-aos="fade-up" />
        <h3 data-aos="fade-up">Our Story</h3>
        <p data-aos="fade-up">Welcome to The Creators’ Café! Our journey began with a simple yet profound belief: An idea as small as a mustard seed has the potential to move mountains. Our job is to help you bring these ideas to life. </p>

        <div className={styles.content_wrapper}>
          <div className={styles.image_wrapper} data-aos="fade-right">
            <div className={styles.left_image_wrapper}>
              <img src="/images/aboutus/1.png" alt="" />
              <div className={styles.small_box}></div>
            </div>
            <div className={styles.middle_image_wrapper}>
              <img src="/images/aboutus/2.png" alt="" />
            </div>

            <div className={styles.right_image_wrapper}>
              <div className={styles.small_box}></div>
              <img src="/images/aboutus/3.png" alt="" />
            </div>
          </div>
          <div className={styles.text_wrapper} data-aos="fade-left">
            <b>Our Vision</b> <br />
            At The Creators' Cafe, we believe that the greatest wonders can be built when free-flowing creativity seamlessly integrates with strategic planning. We strive to be the go-to destination for innovative minds seeking to make a significant impact through their creative endeavours.
            <b> Our Mission</b> <br />
            Our mission is to act as your trusted source of support, guidance, and expertise to help transform your ideas into compelling, marketable solutions. We are committed to delivering high-quality, customized creative services that make you stand out in a competitive market.
            <b>Our Values</b> <br />
            Trust: We believe trust is the foundation of all successful relationships. We build trust through transparency, honesty, and consistent delivery of high-quality results.
            Growth: We are committed to fostering continuous growth, both for our clients and our team. We strive to push boundaries, embrace new challenges, and constantly evolve our skills and services to stay ahead in a dynamic industry. Your growth is our growth.
            Respect: We value diverse perspectives and foster an inclusive environment where every idea is heard and valued. By respecting each other's contributions, we create a culture of mutual understanding and shared success.
            Creativity: We are passionate about turning imaginative ideas into reality and believe that creativity has the power to transform brands and businesses.
            Collaboration: We work closely with our clients, blending our expertise with their vision to create exceptional results. By fostering open communication and teamwork, we ensure that every project is a true partnership, achieving greater outcomes together.

          </div>
        </div>
      </section>

      <section className={styles.about_us_count}>

        <div className={styles.content_wrappper}>
          <h6 data-aos="fade-up">Founder’s Corner</h6>
          <h3 data-aos="fade-up">Meet Apoorva</h3>
          <p data-aos="fade-up">Hi! I’m Apoorva, the founder of The Creators’ Café. Early in my career, I realized the importance of having the right support and guidance to achieve success. However, I also noticed that such support and guidance were not always easy to find. Many ideas and visions fail to materialize due to this lack. So, I made it my mission to provide the support and guidance needed for those seeking to grow and flourish in their creative endeavors.
            With over a decade of experience in the media and entertainment industry, I’ve had the privilege of diversifying my skills and knowledge base and working with a prominent set of clients across various industries. Starting as a writer and artist, I’ve expanded my expertise to include marketing, business development, content development, and creative production, among other areas.
            My aim is to use my experience and learnings to help solopreneurs, small businesses, and established enterprises propel their short-term and long-term growth.
          </p>

          <div className={styles.button_wrapper} data-aos="fade-up">
            <button>
              <span>
                <CountUp
                  enableScrollSpy={true}
                  start={0}
                  end={100}
                  key={"client-count"}
                /> +</span>
              <p>Happy Clients</p>
            </button>
            <button>
              <span><CountUp
                enableScrollSpy={true}
                start={0}
                end={150}
                key={"project-count"}
              /> +</span>
              <p>Successful Projects</p>

            </button>
          </div>
        </div>

        <div className={styles.image_wrapper} data-aos="fade-left">
          <div className={styles.image_container}>
            <img src="/images/aboutus/person.png" alt="" />
          </div>
        </div>
      </section>

      <section className={styles.gallery_section}>
        <img src="/images/aboutus/gallery.png" alt="" />
      </section>
    </div>
  )
}

export default page