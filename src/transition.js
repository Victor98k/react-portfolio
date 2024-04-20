import { motion } from "framer-motion";

const transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />

      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 2 }}
        transition={{ duration: 15, ease: [0.66, 2, 0.36, 1] }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Din rubrik här
        </h1>
        <p>Din text här</p>
      </motion.div>

      <motion.div
        className="slide-out"
        initial={{ scaleY: 2 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 15, ease: [0.66, 2, 0.36, 1] }}
      ></motion.div>
    </>
  );
};

export default transition;
