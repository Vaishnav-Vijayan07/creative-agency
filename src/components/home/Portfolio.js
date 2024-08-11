"use client"
import React from 'react'
import styles from "../../styles/Portfolio.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useRouter } from 'next/navigation';

const Portfolio = () => {
    const router = useRouter()
    const handleClick = () => {
        router.push('/portfolio'); // Navigate to the /about page
    }
    return (
        <div className={styles.portfolio_container}>
            <div className={styles.top_section}>

                <div className={styles.header_container}><h3 data-aos="fade-up">Journey Through <br /> Our<div><span>Work</span></div></h3> <button onClick={handleClick}>See More <img src='/icons/arrow.png' alt="icon" width={30}></img></button></div>
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
                    // centeredSlides={true}
                    speed={1000}
                    preventClicks={false}
                    pagination={{
                        el: '.swiper-pagination',
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
                    <SwiperSlide key={"10"} className={styles.card}>

                        <div className={styles.card_content}>
                            <span>Branding</span>
                            <span>Digital Marketing</span>
                        </div>
                        <img src='/images/portfolio/portfolio_1.png' alt="portfolio" />
                        <p>Abrevia - Architects Startup </p>


                    </SwiperSlide>

                    <SwiperSlide key={"2"} className={styles.card}>
                        <div className={styles.card_content}>
                            <span>Design</span>
                            <span>Content Writing</span>
                        </div>
                        <img src='/images/portfolio/portfolio_2.png' alt="portfolio" />

                        <p>Omnihub - Website Solution</p>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className={styles.partners_list}>
                <h4>Our Clientele</h4>

                <div className={styles.logo_wrapper}>
                    <img src='/images/client_logos/1.png' />
                    <img src='/images/client_logos/2.png' />
                    <img src='/images/client_logos/3.png' />
                    <img src='/images/client_logos/4.png' />
                    <img src='/images/client_logos/5.png' />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
