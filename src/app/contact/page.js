"use client";
import React, { useState } from "react";
import styles from "@/styles/contact.module.scss";
import FAQs from "@/components/home/FAQs";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";

const Page = () => {
  const [formState, setFormState] = useState({ name: "", email: "", number: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setLoading(false);
        toast.success("Message sent successfully!", {
          position: "bottom-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setFormState({ name: "", email: "", number: "", subject: "", message: "" });
      } else {
        setLoading(false);
        toast.error("Failed to send message.", {
          position: "bottom-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
    }
  };

  return (
    <section className={styles.contact_container}>
      <div className={styles.video_container}>
        <video autoPlay muted loop playsInline poster="/images/background.png" className={styles.video} id="background-video">
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
          <p>
            We'd love to hear from you! Whether you have questions, need assistance, or just want to chat about how we can bring
            your ideas to life, our team is here to help.
          </p>

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

          <form onSubmit={handleSubmit}>
            <h6>Contact Us</h6>
            <p>Fill the form below to connect with us</p>

            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Name*"
              required
              className="input"
            />
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="input"
            />
            <input
              type="number"
              name="number"
              value={formState.number}
              onChange={handleChange}
              placeholder="Number*"
              required
              className="input"
            />
            <input
              type="text"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              placeholder="Subject*"
              required
              className="input"
            />
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="textarea"
            />
            <button type="submit" disabled={loading}>
              Submit
            </button>
          </form>
        </div>
      </div>

      <FAQs />

      <div className={styles.consult_container}>
        <h3>
          Innovate
          <span>
            <img src="/icons/Star.svg" alt="" />
          </span>
          Inspire
          <span>
            <img src="/icons/Star.svg" alt="" />
          </span>
          Create
        </h3>

        <div className={styles.undeline_container}>
          <div className={styles.left_underline}></div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/276bb2fbc4f3857773b1e87b5c7a554527ec17a3a056d879a4ef6f36bf95124f?"
            className="img"
          />
          <div className={styles.right_underline}></div>
        </div>
      </div>
    </section>
  );
};

export default Page;
