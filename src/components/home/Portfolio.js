"use client";
import React, { use, useEffect, useState } from "react";
import styles from "../../styles/Portfolio.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";
import axios from "axios";

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  const router = useRouter();
  const handleClick = () => {
    router.push("/portfolio"); // Navigate to the /about page
  };

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

  useEffect(() => {
    sendRequest();
  }, []);
  return (
    <div className={styles.portfolio_container}>
      <div className={styles.top_section}>
        <div className={styles.header_container}>
          <h3 data-aos="fade-up">
            Journey Through <br /> Our
            <div>
              <span>Work</span>
            </div>
          </h3>{" "}
          <button onClick={handleClick}>
            See More <img src="/icons/arrow.png" alt="icon" width={30}></img>
          </button>
        </div>
      </div>
      <div className={styles.slider_container}>
        <Swiper
          data-aos="fade-up"
          key={"portfolioSwiper1"}
          loop={false}
          className={styles.slider}
          spaceBetween={10}
          slidesPerView={1}
          modules={[Pagination, Navigation]}
          preventClicksPropagation={false}
        //   centeredSlides={true}
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
              slidesPerView: 2,
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
          {portfolios?.slice(0, 2)?.map((item) => (
            <SwiperSlide key={"10"} className={styles.card}>
              <div className={styles.card_content}>
                {item?.Categories?.map((category, index) => (
                  <span key={index}>{category?.name}</span>
                ))}
              </div>
              <img src={`${process.env.NEXT_PUBLIC__URL}${item?.Image?.url}`} alt="portfolio" />
              <p>{item?.Title} </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.partners_list}>
        <h4>Our Clientele</h4>

        <div className={styles.logo_wrapper}>
          <img src="/images/client_logos/1.png" />
          <img src="/images/client_logos/2.png" />
          <img src="/images/client_logos/3.png" />
          <img src="/images/client_logos/4.png" />
          <img src="/images/client_logos/5.png" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
