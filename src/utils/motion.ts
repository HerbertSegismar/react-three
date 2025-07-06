
// Stagger animation configuration
const container = {
  hidden: { opacity: 0.5 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardAnimation = {
  hidden: {
    x: -screen.width,
  },
  visible: {
    x: 0,
    transition: {
      type: "spring" as const,
      damping: 5,
      stiffness: 10,
      duration: 500
    },
  },
};


export { container, cardAnimation };