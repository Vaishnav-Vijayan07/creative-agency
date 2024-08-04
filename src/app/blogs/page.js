import React from 'react'
import styles from '@/styles/Blogs.module.scss'

const page = () => {
    return (
        <section className={styles.blogs_container}>
            <div className={styles.video_container}>
                <video autoPlay muted loop className={styles.video} id="background-video">
                    <source src="/video/bg_video.mp4" type="video/mp4" />
                </video>
            </div>

            <div className={styles.content}>
                <p className={styles.aboutus_para}>Articles, Events, News</p>
                <h1>Blogs</h1>
            </div>
        </section>
    )
}

export default page