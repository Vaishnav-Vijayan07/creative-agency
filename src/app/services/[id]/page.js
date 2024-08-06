import React from 'react'
import styles from './styles.module.scss'

const page = () => {
  return (
    <main className={`${styles.services_container} services_container`}>
      <div className={styles.video_container}>
        <video autoPlay muted loop playsInline className={styles.video} poster="/images/background.png" id="background-video">
          <source src="/video/bg_video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.content}>
        <p className={styles.aboutus_para}>Our Services</p>
        <h1>Digital Marketing</h1>
      </div>

      <section className={styles.service_description}>
        <h3>Strategically Amplifying Your Reach</h3>
        <p>
          Creative Studio follows a collaborative and iterative approach to creation, with a <br /> focus on understanding and meeting the unique needs of each client.
        </p>

        <div className={styles.bottom_container}>
          <div className={styles.image_container}>

            <img src='/images/services/service.png' alt='' />
          </div>
          <div className={styles.bottom_sub}>

            <h5>Solving the Digital Maze for Success</h5>
            <p>In the digital age, effective marketing is about more than visibility—it's about meaningful engagement and sustainable growth. From content marketing strategies that resonate with your target audience to dynamic social media campaigns and SEO optimization, we elevate your online presence to drive traffic, foster loyalty, and achieve measurable results.  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. </p>
          </div>
        </div>
      </section>

          <section className={styles.we_offer}>
            <h3>What we offer ?</h3>
            <div className={styles.card_container}>

              <div className={styles.card_wrapper}>
                <h3>Content Marketing</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
              </div>

              <div className={styles.card_wrapper}>
                <h3>Content Marketing</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
              </div>

              <div className={styles.card_wrapper}>
                <h3>Content Marketing</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
              </div>

              <div className={styles.card_wrapper}>
                <h3>Content Marketing</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
              </div>

              <div className={styles.card_wrapper}>
                <h3>Content Marketing</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
              </div>

              <div className={styles.card_wrapper}>
                <h3>Content Marketing</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
              </div>

            </div>

          </section>


          <section className={styles.work_flow}>
            <h3>Work Flow</h3>
            <div className={styles.card_container}>

              <div className={styles.card_wrapper}>
                <img src="/images/services/1.png" alt="" />
                <span>Step 1</span>
                <h6>Ideation</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              </div>

              <div className={styles.card_wrapper}>
                <img src="/images/services/2.png" alt="" />
                <span>Step 1</span>
                <h6>Ideation</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              </div>

              <div className={styles.card_wrapper}>
                <img src="/images/services/3.png" alt="" />
                <span>Step 1</span>
                <h6>Ideation</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
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