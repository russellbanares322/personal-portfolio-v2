export const bannerTextContainerAnimation = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggeredChildren: 0.12, delayChildren: 0.04 * i },
  }),
};
export const bannerDescription = {
  hidden: { x: -100 },
  visible: { x: 0, transition: { duration: 1 } },
};
export const bannerTextAnimation = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const bannerImageAnimation = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.3, ease: "easeInOut" },
  },
  hidden: { opacity: 0, scale: 0 },
};
export const bannerButtonsAnimation = {
  hidden: {
    y: "200%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

export const bannerButtonsContainerAnimation = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};
