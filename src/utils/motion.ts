// Stagger animation configuration
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Increased stagger delay for more noticeable sequence
      delayChildren: 0.3,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 20, // Changed from x to y for vertical entry
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      damping: 10,
      stiffness: 100,
    },
  },
};

export { container, cardAnimation };