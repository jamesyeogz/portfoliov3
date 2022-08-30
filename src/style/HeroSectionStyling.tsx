import { motion } from "framer-motion";
import styled from "styled-components";
import { FontSize, width } from "./General";

export const Title = styled.h1`
  padding-top:${width<400? '30vh':''};
  width: ${width<400 ? 'auto': '580px'};
  font-weight: 300;
  font-size: ${FontSize.big};
  line-height: 100%;
  /* or 45px */
  letter-spacing: 0.32em;
`;

export const Para = styled.p`
width: ${width<400 ? 'auto': '391px'};
font-weight: 275;
font-size: ${FontSize.medium};
line-height: 100%;
letter-spacing: 0.2em;
`
export const Span_Title = styled.p`
font-weight: 300;
font-size: ${FontSize.small};;
line-height: 100%;
/* or 25px */

letter-spacing: 0.19em;
`
export const MovingTitle = styled(motion.div)`
color:white;
max-width:1000px;
white-space: nowrap;
height:150px;
font-weight: 300;
font-size: 120px;
line-height: 100%;
/* or 120px */
letter-spacing: 0.32em;
`
export const ContainingBox = styled.div`
height:auto;
width:100vw;
overflow-x: hidden;
position:relative;
top:-150px;
`