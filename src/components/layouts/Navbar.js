import React from "react";
import styles from "../../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Image
        src={"/images/logo.svg"}
        objectFit={"contain"}
        alt={"logo"}
        priority
        width={100}
        height={80}
      />
      <ul className={styles.nav_items}>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Blogs</li>
      </ul>
      <button className={styles.contact_button}>Contact us</button>
    </nav>
  );
};

export default Navbar;
