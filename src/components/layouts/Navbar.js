import React from "react";
import styles from "../../styles/Navbar.module.scss";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Image
        src={"/images/logo.png"}
        alt={"logo"}
        priority
        width={100}
        height={100}
        objectFit={"contain"}
      />
      <ul className={styles.nav_items}>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Blogs</li>
      </ul>
      <button className={styles.contact_button}>Contact us</button>
      <Image src={"/icons/menu.png"}
        className={styles.menu_button}
        alt={"logo"}
        priority
        width={30}
        height={30}
        objectFit={"contain"} />
    </nav>
  );
};

export default Navbar;
