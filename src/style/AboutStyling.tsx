import styled from "styled-components";
import { FontSize, width } from "./General";

export const About_Me_Title = styled.h1`
font-weight: 500;
font-size: ${FontSize.big};
line-height: 100%;

/* or 40px */

letter-spacing: 0.22em;
`
export const About_Me_Para = styled.p`
width: ${width<400 ? '200px':'524px'}524px;
font-weight: 300;
font-size: ${FontSize.small};
line-height: 100%;
max-width: 80vw;
`