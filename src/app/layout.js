"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";
import Loading from "./loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import AOS from "aos";

const Navbar = dynamic(() => import("@/components/layouts/Navbar"), {
  loading: () => <></>,
  ssr: false,
});

const Footer = dynamic(() => import("@/components/home/Footer"), {
  loading: () => <></>,
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "The Creators’ Café",
//   description: "The Creators’ Café",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: "ease-in-out", // Easing function for the animation
      once: false, // Allow the animation to repeat every time the element enters the viewport
      mirror: true, // Optionally mirror animations in both directions (when scrolling up or down)
    });
  }, []);
  return (
    <html lang="en">
      <head></head>
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
