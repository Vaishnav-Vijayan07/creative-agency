"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Blogs.module.scss";
import { useRouter } from "next/navigation";
import axios from "axios";
import { daysAgo, formatDateString, truncateText } from "../constants/functions";

const BlogsPage = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle blog click
  const handleBlogClick = (id) => {
    router.push(`/blogs/${id}`);
  };

  // Fetch blogs
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}blogs`);
      setBlogs(response.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  // Initialize AOS and fetch blogs
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className={styles.blogs_container}>
      {/* Background Video */}
      <div className={styles.video_container}>
        <video autoPlay muted loop poster="/images/background.png" playsInline className={styles.video} id="background-video">
          <source src="/video/bg_video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Header Content */}
      <div className={styles.content}>
        <p className={styles.aboutus_para}>Articles, Events, News</p>
        <h1>Blogs</h1>
      </div>

      {/* Blogs Section */}
      <section className={styles.blogs_details}>
        {blogs?.length > 0 && !loading ? (
          <div className={styles.card_list}>
            {blogs.slice(0, 3).map((blog) => (
              <div className={styles.card} onClick={() => handleBlogClick(blog?.id)} data-aos="flip-left" key={blog.id}>
                <img src={`${process.env.NEXT_PUBLIC__URL}${blog?.Image?.url}`} alt={blog?.Title || "Blog Image"} />
                <h5>{blog?.Title}</h5>
                <h6>
                  {formatDateString(blog?.Date)} | {daysAgo(blog?.Date)}
                </h6>
                <p>{truncateText(blog?.Content, 100)}</p>
              </div>
            ))}
          </div>
        ) : (
          <h3>No Blogs Found...</h3>
        )}
      </section>
    </section>
  );
};

export default BlogsPage;
