import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';

type AnimationSlideOnShowProps = {
  isFromRight: boolean
  children: React.ReactNode
}

export default function AnimationSlideOnShow({ isFromRight, children }: AnimationSlideOnShowProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const mainControls = useAnimation()
  const xTransform = isFromRight ? "3vw" : "-3vw"

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate")
    } else {
      mainControls.start("initial")
    }
  }, [isInView])

  return (
    <>
      <span ref={ref} style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
        <motion.div
          variants={{
            initial: { opacity: 0, x: xTransform },
            animate: { opacity: 1, x: 0 },
          }}

          initial="initial"
          animate={mainControls}
          transition={{ 
            duration: 0.3, 
            opacity: { duration: 0.3 },
          }}
        >
          {children}
        </motion.div>
      </span>
    </>
  )
}