import styles from "../../styles/Home.module.scss";

export default function Home() {
    return (
        <div className={styles.container}>
            <h3 data-aos="fade-up">Industries We Serve
            </h3>

            <div className={styles.capsule_container}>
                <span className={styles.capsule}>
                    Manufacturing
                </span>
                <span className={styles.capsule}>
                    Food and Hospitality
                </span>
                <span className={styles.capsule}>
                    Pharmaceutics and Healthcare
                </span>
                <span className={styles.capsule}>
                    Financial Services
                </span>
                <span className={styles.capsule}>
                    Education
                </span>
                <span className={styles.capsule}>
                    Infrastructure and Real Estate
                </span>
                <span className={styles.capsule}>
                    Technology
                </span>
                <span className={styles.capsule}>
                    FMCG
                </span>
                <span className={styles.capsule}>
                    Travel, Lifestyle and Luxury
                </span>
                <span className={styles.capsule}>
                    Fashion
                </span> <span className={styles.capsule}>
                    Culture and Entertainment
                </span>
            </div>
        </div>
    );
}
