"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Blogs.module.scss";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { daysAgo, formatDateString } from "../constants/functions";

const page = () => {
  const router = useRouter();

  const [blogs, setBlogs] = useState([]);
  const handleClick = (id) => {
    router.push("/blogs/" + id); // Navigate to the /about page
  };

  const sendRequest = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}blogs`).then((response) => {
        setBlogs(response.data);
      });
    } catch (err) {
      console.log("err===>", err);
    }
  };

  useEffect(() => {
    sendRequest();
    AOS.init({
      duration: 700,
      easing: "ease",
    });
    AOS.refresh();
  }, []);
  return (
    <section className={styles.blogs_container}>
      <div className={styles.video_container}>
        <video autoPlay muted loop poster="/images/background.png" playsInline className={styles.video} id="background-video">
          <source src="/video/bg_video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.content}>
        <p className={styles.aboutus_para}>Articles, Events, News</p>
        <h1>Blogs</h1>
      </div>

      <section className={styles.blogs_details}>
        {/* <h3>Our <div><span>Blogs</span></div></h3> */}
        {/* <p>Creative Studio follows a collaborative and iterative approach to creation, with a <br /> focus on understanding and meeting the unique needs of each client.</p> */}

        <div className={styles.card_list}>
          {blogs?.slice(0, 3)?.map((blog) => (
            <div className={styles.card} onClick={() =>handleClick(blog?.id)} data-aos="flip-left" key="1">
              <img src={`${process.env.NEXT_PUBLIC__URL}${blog?.Image?.url}`} alt="" />
              <h5>{blog?.Title} </h5>
              <h6>
                {formatDateString(blog?.Date)} | {daysAgo(blog?.Date)}
              </h6>
              <p>{blog?.Content}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default page;
