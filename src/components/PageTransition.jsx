"use client"

import { motion } from "framer-motion"

const PageTransition = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-[calc(100vh-16rem)]"
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
