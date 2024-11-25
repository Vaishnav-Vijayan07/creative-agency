"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/Services.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { data } from "@/data/services";
import { Router } from "next/router";

const ServicesPage = () => {
  const router = useRouter();
  const [isSwiperActive, setIsSwiperActive] = useState(false);

  const handleClick = (item) => {
    router.push(`/services/${item?.id}`);
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease",
    });
    const handleRouteChange = () => {
      AOS.refresh();
    };

    Router.events?.on("routeChangeComplete", handleRouteChange);

    return () => {
      Router.events?.off("routeChangeComplete", handleRouteChange);
    };
  }, [Router.events]);

  // Handle screen resize to toggle Swiper
  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 1024px)").matches) {
        setIsSwiperActive(true);
      } else {
        setIsSwiperActive(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className={`${styles.services_container} services_container`}>
      {/* Video Background */}
      <div className={styles.video_container}>
        <video autoPlay muted loop playsInline className={styles.video} poster="/images/background.png" id="background-video">
          <source src="/video/bg_video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Page Header */}
      <div className={styles.content}>
        <p className={styles.aboutus_para}>The Art of Strategic Creativity</p>
        <h1>Our Services</h1>
      </div>

      {/* Services Section */}
      <div className={styles.our_solutions_container}>
        <div className={styles.our_solutions}>
          {/* Static Layout */}
          {!isSwiperActive && (
            <div className={styles.card_container}>
              {data?.map((item) => (
                <div className={styles.card} onClick={() => handleClick(item)} key={item?.id} data-aos="flip-right">
                  <h5>
                    <span>0{item?.id} &nbsp;</span> {item?.heading}
                  </h5>
                  <img src={item?.image} alt="" />
                  <h6>{item?.subheading}</h6>
                  <p>{item?.card_description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Swiper Layout */}
          {isSwiperActive && (
            <Swiper
              key="solutionPageSwiper"
              loop={false}
              className={styles.card_container}
              spaceBetween={20}
              slidesPerView={1}
              modules={[Pagination, Navigation]}
            //   pagination={{ clickable: true }}
            //   navigation
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 15 },
                1024: { slidesPerView: 2, spaceBetween: 20 },
                1551: { slidesPerView: 3, spaceBetween: 25 },
              }}
            >
              {data?.map((item) => (
                <SwiperSlide key={item.id} className={styles.card} onClick={() => handleClick(item)}>
                  <h5>
                    <span>0{item?.id} &nbsp;</span> {item?.heading}
                  </h5>
                  <img src={item?.image} alt="" />
                  <h6>{item?.subheading}</h6>
                  <p>{item?.card_description}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;
