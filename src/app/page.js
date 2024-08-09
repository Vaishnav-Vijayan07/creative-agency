"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import dynamic from "next/dynamic";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Router } from "next/router";

const HeroBanner = dynamic(() => import("@/components/home/HeroBanner"), {
  loading: () => <></>,
  ssr: true,
});

const AboutUs = dynamic(() => import("@/components/home/AboutUs"), {
  loading: () => <></>,
  ssr: true,
});

const WeServe = dynamic(() => import("@/components/home/WeServe"), {
  loading: () => <></>,
  ssr: true,
});

const OurSolutions = dynamic(() => import("@/components/home/OurSolutions"), {
  loading: () => <></>,
  ssr: false,
});

const Portfolio = dynamic(() => import("@/components/home/Portfolio"), {
  loading: () => <></>,
  ssr: false,
});

const Testimonials = dynamic(() => import("@/components/home/Testimonials"), {
  loading: () => <></>,
  ssr: false,
});

const RequestConsulation = dynamic(() => import("@/components/home/RequestConsulation"), {
  loading: () => <></>,
  ssr: false,
});

const FAQs = dynamic(() => import("@/components/home/FAQs"), {
  loading: () => <></>,
  ssr: false,
})

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <>
      <main className={styles.container}>
        <HeroBanner />
        <AboutUs />
        <WeServe />
        <OurSolutions />
        <Portfolio />
        <Testimonials />
        <FAQs />
        <RequestConsulation />
      </main>
    </>
  );
}
