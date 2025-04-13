"use client"
import React, { useEffect, useState } from 'react'
import styles from "../../styles/Home.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import { data } from '@/data/services';


const OurSolutions = () => {
  const [isSwiperActive, setIsSwiperActive] = useState(false);
  const router = useRouter()

  const handleClick = (item) => {
    router.push(`/services/${item?.id}`); // Navigate to the /about page
  };

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
    <div className={styles.our_solutions_container}>

      <div className={styles.side_header} >OUR SOLUTIONS</div>

      <div className={styles.our_solutions}>
        <h3 data-aos="fade-up">
          The Art of <br /> <div><span>Strategic</span></div> Creativity
        </h3>
        <p data-aos="fade-up" className={styles.our_solutions_description}>Avyanka Media follows a collaborative and iterative approach to creation, with a focus on understanding and meeting the unique needs of each client. </p>

        {!isSwiperActive && <div className={styles.card_container}>

          {data?.map((item) => (
            <div className={styles.card} onClick={() => handleClick(item)} data-aos="flip-left">
              <h5><span>0{item?.id} &nbsp;</span> {item?.heading}</h5>
              <img src={item?.image} alt='' />
              <h6>{item?.subheading}</h6>
              <p>{item?.card_description}</p>
            </div>))}
        </div>}

        {isSwiperActive &&
          <Swiper
            key={"solutionsSwiper"}
            loop={true}
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

              <SwiperSlide key={"1"} className={styles.card} onClick={() => handleClick(item)}>
                <h5><span>0{item?.id}</span> {item?.heading}</h5>
                <img src={item?.image} alt='' />
                <h6>{item?.subheading}</h6>
                <p>{item?.card_description}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        }
      </div>
    </div>
  )
}

export default OurSolutions