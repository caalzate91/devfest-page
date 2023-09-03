import React, { useState } from 'react'
import Intro from './Intro'
import ComingSoon from './ComingSoon'
import { AnimatePresence } from 'framer-motion'

type Props = {}

const CommingSoonComponent = (props: Props) => {
  const [hideIntro, setHideIntro] = useState(false)

  return (
    <AnimatePresence>
      {hideIntro ? (
        <ComingSoon />
      ) : (
        <Intro onAnimationComplete={() => setHideIntro(true)} />
      )}
    </AnimatePresence>
  )
}

export default CommingSoonComponent
