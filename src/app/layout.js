import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

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
  title: "Creaters cafe",
  description: "creaters cafe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
