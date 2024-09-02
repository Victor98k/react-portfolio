import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Styles from "../Styles/Starteffect.module.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Starteffect = () => {
  const splashRef = useRef(null);
  const headerRef = useRef(null);
  const progressRef = useRef(null);
  const textRef = useRef(null);
  const [isinView, setInView] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 2, ease: "power2.inOut" },
      onComplete: () => setInView(true),
    });
    tl.to(splashRef.current, { autoAlpha: 1 })
      .to(progressRef.current, { width: "100%", duration: 2 })
      .to(splashRef.current, { y: "-100%", duration: 2 });
  }, []);

  return (
    <div ref={splashRef} className={Styles.splash}>
      <h1 ref={headerRef} className={Styles.tranheader}>
        WELCOME
      </h1>
      <h1 ref={textRef} className={Styles.test}>
        Victor Hall
      </h1>
      <AiOutlineLoading3Quarters className={Styles.loadingpageicon} />
      <div ref={progressRef} className={Styles.progress}></div>
    </div>
  );
};

export default Starteffect;
