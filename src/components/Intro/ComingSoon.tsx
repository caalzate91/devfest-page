import React, { useEffect, useRef, useState } from 'react'
import RightImage from '../../assets/images/right.png'
import DevFestLogo from '../../assets/images/devfest-logo.svg'
import { motion } from 'framer-motion'
import { useMediaQuery } from '../../helpers/useMediaQuery'

type Props = {}

const ComingSoon = (props: Props) => {
  const blackSectionRef = useRef<HTMLInputElement>(null)
  const whiteSectionRef = useRef<HTMLInputElement>(null)
  const [blackSectionWidth, setblackSectionWidth] = useState(0)
  const [blackSectionHeigth, setblackSectionHeigth] = useState(0)
  const [whiteSectionWidth, setwhiteSectionWidth] = useState(0)
  const isMobileFirst = useMediaQuery('(max-width: 1024px)')

  useEffect(() => {
    if (blackSectionRef.current) {
      setblackSectionWidth(blackSectionRef.current.offsetWidth)
      setblackSectionHeigth(blackSectionRef.current.offsetHeight)
    }
    if (whiteSectionRef.current)
      setwhiteSectionWidth(whiteSectionRef.current.offsetWidth)
  }, [])

  return (
    <section className="w-full h-screen relative overflow-y-hidden">
      {!isMobileFirst && (
        <motion.div
          ref={blackSectionRef}
          animate={{
            x: [blackSectionWidth * -1, 0],
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
      )}

      {isMobileFirst && (
        <motion.div
          animate={{
            y: [blackSectionHeigth * -1, 0],
          }}
          transition={{ duration: 0.8 }}
          className="bg-black text-white h-1/3 flex flex-col justify-center items-center"
        >
          <div className=" w-80">
            <motion.img
              animate={{
                scale: [0.8, 1.1, 1],
              }}
              transition={{
                delay: 0.8,
              }}
              src={DevFestLogo.src}
              alt="Devfest Cali Logo"
              className="w-full"
            />
          </div>
        </motion.div>
      )}

      <motion.div
        ref={whiteSectionRef}
        animate={{
          y: [whiteSectionWidth * 2, 0],
        }}
        transition={{ duration: 0.8 }}
        className="absolute bg-white p-12 bottom-0 right-0 lg:max-w-2xl flex flex-col gap-6 h-2/3 lg:h-auto"
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
          <a
            href="https://forms.gle/6GW8RoWjw1s1LEco9"
            target="_blank"
            className=" text-df-blue font-body hover:underline"
          >
            forms.gle/6GW8RoWjw1s1LEco9
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default ComingSoon
