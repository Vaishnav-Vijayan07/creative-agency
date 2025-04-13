// app/layout.js
"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";
import Loading from "./loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Head from "next/head";

const Navbar = dynamic(() => import("@/components/layouts/Navbar"), {
  loading: () => <></>,
  ssr: false,
});

const Footer = dynamic(() => import("@/components/home/Footer"), {
  loading: () => <></>,
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="description" content="Welcome to Avyanka Media" />
        <meta property="og:title" content="Home Page - Avyanka Media" />
        <meta property="og:description" content="Join a community of creatives" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <title>Avyanka Media</title>
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <Suspense fallback={<Loading />}>
          <Navbar />
          <main style={{ minHeight: "100vh" }}>{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
