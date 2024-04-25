import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import Styles from "../Styles/Nav.module.css";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll"; // Importing react-scroll

function Nav() {
  const [mobile, setMobile] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const toggleMobileMenu = () => {
    setMobile(!mobile);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("myprojects");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    homeSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={`${Styles.navbar} ${darkMode ? Styles.dark : Styles.light}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6.5 }}
      >
        <div className={Styles.container}>
          <h1 className={Styles.logo}>Victor Hall</h1>
          <RxHamburgerMenu
            className={Styles.hamburgermenu}
            onClick={toggleMobileMenu}
            size={35}
          />
          <ul
            className={
              mobile ? Styles["nav-links-mobile"] : Styles["nav-links"]
            }
          >
            <li>
              <a onClick={scrollToHome} className={Styles.link}>
                Home
              </a>
            </li>
            <li>
              <a onClick={scrollToAbout} className={Styles.link}>
                About
              </a>
            </li>

            <li>
              <a onClick={scrollToProjects} className={Styles.link}>
                Projects
              </a>
            </li>
            <li>
              <a onClick={scrollToAbout} className={Styles.linkcontact}>
                Contact
              </a>
            </li>
            <button className={Styles.darkmode} onClick={toggleDarkMode}>
              <MdDarkMode size={30} />
            </button>
          </ul>
        </div>
      </motion.nav>
    </>
  );
}

export default Nav;
