"use client";
import AboutUsBanner from "@/components/aboutus/AboutUsBanner";
import React, { useEffect, useState } from "react";
import styles from "@/styles/AboutUs.module.scss";
import Image from "next/image";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const page = () => {
  const [teamData, setTeamData] = useState([]);
  useEffect(() => {
    fetchTeamData();
    AOS.init({
      duration: 700,
      easing: "ease",
    });
    AOS.refresh();
  }, []);

  const fetchTeamData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}teams`);
      const data = response.data;
      setTeamData(data);
      console.log("data =>", data);
    } catch (error) {
      console.log("error =>", error);
    }
  };
  return (
    <div className={styles.about_us_section}>
      <AboutUsBanner />
      <section className={styles.aboutus_description}>
        <div className={styles.content_wrapper}>
          <div className={styles.contentLeft}>
            <div className={styles.topSection}>
              <div className={styles.logoWrapper}>
                <img src="/images/logoDark.png" alt="" className={styles.logo_image} data-aos="fade-right" />
                <h3 data-aos="fade-right">Our Story</h3>
              </div>
              <p data-aos="fade-right">
                Welcome to The Creators’ Café! Our journey began with a simple yet profound belief: An idea as small as a mustard
                seed has the potential to move mountains. Our job is to help you bring these ideas to life.{" "}
              </p>
            </div>
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
          </div>

          <div className={styles.contentRight}>
            <div className={styles.cardContainer} data-aos="fade-left">
              <h5>
                Our
                <div>
                  <span>Vision</span>
                </div>
              </h5>
              <p>
                At The Creators' Café, we believe that the greatest wonders can be built when free-flowing creativity seamlessly
                integrates with strategic planning. We strive to be the go-to destination for innovative minds seeking to make a
                significant impact through their creative endeavours.
              </p>
              <div className={styles.icon_container}>
                <img src="/icons/vision.png" />
              </div>
            </div>

            <div className={styles.cardContainer} data-aos="fade-left">
              <h5>
                Our
                <div>
                  <span>Mission</span>
                </div>
              </h5>
              <p>
                Our mission is to act as your trusted source of support, guidance, and expertise to help transform your ideas into
                compelling, marketable solutions. We are committed to delivering high-quality, customized creative services that
                make you stand out in a competitive market.
              </p>
              <div className={styles.icon_container}>
                <img src="/icons/mission.png" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.values_wrapper} data-aos="fade-up">
          <div className={styles.valuesHeading}>
            <h5>Our Values</h5>
          </div>
          <div className={styles.flexWrapper}>
            <div className={styles.flex_item}>
              <div className={styles.headingContainer}>
                <div className={styles.logoContainer}>
                  <img src="/icons/aboutus/trust.png" alt="" />
                </div>
                <span>Trust:</span>
              </div>
              <p>
                We believe trust is the foundation of all successful relationships. We build trust through transparency, honesty,
                and consistent delivery of high-quality results.
              </p>
            </div>

            <div className={styles.flex_item}>
              <div className={styles.headingContainer}>
                <div className={styles.logoContainer}>
                  <img src="/icons/aboutus/growth.png" alt="" />
                </div>
                <span>Growth:</span>
              </div>
              <p>
                We are committed to fostering continuous growth, both for our clients and our team. We strive to push boundaries,
                embrace new challenges, and constantly evolve our skills and services to stay ahead in a dynamic industry. Your
                growth is our growth.
              </p>
            </div>

            <div className={styles.flex_item}>
              <div className={styles.headingContainer}>
                <div className={styles.logoContainer}>
                  <img src="/icons/aboutus/respect.png" alt="" />
                </div>
                <span>Respect:</span>
              </div>
              <p>
                We value diverse perspectives and foster an inclusive environment where every idea is heard and valued. By
                respecting each other's contributions, we create a culture of mutual understanding and shared success.
              </p>
            </div>

            <div className={styles.flex_item}>
              <div className={styles.headingContainer}>
                <div className={styles.logoContainer}>
                  <img src="/icons/aboutus/creativity.png" alt="" />
                </div>
                <span>Creativity:</span>
              </div>
              <p>
                We are passionate about turning imaginative ideas into reality and believe that creativity has the power to
                transform brands and businesses.
              </p>
            </div>
          </div>
          <div className={styles.flex_item}>
            <div className={styles.headingContainer}>
              <div className={styles.logoContainer}>
                <img src="/icons/aboutus/creativity.png" alt="" />
              </div>
              <span>Creativity:</span>
            </div>
            <p>
              We are passionate about turning imaginative ideas into reality and believe that creativity has the power to
              transform brands and businesses.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.about_us_count}>
        <div className={styles.content_wrappper}>
          <h6 data-aos="fade-up">Founder’s Corner</h6>
          {/* <h3 data-aos="fade-up">Meet Apoorva</h3> */}
          <p data-aos="fade-up">
            Hi! I’m Apoorva, the founder of The Creators’ Café. Early in my career, I realized the importance of having the right
            support and guidance to achieve success. However, I also noticed that such support and guidance were not always easy
            to find. Many ideas and visions fail to materialize due to this lack. So, I made it my mission to provide the support
            and guidance needed for those seeking to grow and flourish in their creative endeavors.
            <br />
            <br />
            With over a decade of experience in the media and entertainment industry, I’ve had the privilege of diversifying my
            skills and knowledge base and working with a prominent set of clients across various industries. Starting as a writer
            and artist, I’ve expanded my expertise to include marketing, business development, content development, and creative
            production, among other areas. My aim is to use my experience and learnings to help solopreneurs, small businesses,
            and established enterprises propel their short-term and long-term growth.
          </p>

          <div className={styles.button_wrapper} data-aos="fade-up">
            <button>
              <span>
                <CountUp enableScrollSpy={true} start={0} end={100} key={"client-count"} /> +
              </span>
              <p>Happy Clients</p>
            </button>
            <button>
              <span>
                <CountUp enableScrollSpy={true} start={0} end={150} key={"project-count"} /> +
              </span>
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

      <section className={styles.meet_team}>
        <h3 data-aos="fade-up">Meet the Team</h3>

        <div className={styles.team_container}>
          {teamData?.map((item) => (
            <div className={styles.image_container} data-aos="flip-right">
              {/* <img src="/images/meet_team/3.png" /> */}
              <img src={`${process.env.NEXT_PUBLIC__URL}${item?.Image?.url}`} />
              <div className={styles.name_container}>
                <h6>{item?.Name}</h6>
                <span>{item?.Designation}</span>
              </div>
            </div>
          ))}

          {/* <div className={styles.image_container} data-aos="flip-right">
            <img src="/images/meet_team/1.png" />

            <div className={styles.name_container}>
              <h6>Pooja Jain</h6>
              <span>Content Writer</span>
            </div>
          </div>

          <div className={styles.image_container} data-aos="flip-right">
            <img src="/images/meet_team/2.png" />

            <div className={styles.name_container}>
              <h6>James Hunt</h6>
              <span>Content Writer</span>
            </div>
          </div> */}
        </div>
      </section>

      <section className={styles.gallery_section}>
        <img src="/images/aboutus/gallery.png" alt="" />
      </section>
    </div>
  );
};

export default page;
