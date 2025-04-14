import React, { useState } from "react";
import styles from "@/styles/RequestConsultation.module.scss";
import { toast } from "react-toastify";

const RequestConsulation = () => {
  const [formState, setFormState] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/consultation", {
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
        setFormState({ name: "", email: "" });
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
      setLoading(false);
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
    }
  };

  return (
    <section className={styles.consult_container}>
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

      <div className={styles.form_container}>
        <div className={styles.avatar_container}>
          <img src="/gifs/waving.gif" alt="" />
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <h3>Request a Consultation</h3>
          <p>
            Take the first step towards empowering your vision. Fill in the following details and we will get in touch at the
            earliest!
          </p>

          <div className={styles.form_group}>
            <div className={styles.input_group}>
              <label>Your Name</label>
              <input type="text" name="name" value={formState.name} onChange={handleChange} required className="input" />
            </div>
            <div className={styles.input_group}>
              <label>Email Address</label>
              <input type="email" name="email" value={formState.email} onChange={handleChange} required className="input" />
            </div>

            <button type="submit" disabled={loading}>
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RequestConsulation;
