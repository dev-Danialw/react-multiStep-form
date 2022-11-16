import React from "react";
import { motion } from "framer-motion";

const Animator = ({ children }) => {
  return (
    <motion.div
      style={{ position: "absolute" }}
      initial={{ x: 200, scale: 0.8, opacity: 0 }}
      animate={{ x: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ x: -200, scale: 0.8, opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Animator;
