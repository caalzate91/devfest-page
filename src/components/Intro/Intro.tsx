import React, { useState } from 'react'
import LogoGDG from '../../assets/images/gdg-logo.png'
import { motion } from 'framer-motion'

type Props = {
  onAnimationComplete: () => void
}

const whiteSquareVariants = {
  open: {
    y: [0, 50, -10, 0],
    opacity: 1,
  },
  closed: {
    x: [0, 0, 0, 500],
    opacity: 0,
    transition: {
      delay: 0.8,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const blackSquareVariants = {
  open: {
    x: [0, -40, 20, 0],
    opacity: 1,
  },
  closed: {
    x: [0, 0, 0, -500],
    opacity: 0,
    transition: {
      delay: 1,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const Intro = ({ onAnimationComplete }: Props) => {
  const [close, setClose] = useState(false)

  return (
    <section className="px-4 lg:px-0 lg:w-1/3">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="h-36 lg:h-44 w-full bg-white flex flex-col justify-center items-center gap-4 relative"
      >
        <img src={LogoGDG.src} alt="GDG Cali" className="w-64 md:w-80" />

        <motion.span
          animate={close ? 'closed' : 'open'}
          variants={whiteSquareVariants}
          className={`absolute -top-9 w-9 h-9 bg-white -left-9`}
        ></motion.span>

        <motion.span
          animate={close ? 'closed' : 'open'}
          variants={blackSquareVariants}
          onAnimationComplete={(variantName) => {
            if (variantName === 'open') setClose(true)
            if (variantName === 'closed') onAnimationComplete()
          }}
          className="absolute -bottom-16 w-16 h-16 bg-black -right-16 -z-10"
        ></motion.span>
      </motion.div>
    </section>
  )
}

export default Intro
