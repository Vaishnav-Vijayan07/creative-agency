"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Testimonials.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import axios from "axios";

const Testimonials = () => {
  const swiperRef = useRef(null); // Create a ref for the Swiper instance
  const [testimonials, setTestimonials] = useState([]);

  const handleNext = () => {
    swiperRef.current.swiper.slideNext(); // Move to the next slide
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev(); // Move to the previous slide
  };

  const sendRequest = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}testimonials`);
      const data = response.data;
      setTestimonials(data);
      console.log("data =>", data);
    } catch (err) {
      console.log("err =>", err);
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials_container}>
        <div className={styles.side_header}>Testimonials</div>

        <h3 data-aos="fade-up">
          <div>
            <span>Stories</span>
          </div>{" "}
          of Impact, <br /> Innovation, and Enduring Partnership
        </h3>
        <p data-aos="fade-up">
          Dive into the experiences of those who have journeyed with The Creators’ Café, where inspiration meets results.
        </p>

        {/* <div className={styles.slider_container}> */}
        <Swiper
          key={"courseSwiper"}
          ref={swiperRef}
          loop={true}
          className={styles.slider_container}
          spaceBetween={10}
          slidesPerView={1}
          modules={[Pagination, Navigation, Autoplay]}
          preventClicksPropagation={false}
          centeredSlides={true}
          speed={1000}
          preventClicks={false}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: `#nex1_1`,
            prevEl: `#next_2`,
          }}
          initialSlide={1}
          autoplay={{
            delay: 5000, // Delay between slides in ms
            disableOnInteraction: false, // Continue autoplay after user interactions
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1551: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
          }}
        >
          {testimonials?.map((item) => (
            <SwiperSlide key={item?.id} className={styles.card}>
              {/* <div className={`${styles.card} ${styles.card_active}`}> */}
              <div className={styles.avatar_container}>
                <div className={styles.avatar_image}>
                  <img src={`${process.env.NEXT_PUBLIC__URL}${item?.Image.url}`} alt="" />
                </div>
                <div className={styles.username_container}>
                  <span>{item?.Name}</span>
                  <p>{item?.Designation}</p>
                </div>

                <div className={styles.icon_container}></div>
              </div>

              <p>{item?.Testimonial}</p>
              {/* </div> */}
            </SwiperSlide>
          ))}

          <div className={styles.swiper_custom_btns}>
            <button onClick={handlePrev}>
              <svg width="24" height="12" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.2509 9.04011C0.860376 8.64959 0.860376 8.01643 1.2509 7.6259L7.61486 1.26194C8.00539 0.871416 8.63855 0.871416 9.02908 1.26194C9.4196 1.65246 9.4196 2.28563 9.02908 2.67615L3.37222 8.33301L9.02908 13.9899C9.4196 14.3804 9.4196 15.0136 9.02908 15.4041C8.63855 15.7946 8.00539 15.7946 7.61486 15.4041L1.2509 9.04011ZM25.958 9.33301L1.95801 9.33301V7.33301L25.958 7.33301V9.33301Z"
                  fill="white"
                />
              </svg>
            </button>
            <button onClick={handleNext}>
              <svg width="24" height="12" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M25.6651 9.04011C26.0556 8.64959 26.0556 8.01643 25.6651 7.6259L19.3012 1.26194C18.9106 0.871416 18.2775 0.871416 17.8869 1.26194C17.4964 1.65246 17.4964 2.28563 17.8869 2.67615L23.5438 8.33301L17.8869 13.9899C17.4964 14.3804 17.4964 15.0136 17.8869 15.4041C18.2775 15.7946 18.9106 15.7946 19.3012 15.4041L25.6651 9.04011ZM0.958008 9.33301L24.958 9.33301V7.33301L0.958008 7.33301V9.33301Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </Swiper>
        {/* </div> */}
      </div>
      <div className={styles.testimonail_bottom_div}></div>
    </section>
  );
};

export default Testimonials;
