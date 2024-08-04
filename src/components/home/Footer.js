import React from 'react'
// import styles from "/styles/Footer.module.scss"
import styles from '../../styles/Footer.module.scss'

const Footer = () => {
    return (
        <section className={styles.footer_container}>
            <div className={styles.details_container}>
                <img src="/images/logo.png" alt="" />
                <h6> Let’s start together.</h6>
                <h5>+91-835-6847683 // hello@minaricreatives.com</h5>
                <div className={styles.under_line}></div>
            </div>

            <ul className={styles.nav_items}>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Blogs</li>
                <li>Contact Us</li>
            </ul>

            <p className={styles.copyright_text}>Copyright © 2024 Minari Creatives. All Rights Reserved.</p>

            <div className={styles.curved_rectangle}>
                <img src="/icons/fb.png" alt="" />
                <img src="/icons/yt.png" alt="" />
                <img src="/icons/insta.png" alt="" />
                <img src="/icons/linkedin.png" alt="" />
                <img src="/icons/x.png" alt="" />
            </div>
            <div className={styles.normal_rectangle}></div>
        </section>
    )
}

export default Footer