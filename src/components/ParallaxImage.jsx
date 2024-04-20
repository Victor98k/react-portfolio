import Styles from "../Styles/ParallaxImage.module.css";
import pixel from "../img/pixel7a.png";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxImage({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 100], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-145, 110, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={Styles.parallax}>
      <motion.div
        className={Styles.Scroller}
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
      >
        {children.map((image, index) => (
          <img key={index} src={image} alt={`Parallax content ${index}`} />
        ))}
      </motion.div>
    </div>
  );
}

export default ParallaxImage;
