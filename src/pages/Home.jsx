import { motion, useTransform, useScroll } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// MUI TIMELINE
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

// MUI ICONS
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ComputerIcon from "@mui/icons-material/Computer";
import CodeIcon from "@mui/icons-material/Code";

import Nav from "../components/Nav";
import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Style
import Styles from "../Styles/Home.module.css";

// Images 4 mockups
import iphonemock from "../img/2iphone-mock.png";
import instagrampost from "../img/instagram-post-mockup (1).png";
import macairtotheside from "../img/newtasksidemac.png";
import fourpagetechthreds from "../img/4pagetechthreds.jpg";
import profileimage from "../img/profileimage.JPG";
import macairfigma from "../img/macairmockfigma.png";
import macprofigma from "../img/macbookprofigma.png";
import googlepixelmockup from "../img/googlepixelmocup.png";
import pagetechnthreds from "../img/4pagetechnthreds.png";

// Images 4 testimonials
import AgnesTestimonal from "../testimonials/agnesTestimonial.png";
import ChristianTestimonial from "../testimonials/christianTestimonial.png";
import JohannaTestimonial from "../testimonials/johannatestimonial.png";

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
import { SiExpress } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

// Parallax

import ParallaxText from "../components/Parallax";
import Starteffect from "../components/Starteffect";

// const PROJECTS = [
//   { title: "Threds", image: imac },
//   { title: "Portfolio", image: pixel },
//   { title: "Apps", image: iphonemock },
//   { title: "Pixel", image: pixel },
// ];

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
        duration: 3,
      },
    },
  };

  return (
    <div id="home" className={Styles.homebody}>
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
      <div id="myprojects" className={Styles.ImgParallax}>
        <div className={Styles.techParallax}>
          <ParallaxText className={Styles.parallaxtech} baseVelocity={1}>
            <LazyLoadImage effect="blur" src={macairfigma} alt="" />

            <LazyLoadImage effect="blur" src={macprofigma} alt="" />
            <LazyLoadImage effect="blur" src={googlepixelmockup} alt="" />
            <LazyLoadImage effect="blur" src={pagetechnthreds} alt="" />
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
        <div className={Styles.stackContainer}>
          <h2 className={Styles.stackheader}>SOME OF MY WORK</h2>
          <h2 className={Styles.stackHeaderMobile}>SOME OF MY WORK</h2>
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
          <p className={Styles.imageDescription}>
            A examination task for my frontend 1 course.
          </p>
          <a href="https://tech-n-threds.vercel.app/" target="_blank">
            <button className={Styles.techthredsbtn}>
              Check out the project
            </button>
          </a>
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
            <p className={Styles.imageDescription}>
              Group project during our Frontend 2 course. Did this together with
              my classmates Nora and Daniel.
            </p>
            <p className={Styles.imageDescription}>
              A big part for me on this project was to focus on the design and
              moving the project forward during a short deadline.
            </p>
            <a
              href="https://habits-and-task-application.vercel.app/"
              target="_blank"
            >
              <button className={Styles.techthredsbtn}>
                Check out the project
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Stack section  */}

      <div id="tech-section" className={Styles.mytechcontainer}>
        <div className={Styles.mytechheader}>
          <h3 className={Styles.stackheader}>My Tech</h3>
          <h3 className={Styles.techheadermobile}>My stack</h3>
          <div className={Styles.techParallax}>
            <ParallaxText className={Styles.parallaxtech} baseVelocity={-2}>
              <SiJavascript color="orange" size={100} />{" "}
              <FaHtml5 color="orange" size={100} />{" "}
              <FaReact color="lightblue" size={100} />{" "}
              <SiCss3 color="darkblue" size={100} />{" "}
              <FaSass color="pink" size={100} />{" "}
              <SiTailwindcss color="blue" size={100} />{" "}
              <SiMysql color="orange" size={100} />{" "}
              <SiTypescript color="darkblue" size={100} />{" "}
              <SiMongodb size={100} color="green" />
              <SiExpress size={100} />
            </ParallaxText>
          </div>
        </div>
      </div>
      <div id="about" className={Styles.bentogridcontainer}>
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
          <p>Emphasizing mental and physical health is key.</p>
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
          <a
            href="mailto:Victor.Hall@yh.nackademin.se"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiMail color="white" size={90} />
          </a>
        </h2>
      </div>
      <div>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Current
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />

              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Fullstack Web Developer program @Nackademin <ComputerIcon />{" "}
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              January 2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Frontend Developer @Blowtorch <CodeIcon />{" "}
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              August 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Fullstack Web Developer program @Nackademin <ComputerIcon />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Mars 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Club Manager SATS Hamnen <FitnessCenterIcon />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              November 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Club Manager SATS Hamnen & SATS Saltsjöbaden <FitnessCenterIcon />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              January 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Club Manager SATS Hamnen <FitnessCenterIcon />
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>

      <div className={Styles.testimonialscontainer}>
        <h1>
          People I've <br /> worked with{" "}
        </h1>
      </div>

      {/* <ul ref={ref} className={Styles.scrollList}> */}
      <div className={Styles.testimonialsWrapper}>
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
            src={ChristianTestimonial}
            alt=""
          />
          <LazyLoadImage
            className={Styles.parallaxTestimonals}
            effect="blur"
            src={JohannaTestimonial}
            alt=""
          />
        </ParallaxText>
      </div>
    </div>
  );
}

export default Home;
