import { motion } from "motion/react";
import type React from "react";

const SectionWrapper = ({ Component, idName }: { Component: React.FC, idName: string}) => function HOC() {
  return (
    <motion.section
      animate={{ opacity: [0, 1], x: [-100, 0], transition: { duration: 2, ease: "easeInOut", staggerChildren: 0.5, delayChildren: 0.5 } }}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      <Component />
    </motion.section>
)
};

export default SectionWrapper;
