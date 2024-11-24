"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/PortfolioPage.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Router } from "next/router";
import axios from "axios";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of items to display per page

  const [portfolios, setPortfolios] = useState([]);

  const sendRequest = async () => {
    try {
      const result = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}portfolios`);
      const data = result.data;
      console.log("data =>", data);
      setPortfolios(data);
    } catch (err) {
      console.log(err);
    }
  };

  const totalPages = Math.ceil(portfolios?.length / itemsPerPage);

  // Items to display on the current page
  const currentItems = portfolios?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  useEffect(() => {
    sendRequest();
    AOS.init({
      duration: 700,
      easing: "ease",
    });
    // AOS.refresh();
    const handleRouteChange = () => {
      //   AOS.refresh();
    };

    Router.events.on("routeChangeComplete", handleRouteChange);

    // Cleanup event listener on component unmount
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <main className={styles.portfolio_container}>
      <div style={{ height: "100%" }}>
        <div className={styles.video_container}>
          <video autoPlay muted playsInline loop poster="/images/background.png" className={styles.video} id="background-video">
            <source src="/video/bg_video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className={styles.content}>
          <p className={styles.aboutus_para}>Journey Through Our Work</p>
          <h1>Portfolio</h1>
        </div>
      </div>

      <div className={styles.portfolio_container}>
        <div className={styles.top_section}>
          <div className={styles.header_container} data-aos="fade-up" key="p_1">
            <h3>
              Journey Through <br /> Our
              <div>
                <span>Work</span>
              </div>
            </h3>
          </div>
          {/* <p data-aos="fade-up">Creative Studio follows a collaborative and iterative approach to creation, with a focus on understanding and meeting the unique needs of each client.</p> */}
        </div>
        <div className={styles.slider_container}>
          <div className={styles.slider}>
            {currentItems?.map((item) => (
              <div data-aos="flip-left" key={item.id}>
                <div className={styles.card}>
                  <div className={styles.card_content}>
                    {item?.Categories?.map((category, index) => (
                      <span key={index}>{category?.name}</span>
                    ))}
                  </div>
                  <img src={`${process.env.NEXT_PUBLIC__URL}${item?.Image?.url}`} alt="portfolio" />
                </div>
                <p>{item?.Title}</p>
              </div>
            ))}
          </div>

          <div className={styles.button_container}>
            <div className={`${styles.button_wrapper}`} onClick={handlePrevPage}>
              <div className={`${styles.button_container} ${currentPage === 1 ? styles.disabled : ""}`}>
                <img className={styles.left_image} src="/icons/arrow.png" alt="" />
              </div>
              <span className={styles.button_text}>PREVIOUS PAGE</span>
            </div>

            {/* Page Indicator */}
            <span className={styles.page_indicator}>
              Page {currentPage} of {totalPages}
            </span>
            <div className={`${styles.button_wrapper}`} onClick={handleNextPage}>
              <div className={`${styles.button_container} ${currentPage === totalPages ? styles.disabled : ""}`}>
                <img src="/icons/arrow.png" alt="" />
              </div>
              <span className={styles.button_text}>NEXT PAGE</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
