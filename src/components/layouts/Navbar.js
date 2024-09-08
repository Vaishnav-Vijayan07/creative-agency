"use client"
import React, { useState } from "react";
import styles from "../../styles/Navbar.module.scss";
import Image from "next/image";
import { Sidebar } from "primereact/sidebar";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";



const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const router = useRouter()

  const pathname = usePathname()

  console.log("pathname", pathname);


  const handleClick = (e) => {
    e.preventDefault()
    router.push('/'); // Navigate to the /about page

  };
  return (
    <nav className={styles.navbar}>
      <img
        src={"/images/logo.png"}
        alt={"logo"}
        onClick={handleClick}
      />
      <ul className={styles.nav_items}>
        <li className={pathname === '/' ? styles.active : ''}>
          <Link key={'home-nav'} href="/">Home</Link>
        </li>
        <li className={pathname.startsWith('/about-us') ? styles.active : ''}>
          <Link key={'about-nav'} href="/about-us">About Us</Link>
        </li>
        <li className={pathname.startsWith('/services') ? styles.active : ''}>
          <Link key={'services-nav'} href="/services">Services</Link>
        </li>
        <li className={pathname.startsWith('/portfolio') ? styles.active : ''}>
          <Link key={'portfolio-nav'} href="/portfolio">Portfolio</Link>
        </li>
        <li className={pathname.startsWith('/blogs') ? styles.active : ''}>
          <Link key={'blog-nav'} href="/blogs">Blog</Link>
        </li>
      </ul>
      <Link key={'blog-nav'} href={"/contact"} className={styles.contact_button}>Contact Us</Link>
      <Image src={"/icons/menu.png"}
        className={styles.menu_button}
        alt={"logo"}
        priority
        width={30}
        height={30}
        objectFit={"contain"} onClick={() => setVisible(true)} />

      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <ul className={styles.nav_items_2}>
          <li className={pathname === '/' ? styles.active : ''}><Link key={'home-nav'}  onClick={() => setVisible(false)} href={"/"} >Home</Link></li>
          <li className={pathname.startsWith('/about-us') ? styles.active : ''}><Link key={'about-nav'} href={"/about-us"} onClick={() => setVisible(false)} >About Us</Link></li>
          <li className={pathname.startsWith('/services') ? styles.active : ''}><Link key={'services-nav'} href={"/services"} onClick={() => setVisible(false)} >Services</Link></li>
          <li className={pathname.startsWith('/portfolio') ? styles.active : ''}><Link key={'portfolio-nav'} href={"/portfolio"} onClick={() => setVisible(false)} >Portfolio</Link></li>
          <li className={pathname.startsWith('/blog') ? styles.active : ''}><Link key={'blog-nav'} href={"/blogs"} onClick={() => setVisible(false)}>Blog</Link></li>
          <li className={pathname.startsWith('/contact') ? styles.active : ''}><Link key={'contact-nav'} href={"/contact"} onClick={() => setVisible(false)}>Contact</Link></li>
        </ul>
      </Sidebar>
    </nav>
  );
};

export default Navbar;
