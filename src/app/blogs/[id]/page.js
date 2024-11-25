"use client";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/BlogDetails.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from "next/navigation";
import axios from "axios";
import { daysAgo, formatDateString, truncateText } from "@/app/constants/functions";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

const page = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

  const sendRequest = async () => {
    try {
      const result = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}blogs/${id}`).then((response) => {
        console.log("response => ", response.data);
        setBlog(response.data);
      });
    } catch (err) {
      console.log("err => ", err);
    }
  };

  const sendRequest2 = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}blogs`).then((response) => {
        setBlogs(response.data);
      });
    } catch (err) {
      console.log("err===>", err);
    }
  };

  const handleClick = (id) => {
    router.push("/blogs/" + id); // Navigate to the /about page
  };

  useEffect(() => {
    if (id) {
      sendRequest();
      sendRequest2();
    }
    AOS.init({
      duration: 700,
      easing: "ease",
    });
    const handleRouteChange = () => {
      AOS.refresh();
    };

    Router.events.on("routeChangeComplete", handleRouteChange);

    // Cleanup event listener on component unmount
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [id, Router.events]);
  return (
    <main className={styles.detailed_blogs}>
      <div className={styles.video_container}>
        <video autoPlay muted loop playsInline poster="/images/background.png" className={styles.video} id="background-video">
          <source src="/video/bg_video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.content}>
        <p className={styles.aboutus_para}>Articles, Events, News</p>
        <h1>Blogs</h1>
      </div>

      <div className={styles.details_container}>
        {/* <img src="/blogs/details.png" alt="" /> */}
        <img src={`${process.env.NEXT_PUBLIC__URL}${blog?.Image?.url}`} alt="" />

        <h1>{blog?.Title}</h1>
        <h6>
          By {blog?.Author}, on {blog?.Date && formatDateString(blog?.Date)} | {blog?.Date && daysAgo(blog?.Date)}
        </h6>

        <p>{blog?.Content}</p>
      </div>

      <div className={styles.recent_blogs}>
        <h3>Recent Posts</h3>

        <div className={styles.card_list}>
          {blogs?.map((blog) => (
            <div className={styles.card} data-aos="flip-left" onClick={() => handleClick(blog?.id)}>
              <img src={`${process.env.NEXT_PUBLIC__URL}${blog?.Image.url}`} alt="" />
              <h5>{blog?.Title} </h5>
              <h6>
                {formatDateString(blog?.Date)} | {daysAgo(blog?.Date)}
              </h6>
              <p>{truncateText(blog?.Content)}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
