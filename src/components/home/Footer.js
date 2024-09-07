import React from 'react'
// import styles from "/styles/Footer.module.scss"
import styles from '../../styles/Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
    return (
        <section className={styles.footer_container}>
            <div className={styles.details_container}>
                <img src="/images/logo.png" alt="" />
                <h6> Let’s get started.</h6>
                <h5>+91-8356847683 / hello@thecreatorscafe.in</h5>
                <div className={styles.under_line}></div>
            </div>

            <ul className={styles.nav_items}>
                <Link href={"/"}><li>Home</li></Link>
                <Link href={"/about-us"}><li>About Us</li></Link>
                <Link href={"/services"}><li>Services</li></Link>
                <Link href={"/portfolio"}><li>Portfolio</li></Link>
                <Link href={"/blogs"}><li>Blogs</li></Link>
                <Link href={"/contact"}><li>Contact Us</li></Link>
            </ul>

            <p className={styles.copyright_text}>Copyright © 2024 The Creators’ Café. &nbsp; All Rights Reserved.</p>

            <div className={styles.curved_rectangle}>
                {/* <img src="/icons/fb.png" alt="" /> */}
                {/* <img src="/icons/yt.png" alt="" /> */}
                <img src="/icons/insta.png" alt="" />
                <img src="/icons/linkedin.png" alt="" />
                {/* <img src="/icons/x.png" alt="" /> */}
            </div>
            <div className={styles.normal_rectangle}></div>
        </section>
    )
}

export default Footer