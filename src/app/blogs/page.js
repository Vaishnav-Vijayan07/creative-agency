'use client'
import React, { useEffect } from 'react'
import styles from '@/styles/Blogs.module.scss'
import { useRouter } from 'next/navigation'
import AOS from 'aos'
import "aos/dist/aos.css";

const page = () => {
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault()
        router.push('/blogs/1'); // Navigate to the /about page
    };

    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: 'ease', 
        });
        AOS.refresh();
      }, []);
    return (
        <section className={styles.blogs_container}>
            <div className={styles.video_container}>
                <video autoPlay muted loop poster="/images/background.png" playsInline className={styles.video} id="background-video">
                    <source src="/video/bg_video.mp4" type="video/mp4" />
                </video>
            </div>

            <div className={styles.content}>
                <p className={styles.aboutus_para}>Articles, Events, News</p>
                <h1>Blogs</h1>
            </div>

            <section className={styles.blogs_details}>
                {/* <h3>Our <div><span>Blogs</span></div></h3> */}
                {/* <p>Creative Studio follows a collaborative and iterative approach to creation, with a <br /> focus on understanding and meeting the unique needs of each client.</p> */}

                <div className={styles.card_list}>
                    <div className={styles.card} onClick={handleClick} data-aos="flip-left" key="1" >
                        <img src='/blogs/1.png' alt='' />
                        <h5>There are many variations of passages </h5>
                        <h6>Jan 03, 2024   |   1 day ago</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                    </div>

                    <div className={styles.card} onClick={handleClick} data-aos="flip-left" key="2" >
                        <img src='/blogs/1.png' alt='' />
                        <h5>There are many variations of passages </h5>
                        <h6>Jan 03, 2024   |   1 day ago</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                    </div>

                    <div className={styles.card} onClick={handleClick} data-aos="flip-left" key="3">
                        <img src='/blogs/1.png' alt='' />
                        <h5>There are many variations of passages </h5>
                        <h6>Jan 03, 2024   |   1 day ago</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                    </div>

                    <div className={styles.card} onClick={handleClick} data-aos="flip-left" key="4">
                        <img src='/blogs/1.png' alt='' />
                        <h5>There are many variations of passages </h5>
                        <h6>Jan 03, 2024   |   1 day ago</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                    </div>

                    <div className={styles.card} onClick={handleClick} data-aos="flip-left" key="5">
                        <img src='/blogs/1.png' alt='' />
                        <h5>There are many variations of passages </h5>
                        <h6>Jan 03, 2024   |   1 day ago</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                    </div>

                    <div className={styles.card} onClick={handleClick} data-aos="flip-left" key="6">
                        <img src='/blogs/1.png' alt='' />
                        <h5>There are many variations of passages </h5>
                        <h6>Jan 03, 2024   |   1 day ago</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                    </div>

                    <div className={styles.card} onClick={handleClick} data-aos="flip-left" key="7">
                        <img src='/blogs/1.png' alt='' />
                        <h5>There are many variations of passages </h5>
                        <h6>Jan 03, 2024   |   1 day ago</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default page