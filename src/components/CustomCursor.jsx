import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [color, setColor] = useState("white");
  const [cursorSize, setCursorSize] = useState("30px");

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);
  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", colorSchemeChanged);

    const techSection = document.querySelector("#tech-section");
    if (techSection) {
      techSection.addEventListener("mouseenter", enlargeCursor);
      techSection.addEventListener("mouseleave", shrinkCursor);
    }

    const stacklist = document.querySelector("#tech-list");
    if (stacklist) {
      stacklist.addEventListener("mouseenter", enlargeAndColorCursor);
      stacklist.addEventListener("mouseleave", shrinkAndColorCursor);
    }
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", colorSchemeChanged);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const colorSchemeChanged = (e) => {
    setColor(e.matches ? "white" : "black");
  };

  const enlargeCursor = () => {
    setCursorSize("100px");
  };

  const shrinkCursor = () => {
    setCursorSize("60px");
  };

  const enlargeAndColorCursor = () => {
    setCursorSize("40px");
    setColor("red");
  };

  const shrinkAndColorCursor = () => {
    setCursorSize("30px");
    setColor("white");
  };

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      initial={false}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        pointerEvents: "none",
        zIndex: "9999",
        borderRadius: "50%",
        backgroundColor: color,
        width: cursorSize,
        height: cursorSize,
        visibility: hidden ? "hidden" : "visible",
        mixBlendMode: "difference",
      }}
      transition={{ type: "spring", damping: 25, stiffness: 500 }}
    />
  );
}
