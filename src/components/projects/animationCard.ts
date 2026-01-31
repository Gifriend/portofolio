const projectCardAnimation = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

const projectCardImageAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

const projectCardTitleAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

const projectCardDescriptionAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

const projectCardTechAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.4,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

const projectCardLinksAnimation = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.4,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

export {
  projectCardAnimation,
  projectCardImageAnimation,
  projectCardTitleAnimation,
  projectCardDescriptionAnimation,
  projectCardTechAnimation,
  projectCardLinksAnimation,
}
