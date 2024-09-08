"use client"
import React from 'react'
import styles from '@/styles/contact.module.scss'
import FAQs from '@/components/home/FAQs'
import 'bootstrap/dist/css/bootstrap.min.css';

const Page = () => {
    return (
        <section className={styles.contact_container}>
            <div className={styles.video_container}>
                <video autoPlay muted loop  playsInline poster="/images/background.png" className={styles.video} id="background-video">
                    <source src="/video/bg_video.mp4" type="video/mp4" />
                </video>
            </div>

            <div className={styles.content}>
                <p className={styles.aboutus_para}>The Art of Strategic Creativity</p>
                <h1>Contact Us</h1>
            </div>

            <div className={styles.contact_us_form}>
                <div className={styles.details_container}>
                    <h3>Your Next Big Idea Starts Here!</h3>
                    <p>We'd love to hear from you! Whether you have questions, need assistance, or just want to chat about how we can bring your ideas to life, our team is here to help.</p>

                    {/* <div className={styles.items_wrapper}>
                        <img src="/icons/location.svg" alt="Address Icon" />
                        <span>2nd Floor, Imperial Trade Centre, MG Road, Bangalore, Karnataka, India 684589</span>
                    </div> */}
                    <div className={styles.items_wrapper}>
                        <img src="/icons/phone.png" alt="Direction Icon" />
                        <span>+91-8356847683</span>
                    </div>

                    <div className={styles.items_wrapper}>
                        <img src="/icons/mail.svg" alt="Direction Icon" />
                        <span>hello@thecreatorscafe.in</span>
                    </div>
                </div>

                <div className={styles.form_container}>
                    {/* Add your form elements here */}

                    <form>
                        <h6>Contact Us</h6>
                        <p>Fill the form below to connect with us</p>

                        <input type='text' placeholder='Name*' />
                        <input type='text' placeholder='Email*' />
                        <input type='text' placeholder='Number*' />
                        <input type='text' placeholder='Subject' />
                        <textarea placeholder='Message' />
                        <button>Submit</button>
                    </form>
                </div>
            </div>

            <FAQs />

            <div className={styles.consult_container}>
                <h3>
                    Innovate
                    <span><img src='/icons/Star.svg' alt='' /></span>
                    Inspire
                    <span><img src='/icons/Star.svg' alt='' /></span>
                    Create
                </h3>


                <div className={styles.undeline_container}>
                    <div className={styles.left_underline}></div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/276bb2fbc4f3857773b1e87b5c7a554527ec17a3a056d879a4ef6f36bf95124f?"
                        class="img"
                    />
                    <div className={styles.right_underline}></div>
                </div>
            </div>



        </section>
    )
}

export default Page
