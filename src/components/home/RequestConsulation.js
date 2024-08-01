import React from 'react'
import styles from '@/styles/RequestConsultation.module.scss'

const RequestConsulation = () => {
    return (
        <section className={styles.consult_container}>
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
    )
}

export default RequestConsulation