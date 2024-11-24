import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = dynamic(() => import("@/components/layouts/Navbar"), {
  loading: () => <></>,
  ssr: false,
});

const Footer = dynamic(() => import("@/components/home/Footer"), {
  loading: () => <></>,
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Creators’ Café",
  description: "The Creators’ Café",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
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
