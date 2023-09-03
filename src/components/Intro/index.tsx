import React, { useState } from 'react'
import Intro from './Intro'
import ComingSoon from './ComingSoon'
import { AnimatePresence } from 'framer-motion'
import { useMediaQuery } from '../../helpers/useMediaQuery'

type Props = {}

const CommingSoonComponent = (props: Props) => {
  const [hideIntro, setHideIntro] = useState(false)
  const isMobileFirst = useMediaQuery('(max-width: 1024px)')

  return (
    <AnimatePresence>
      {hideIntro || isMobileFirst ? (
        <ComingSoon />
      ) : (
        <Intro onAnimationComplete={() => setHideIntro(true)} />
      )}
    </AnimatePresence>
  )
}

export default CommingSoonComponent
