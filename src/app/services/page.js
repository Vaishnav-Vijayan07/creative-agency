'use client'

import React, { useEffect, useState } from 'react'
import styles from '@/styles/Services.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import AOS from 'aos'
import "aos/dist/aos.css";

import { data } from '@/data/services';

const page = () => {
    // const router = useRouter();
    const router = useRouter()
    const [isSwiperActive, setIsSwiperActive] = useState(false);

    const handleClick = (item) => {
        router.push(`/services/${item?.id}`); // Navigate to the /about page
    };

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia('(max-width: 1024px)').matches) { // Adjust the breakpoint as needed
                setIsSwiperActive(true);
            } else {
                setIsSwiperActive(false);
            }
        };

        // Initialize Swiper on component mount and handle resize
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <main className={`${styles.services_container} services_container`}>
            <div className={styles.video_container}>
                <video autoPlay muted loop playsInline className={styles.video} poster="/images/background.png" id="background-video">
                    <source src="/video/bg_video.mp4" type="video/mp4" />
                </video>
            </div>

            <div className={styles.content} >
                <p className={styles.aboutus_para}>The Art of Strategic Creativity</p>
                <h1>Our Services</h1>
            </div>


            <div className={styles.our_solutions_container}>
                <div className={styles.our_solutions}>
                    {/* <h3 data-aos="fade-up">
                        The Art of <div><span>Strategic</span></div> <br /> Creativity
                    </h3>
                    <p data-aos="fade-up" className={styles.our_solutions_description}>Creative Studio follows a collaborative and iterative approach to creation, with a <br />
                        focus on understanding and meeting the unique needs of each client.</p> */}

                    {!isSwiperActive && <div className={styles.card_container}>

                        {data?.map((item) => (

                            <div className={styles.card} onClick={() => handleClick(item)} data-aos="flip-right">
                                <h5><span>0{item?.id} &nbsp;</span> {item?.heading}</h5>
                                <img src={item?.image} alt='' />
                                {/* <img src='/images/our_solutions/1.png' alt='' /> */}
                                <h6>{item?.subheading}</h6>
                                <p>{item?.card_description}</p>
                            </div>
                        ))}
                    </div>}

                    {isSwiperActive &&
                        <Swiper
                            key={"solutionPageSwiper"}
                            loop={false}
                            className={styles.card_container}
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
                            {data?.map((item) => (

                                // <div className={styles.card} onClick={handleClick}>
                                <SwiperSlide key={"1"} className={styles.card} onClick={() => handleClick(item)}>
                                    <h5><span>0{item?.id} &nbsp;</span> {item?.heading}</h5>
                                    <img src={item?.image} alt='' />
                                    {/* <img src='/images/our_solutions/1.png' alt='' /> */}
                                    <h6>{item?.subheading}</h6>
                                    <p>{item?.card_description}</p>
                                </SwiperSlide>
                            ))}
                            {/* <SwiperSlide key={"1"} className={styles.card} onClick={handleClick}>
                                <h5><span>01 &nbsp;</span> Content Writing</h5>
                                <img src='/images/our_solutions/1.png' alt='' />
                                <h6>Molding Ideas into Powerful Stories</h6>
                                <p>Our content writing services encompass a wide spectrum of needs, ensuring every word captivates and communicates effectively.</p>
                            </SwiperSlide> */}
                            {/* <SwiperSlide key={"1"} className={styles.card} onClick={handleClick}>
                                <h5><span>02 &nbsp;</span> Digital Marketing</h5>
                                <img src='/images/our_solutions/2.png' alt='' />
                                <h6>Strategically Amplifying Your Reach</h6>
                                <p>In the digital age, effective marketing is about more than visibility—it's about meaningful engagement and sustainable growth.</p>
                            </SwiperSlide>
                            <SwiperSlide key={"1"} className={styles.card} onClick={handleClick}>
                                <h5><span>03 &nbsp;</span> Advertising & Production</h5>
                                <img src='/images/our_solutions/3.png' alt='' />
                                <h6>From Concept to Captivation</h6>
                                <p>Our advertising and production services are designed to turn your concepts into captivating campaigns.</p>
                            </SwiperSlide>
                            <SwiperSlide key={"1"} className={styles.card} onClick={handleClick}>
                                <h5><span>04 &nbsp;</span> Consulting Services</h5>
                                <img src='/images/our_solutions/4.png' alt='' />
                                <h6>Guiding Creativity to Success</h6>
                                <p>Our consulting services offer invaluable guidance in creative direction and campaign development.</p>
                            </SwiperSlide>
                            <SwiperSlide key={"1"} className={styles.card} onClick={handleClick}>
                                <h5><span>05 &nbsp;</span> Design and Animation</h5>
                                <img src='/images/our_solutions/5.png' alt='' />
                                <h6>Visual Storytelling at Its Finest</h6>
                                <p>Our design and animation services are dedicated to bringing your brand's visual identity to life.</p>
                            </SwiperSlide>
                            <SwiperSlide key={"1"} className={styles.card} onClick={handleClick}>
                                <h5><span>06 &nbsp;</span> Crafting a Lasting Impression</h5>
                                <img src='/images/our_solutions/6.png' alt='' />
                                <h6>Molding Ideas into Powerful Stories</h6>
                                <p>In the competitive landscape of today, effective branding is essential for differentiation and recognition.</p>
                            </SwiperSlide> */}
                        </Swiper>
                    }
                </div>
            </div>
        </main>
    )
}

export default page