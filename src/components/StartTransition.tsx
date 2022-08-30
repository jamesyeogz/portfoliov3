import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FontSize } from '../style/General'
const Box = styled(motion.div)`
    width:100vw;
    height:100vh;
    background-color:white;
    border-radius:   0 0 50% 50% ;
    color: black;
    position:fixed;
    z-index: 100;
    display:flex;
    justify-content: center;
    align-items:center;

`
const StartTransition = (props:any) => {
  return (
        <Box initial={{
            scale:1.5
        }} animate={{
            y: [0,-3000],
            scale:1,
            overflow: 'hidden'
        }} transition={{
            duration:3,
            delay: 0.5,
            ease:'anticipate'
        }} >
            <motion.p animate={{
              opacity:[0,1]
            }}
            transition={{
                duration: 0.5,
                ease: 'backInOut'
            }}
            style={{
                fontSize: FontSize.TransitionTitle
            }}>
                Hello!~
            </motion.p>

        </Box>
  )
}

export default StartTransition