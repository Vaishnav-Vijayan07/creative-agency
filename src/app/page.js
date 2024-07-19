import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import dynamic from "next/dynamic";

const HeroBanner = dynamic(() => import("@/components/home/HeroBanner"), {
  loading: () => <></>,
  ssr: false,
});

const AboutUs = dynamic(() => import("@/components/home/AboutUs"), {
  loading: () => <></>,
  ssr: false,
});

const WeServe = dynamic(() => import("@/components/home/WeServe"), {
  loading: () => <></>,
  ssr: false,
});

const OurSolutions = dynamic(() => import("@/components/home/OurSolutions"), {
  loading: () => <></>,
  ssr: false,
});

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <HeroBanner />
        <AboutUs />
        <WeServe />
        <OurSolutions />
      </main>
    </>
  );
}
