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
        <li className={pathname == '/' ? styles.active : ''}><Link key={'home-nav'} href={"/"} >Home</Link></li>
        <li className={pathname == "/about-us" ? styles.active : ''}><Link key={'about-nav'} href={"/about-us"} >About Us</Link></li>
        <li className={pathname == '/services' ? styles.active : ''}><Link key={'services-nav'} href={"/services"} >Services</Link></li>
        <li className={pathname == '/portfolio' ? styles.active : ''}><Link key={'portfolio-nav'} href={"/portfolio"} >Portfolio</Link></li>
        <li className={pathname == '/blogs' ? styles.active : ''}><Link key={'blog-nav'} href={"/blogs"} >Blog</Link></li>
      </ul>
      <Link key={'blog-nav'} href={"/contact"} className={styles.contact_button}>Contact us</Link>
      <Image src={"/icons/menu.png"}
        className={styles.menu_button}
        alt={"logo"}
        priority
        width={30}
        height={30}
        objectFit={"contain"} onClick={() => setVisible(true)} />

      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <ul className={styles.nav_items_2}>
          <li><Link key={'home-nav'} href={"/"} >Home</Link></li>
          <li><Link key={'about-nav'} href={"/about-us"} >About Us</Link></li>
          <li><Link key={'services-nav'} href={"/services"} >Services</Link></li>
          <li><Link key={'portfolio-nav'} href={"/portfolio"} >Portfolio</Link></li>
          <li><Link key={'blog-nav'} href={"/blogs"} >Blog</Link></li>
        </ul>
      </Sidebar>
    </nav>
  );
};

export default Navbar;
