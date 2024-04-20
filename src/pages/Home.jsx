import { motion, useTransform, useScroll } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Nav from "../components/Nav";
import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Style
import Styles from "../Styles/Home.module.css";
// Images 4 mockups

import imac from "../img/imac.jpg";
import iphonemock from "../img/2iphone-mock.png";
import pixel from "../img/pixel7a.png";
import macair from "../img/macair.jpg";
import instagrampost from "../img/instagram-post-mockup (1).png";
import macairtotheside from "../img/newtasksidemac.png";
import fourpagetechthreds from "../img/4pagetechthreds.jpg";
import profileimage from "../img/profileimage.JPG";

// Images 4 testimonials
import AgnesTestimonal from "../testimonials/agnesTestimoanl.png";
import JossanTestimonial from "../testimonials/jossanTestimonal.png";

// icons

import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { CiMail } from "react-icons/ci";

import { GoDotFill } from "react-icons/go";

// Parallax

import ParallaxText from "../components/Parallax";
import Starteffect from "../components/Starteffect";

const PROJECTS = [
  { title: "Threds", image: imac },
  { title: "Portfolio", image: pixel },
  { title: "Apps", image: iphonemock },
  { title: "Pixel", image: pixel },
];

function Home() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ ref });
  const opacity = useTransform(scrollYProgress, [0, 3], [0, 3]);

  const [refInView, inView] = useInView({
    triggerOnce: false,
  });
  const variants = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 5.5,
      },
    },
  };

  return (
    <div className={Styles.homebody}>
      <Starteffect />
      <Nav />
      <div className={Styles.herocontainer}>
        <motion.h1
          className={Styles.homehero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 4 }}
          transition={{ delay: 5.5 }}
        >
          Fullstack Web Developer with Designer's Eye <br />
        </motion.h1>
      </div>

      <div ref={refInView} className={Styles.profilecontainer}>
        <motion.h2
          className={Styles.heroh2}
          variants={variants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          Hi, I'm Victor! <br /> <br /> I'm a Fullstack Developer located in
          Stockholm. <br />I specialize in creating efficient, user-centric{" "}
          <br /> and visually appealing applications.
        </motion.h2>
      </div>
      <div className={Styles.ImgParallax}>
        <div className={Styles.techParallax}>
          <ParallaxText className={Styles.parallaxtech} baseVelocity={1}>
            <LazyLoadImage effect="blur" src={macairtotheside} alt="" />
            <LazyLoadImage effect="blur" src={instagrampost} alt="" />
            <LazyLoadImage effect="blur" src={fourpagetechthreds} alt="" />
            <LazyLoadImage effect="blur" src={macair} alt="" />
            <LazyLoadImage effect="blur" src={iphonemock} alt="" />
          </ParallaxText>
        </div>
      </div>
      <div className={Styles.textParallax}>
        <ParallaxText className={Styles.parallaxtext} baseVelocity={-1}>
          MY PROJECTS <GoDotFill />
          MY PROJECTS <GoDotFill />
          MY PROJECTS <GoDotFill />{" "}
        </ParallaxText>
      </div>
      {/* Work  */}
      <div className={Styles.mywork}>
        <div
          className={Styles.stackheader}
          initial={{ opacity: 0 }}
          animate={{ opacity: 4 }}
          transition={{ delay: 4.5 }}
        >
          {" "}
          SOME OF MY WORK
        </div>
      </div>

      {/* Project section */}

      <div className={Styles.container}>
        <div className={Styles.worksite}>
          <img
            className={Styles.projectIMG}
            src={fourpagetechthreds}
            alt="description_of_image"
          />

          <img
            className={Styles.projectwo}
            src={iphonemock}
            alt="description_of_image"
          />
          <h2 className={Styles.imageDescription}>Tech & Threads</h2>
          <p className={Styles.imageDescription}>E-commerce</p>
          <button className={Styles.techthredsbtn}>
            Check out the project
          </button>
        </div>
      </div>

      <div className={Styles.containertwo}>
        <div className={Styles.worksite}>
          <img
            className={Styles.projectIMG}
            src={macairtotheside}
            alt="description_of_image"
          />

          <img
            className={Styles.projectwo}
            src={instagrampost}
            alt="description_of_image"
          />
          <div className={Styles.worksite}>
            <h2 className={Styles.imageDescription}>Progresspilot</h2>
            <p className={Styles.imageDescription}>Habit & Tasks Tracker</p>
            <button className={Styles.techthredsbtn}>
              Check out the project
            </button>
          </div>
        </div>
      </div>

      {/* Stack section  */}

      <div id="tech-section" className={Styles.mytechcontainer}>
        <div className={Styles.mytechheader}>
          <h3 className={Styles.stackheader}>My Tech</h3>
          <div className={Styles.techParallax}>
            <ParallaxText className={Styles.parallaxtech} baseVelocity={-2}>
              <SiJavascript color="orange" size={100} />{" "}
              <FaHtml5 color="orange" size={100} />{" "}
              <FaReact color="coralblue" size={100} />{" "}
              <SiCss3 color="darkblue" size={100} />{" "}
              <FaSass color="pink" size={100} />{" "}
              <SiTailwindcss color="blue" size={100} />{" "}
              <SiMysql color="orange" size={100} />{" "}
              <SiTypescript color="darkblue" size={100} />{" "}
              <SiMongodb size={100} color="green" />
            </ParallaxText>
          </div>
        </div>
      </div>
      <div className={Styles.bentogridcontainer}>
        <h2 className={Styles.largeRectangle}>
          ABOUT ME
          <div className={Styles.aboutMeContent}>
            <div className={Styles.aboutmetext}>
              <p className={Styles.aboutmetext}>Eating and making pasta</p>
              <p className={Styles.aboutmetext}>
                Training crossfit with my friends
              </p>
              <p className={Styles.aboutmetext}>
                Spending time with my partner
              </p>
            </div>
            <img className={Styles.profileimage} src={profileimage} alt="" />
          </div>
        </h2>

        <h2>
          Core value for me
          <p>Emphasizing mental and physical health.</p>
        </h2>

        <h2>
          Connect with me <br />
          <a
            href="https://www.linkedin.com/in/victor-hall-91ba76218/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin color="blue" size={90} />
          </a>{" "}
          <a
            href="https://github.com/Victor98k"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub color="black" size={90} />
          </a>
          <CiMail color="black" size={90} />
        </h2>
      </div>

      <div className={Styles.testimonialscontainer}>
        <h1>People i have worked with </h1>
      </div>

      {/* <ul ref={ref} className={Styles.scrollList}> */}
      <ParallaxText className={Styles.parallaxTestimonals} baseVelocity={1}>
        <LazyLoadImage
          className={Styles.parallaxTestimonals}
          effect="blur"
          src={AgnesTestimonal}
          alt=""
        />
        <LazyLoadImage
          className={Styles.parallaxTestimonals}
          effect="blur"
          src={JossanTestimonial}
          alt=""
        />
      </ParallaxText>
      {/* <li className={Styles.scrollItem}></li>
        <li className={Styles.scrollItem}></li>
        <li className={Styles.scrollItem}></li>
        <li className={Styles.scrollItem}></li>
        <li className={Styles.scrollItem}></li> */}
      {/* </ul> */}
    </div>
  );
}

export default Home;
