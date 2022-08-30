import React from "react";

import { motion } from "framer-motion";
import styled from "styled-components";
import { colors, FontSize } from "../style/General";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@chakra-ui/icons";

const Box = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.white};
  border-radius: 0 0 50% 50%;
  color: black;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${FontSize.TransitionTitle};
`;
export const NormalTransitionOut = (props: any) => {
  return (
    <Box
      initial={{
        y: -1500,
        scale: 1.5,
      }}
      exit={{
        y: [-1500, 0],
        backgroundColor: [colors.lightgrey, colors.white],
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {props.title}
    </Box>
  );
};
export const NormalTransitionIn = (props: any) => {
  const title = props.title;
  return (
    <div>
    <motion.div animate={{
      display:'none'
    }}transition={{
      delay:2
    }}>
      <Box
        initial={{
          y: 0,
          scale: 1.5,
        }}
        animate={{
          scale: 1,
          overflow: "hidden",
          // background: ["white", "transparent"],
          y: [0,-3000],
        }}
        transition={{
          duration: 3,
          ease: "anticipate",
        }}
      >
        {title}
      </Box>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
          ease: "backIn",
        }}
      >
        {props.children}
      </motion.div>
    
    </div>
  );
};
