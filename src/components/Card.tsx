import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import styled from "styled-components";
import { Card_Style, FontSize } from "../style/General";

const Box = styled.div`
  width: ${Card_Style.Box_Width};
  height: ${Card_Style.Box_Height};
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 20px;
  filter: drop-shadow(10px 10px 4px rgba(255, 255, 255, 0.25));
`;
const ViewMore = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 40px 40px 0;
  font-weight: 400;
  font-size: ${FontSize.small};
  line-height: 100%;
  letter-spacing: 0.15em;
`;
const ImageOuter = styled.img`
  position: relative;
  z-index: 1;
  background: transparent;
`;
const ImageInner = styled.img<any>`
  position: absolute;
  width: ${Card_Style.ImageInner_Width};
  height: ${Card_Style.ImageInner_Height};
  z-index: 0;
  top: ${Card_Style.ImageInner_Top};
  left:${Card_Style.ImageInner_Left} ;
`;

const CardTitle = styled.h1`
  font-weight: 600;
  font-size: ${FontSize.medium};
  line-height: 100%;
  height:60px;
  /* or 30px */
  max-width: 400px;
  letter-spacing: 0.15em;
`;
const ImageDisplay = (props:any) => {
  return (
    <div
      style={{
        paddingTop: "30px",
        overflowX:'hidden'
      }}
    >
      <ImageOuter src="img/Macbook.png" alt="macbook" />
      <ImageInner Font={10} src={props.img} alt='Image' />
    </div>
  );
};
const Card = (props:any) => {
  const data = props.data
  return (
    <Box>
      <h2>{data.date}</h2>
      <CardTitle>{data.title}</CardTitle>
      <ImageDisplay img={data.img}/>
      
      <ViewMore href={data.link}>
        <p>View Project</p>
        <ArrowForwardIcon />
      </ViewMore>
    
    </Box>
  );
};

export default Card;
