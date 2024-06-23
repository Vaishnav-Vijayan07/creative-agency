import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import HeroBanner from "@/components/home/HeroBanner";

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <HeroBanner />
      </main>
    </>
  );
}
