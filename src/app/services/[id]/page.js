"use client"
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { useParams } from 'next/navigation'
import { data, lorem } from '@/data/services'
import AOS from 'aos'
import "aos/dist/aos.css";

const page = () => {
  const { id } = useParams()
  const [filteredData, setFilteredData] = useState({})

  const filterData = () => {
    const [filtered] = data?.filter((item) => item.id == id);
    setFilteredData(filtered);
    // Ensure AOS is re-initialized after setting data
    setTimeout(() => {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
      });
      AOS.refresh();
    }, 100); // Adjust the delay as needed
  };

  useEffect(() => {
    filterData()
  }, [])


  return (
    <main className={`${styles.services_container} services_container`}>
      <div className={styles.video_container}>
        <video autoPlay muted loop playsInline className={styles.video} poster="/images/background.png" id="background-video">
          <source src="/video/bg_video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.content}>
        <p className={styles.aboutus_para}>Our Services</p>
        <h1>{filteredData?.heading}</h1>
      </div>

      <section className={styles.service_description}>

        <div className={styles.bottom_container}>
          <div className={styles.image_container}>

            {/* <img src='/images/services/service.png' alt='' /> */}
            <img src={filteredData?.image} alt='' data-aos="fade-right" />
          </div>
          <div className={styles.bottom_sub} data-aos="fade-left">

            <h5>{filteredData?.subheading}</h5>
            <p>{filteredData?.content_desc}</p>

            <h4>{filteredData?.content_sub_head}</h4>
            <ul>
              {filteredData?.content_array?.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.we_offer}>
        <h3 data-aos="fade-up">What we offer ?</h3>
        <div className={styles.card_container}>
          {
            filteredData?.card_contents?.map((item) => (
              <div className={styles.card_wrapper} data-aos="flip-left">
                <h3>{item?.name}</h3>
                <p>{item?.description}</p>
              </div>
            ))
          }

          {/* <div className={styles.card_wrapper} data-aos="flip-left">
            <h3>Email Marketing</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          </div>

          <div className={styles.card_wrapper} data-aos="flip-left">
            <h3>Social Media Marketing</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          </div>

          <div className={styles.card_wrapper} data-aos="flip-left">
            <h3>SEO</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          </div>

          <div className={styles.card_wrapper} data-aos="flip-left">
            <h3>Influencer Marketing</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          </div>

          <div className={styles.card_wrapper} data-aos="flip-left">
            <h3>Content Marketing</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          </div> */}

        </div>

      </section>


      <section className={styles.work_flow}>
        <h3 data-aos="fade-up">Our Workflow in 3 Steps</h3>
        <p data-aos="fade-up">At The Creators’ Café, we believe in a streamlined approach to deliver exceptional results. <br /> Our workflow is designed to ensure clarity, efficiency, and collaboration throughout every project.</p>
        <div className={styles.card_container}>

          <div className={styles.card_wrapper}>
            <img src="/images/services/1.png" alt="" data-aos="flip-left" />
            <span>Step 1</span>
            <h6>Discovery and Planning </h6>
            <p>First, we dive deep into understanding your goals, challenges, and vision. This phase involves comprehensive research, client consultations, and identifying key objectives. We collaborate closely with you to outline project milestones, establish timelines, and define deliverables.</p>
          </div>

          <div className={styles.card_wrapper}>
            <img src="/images/services/2.png" alt="" data-aos="flip-left" />
            <span>Step 2</span>
            <h6>Execution and Creativity </h6>
            <p>With a solid plan in place, we move into the execution phase. Whether it’s crafting compelling content, designing captivating visuals, or developing strategic campaigns, we work diligently to meet and exceed expectations.</p>
          </div>

          <div className={styles.card_wrapper}>
            <img src="/images/services/3.png" alt="" data-aos="flip-left" />
            <span>Step 3</span>
            <h6>Review and Refinement </h6>
            <p>We prioritize feedback and iteration to ensure we’re on track to achieve the desired outcomes. During this phase, we conduct thorough reviews, gather insights, and refine our work based on your input. Our goal is to deliver polished, high-quality results that resonate with your audience and align with your brand’s objectives.</p>
          </div>

        </div>

        <div className={styles.form_container}>
          <div className={styles.avatar_container}>
            <img src="/gifs/waving.gif" alt="" />
          </div>

          <form className={styles.form}>
            <h3>Request a consultation</h3>
            <p>Fill in the following details to have discussion with us about your idea. We will get in touch.</p>

            <div className={styles.form_group}>
              <div className={styles.input_group}>
                <label>Your Name</label>
                <input type='text' />
              </div>
              <div className={styles.input_group}>
                <label>Email Address</label>
                <input type='text' />
              </div>

              <button>Submit Request</button>
            </div>
          </form>
        </div>

      </section>
    </main>
  )
}

export default page