import AboutUsBanner from '@/components/aboutus/AboutUsBanner'
import React from 'react'
import styles from '@/styles/AboutUs.module.scss'
import Image from 'next/image'
const page = () => {
  return (
    <div>
      <AboutUsBanner />
      <section className={styles.aboutus_description}>

        <img src="/images/logo.png" alt="" className={styles.logo_image} />
        <h3>Who We Are</h3>
        <p>At Minari Creatives, we partner with businesses of all sizes and visionary individuals to bring your ideas to life. We specialize in transforming your vision into compelling stories, whether through engaging articles, captivating blogs, or dynamic website content. Our evocative designs, from graphic illustrations to animations, ensure your brand stands out. </p>

        <div className={styles.content_wrapper}>
          <div className={styles.image_wrapper}>
            <div className={styles.left_image_wrapper}>
              <img src="/images/aboutus/1.png" alt="" />
              <div className={styles.small_box}></div>
            </div>
            <div className={styles.middle_image_wrapper}>
              <img src="/images/aboutus/2.png" alt="" />
            </div>

            <div className={styles.right_image_wrapper}>
              <div className={styles.small_box}></div>
              <img src="/images/aboutus/3.png" alt="" />
            </div>
          </div>
          <div className={styles.text_wrapper}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
          </div>
        </div>
      </section>

      <section className={styles.about_us_count}>

        <div className={styles.content_wrappper}>
          <h6>About Creaters' Cafe</h6>
          <h3>STEP INTO THE WORLD <br />OF DIGITAL INNOVATIONS</h3>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

          <div className={styles.button_wrapper}>
            <button>
              <span>100+</span>
              <p>Happy Clients</p>
            </button>
            <button>
              <span>150+</span>
              <p>Successful Projects</p>

            </button>
          </div>
        </div>

        <div className={styles.image_wrapper}>
          <div className={styles.image_container}>
            <img src="/images/aboutus/person.png" alt="" />
          </div>
        </div>
      </section>

      <section className={styles.gallery_section}>
        <img src="/images/aboutus/gallery.png" alt="" />
      </section>
    </div>
  )
}

export default page