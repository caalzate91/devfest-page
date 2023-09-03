import React, { useEffect, useRef, useState } from 'react'
import RightImage from '../../assets/images/right.png'
import { motion } from 'framer-motion'

type Props = {}

const ComingSoon = (props: Props) => {
  const rightSectionRef = useRef<HTMLInputElement>(null)
  const leftSectionRef = useRef<HTMLInputElement>(null)
  const [rightSectionWidth, setRightSectionWidth] = useState(0)
  const [leftSectionWidth, setLeftSectionWidth] = useState(0)

  useEffect(() => {
    if (rightSectionRef.current)
      setRightSectionWidth(rightSectionRef.current.offsetWidth)
    if (leftSectionRef.current)
      setLeftSectionWidth(leftSectionRef.current.offsetWidth)
  }, [])

  return (
    <section className="w-full h-screen relative overflow-y-hidden">
      <motion.div
        ref={rightSectionRef}
        animate={{
          x: [rightSectionWidth * -1, 0],
        }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <img
          className="h-screen"
          src={RightImage.src}
          alt="DevFest 2023 Cali"
        />
      </motion.div>
      <motion.div
        ref={leftSectionRef}
        animate={{
          y: [leftSectionWidth * 2, 0],
        }}
        transition={{ duration: 0.8 }}
        className="absolute bg-white p-12 bottom-0 right-0 max-w-2xl flex flex-col gap-6"
      >
        <h2 className="font-code text-4xl">02/2023</h2>
        <p className="font-body text-2xl">
          Prepárate para vivir una experiencia única y conectar con la comunidad
          de tecnología de nuestra región.
        </p>

        <div className="flex flex-col space-y-1 mt-4">
          <span className="font-body text-lg">
            Quieres recibir noticias del evento?
          </span>
          <a href="#" className=" text-df-blue font-body hover:underline">
            forms.com/3j87s
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default ComingSoon
