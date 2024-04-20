import React, { useState, useEffect, useRef } from "react"; // Import useState
import { gsap } from "gsap";
import { motion, useTransform, useScroll } from "framer-motion";
import Styles from "../Styles/Starteffect.module.css";
import { useInView } from "react-intersection-observer";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Starteffect = () => {
  const splashRef = useRef(null);
  const [isinView, setInView] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 2, ease: "power2.inOut" },
      onComplete: () => setInView(true),
    });
    tl.to(splashRef.current, { autoAlpha: 1 }).to(splashRef.current, {
      y: "-100%",

      duration: 2,
    });
  }, []);

  // const [refInView, inView] = useInView({
  //   triggerOnce: false,
  // });
  // const variants = {
  //   hidden: { opacity: 0, x: -100 },
  //   show: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       duration: 2,
  //     },
  //   },
  // };

  return (
    <div ref={splashRef} className={Styles.splash}>
      <motion.h1
        className={Styles.tranheader}
        initial={{ opacity: 0 }}
        animate={{ opacity: 4 }}
        transition={{ delay: 0.5 }}
      >
        WELCOME
        <p className={Styles.test}>To</p>
        <p className={Styles.test}>My</p>
        <p className={Styles.test}>Portfolio</p>
        <AiOutlineLoading3Quarters className={Styles.loadingpageicon} />
      </motion.h1>

      {/* 
      <div ref={refInView}>
        <motion.h2
          className={Styles.heroh2}
          variants={variants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          Welcome <br /> to <br /> my <br /> portfolio
        </motion.h2>
      </div> */}
    </div>
  );
};

export default Starteffect;
