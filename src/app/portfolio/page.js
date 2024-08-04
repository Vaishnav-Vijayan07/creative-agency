import React from 'react'
import styles from '@/styles/PortfolioPage.module.scss'
// import Swiper from 'swiper'
// import SwiperSlide from 'swiper/react'


const Portfolio = () => {
    return (
        <main className={styles.portfolio_container}>
            <div style={{ height: "100%" }}>
                <div className={styles.video_container}>
                    <video autoPlay muted  playsInline loop className={styles.video} id="background-video">
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
                    <div className={styles.header_container}><h3>Journey Through <br /> Our<div><span>Work</span></div></h3></div>
                    <p>Creative Studio follows a collaborative and iterative approach to creation, with a focus on understanding and meeting the unique needs of each client.</p>
                </div>
                <div className={styles.slider_container}>
                    <div className={styles.slider}>
                        <div>
                            <div key={"1"} className={styles.card}>

                                <div className={styles.card_content}>
                                    <span>Branding</span>
                                    <span>Digital Marketing</span>
                                </div>
                                <img src='/images/portfolio/portfolio_1.png' alt="portfolio" />

                            </div>
                            <p>Abrevia - Architects Startup </p>
                        </div>

                        <div>
                            <div key={"2"} className={styles.card}>
                                <div className={styles.card_content}>
                                    <span>Design</span>
                                    <span>Content Writing</span>
                                </div>
                                <img src='/images/portfolio/portfolio_2.png' alt="portfolio" />

                            </div>
                            <p>Omnihub - Website Solution</p>
                        </div>

                        <div>
                            <div key={"1"} className={styles.card}>

                                <div className={styles.card_content}>
                                    <span>Branding</span>
                                    <span>Digital Marketing</span>
                                </div>
                                <img src='/images/portfolio/portfolio_1.png' alt="portfolio" />

                            </div>
                            <p>Abrevia - Architects Startup </p>
                        </div>

                        <div>
                            <div key={"2"} className={styles.card}>
                                <div className={styles.card_content}>
                                    <span>Design</span>
                                    <span>Content Writing</span>
                                </div>
                                <img src='/images/portfolio/portfolio_2.png' alt="portfolio" />

                            </div>
                            <p>Omnihub - Website Solution</p>
                        </div>

                        <div>
                            <div key={"1"} className={styles.card}>

                                <div className={styles.card_content}>
                                    <span>Branding</span>
                                    <span>Digital Marketing</span>
                                </div>
                                <img src='/images/portfolio/portfolio_1.png' alt="portfolio" />

                            </div>
                            <p>Abrevia - Architects Startup </p>
                        </div>

                        <div>
                            <div key={"2"} className={styles.card}>
                                <div className={styles.card_content}>
                                    <span>Design</span>
                                    <span>Content Writing</span>
                                </div>
                                <img src='/images/portfolio/portfolio_2.png' alt="portfolio" />

                            </div>
                            <p>Omnihub - Website Solution</p>
                        </div>
                    </div>

                    <div className={styles.button_container}>
                        <div className={styles.button_wrapper}>
                            <div className={styles.button_container}>
                                <img className={styles.left_image} src="/icons/arrow.png" alt="" />
                            </div>
                            <span>PREVIOUS PAGE</span>
                        </div>
                        <div className={styles.button_wrapper}>
                            <div className={styles.button_container}>
                                <img src="/icons/arrow.png" alt="" />
                            </div>
                            <span>NEXT PAGE</span>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Portfolio