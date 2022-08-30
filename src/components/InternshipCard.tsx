import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Card_Style, FontSize } from "../style/General";
const Box = styled.div`
  width: ${Card_Style.Box_Width};
  height: ${Card_Style.Box_Height};
  background-color: black;
  color: white;
  padding: 40px;
  border-radius: 20px;
  filter: drop-shadow(10px 10px 4px rgba(255, 255, 255, 0.25));
`;
const CardDate = styled.h1`
  font-weight: 700;
  font-size: ${FontSize.medium};
  line-height: 100%;
  /* or 25px */

  letter-spacing: 0.32em;
`;
const ViewMore = styled.button`
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
const CardContent=  styled.ul`
font-weight: 500;
font-size:  ${FontSize.medium};
line-height: 100%;
margin:20px 0 20px 0;
/* or 30px */

letter-spacing: 0.2em;
`
const CardPoints = styled.li`
font-weight: 300;
font-size:  ${FontSize.small};
line-height: 100%;
margin:40px;
/* or 20px */

letter-spacing: 0.32em;
`
const CardTitle = styled.h1`
  font-weight: 700;
  font-size: ${FontSize.big};
  line-height: 100%;
  /* or 45px */
  letter-spacing: 0.32em;
  margin:30px 0 30px 0;
`;
const InternshipCard = (props:any) => {
  const internship  = props.internship
  return (
    <Box>
      <CardDate>{internship.date} </CardDate>
      <CardTitle>{internship.title} Intern</CardTitle>
      <CardContent><h1 style={{margin:'20px 0 20px 0'}}>{internship.project}</h1>
      {internship.brief ? (internship.brief.map((data:any) => <CardPoints>{data}</CardPoints>)):("")}
        </CardContent>
        <Link to={internship.link} onClick={()=>{
          props.setTitle(internship.title)
        }}>
        <ViewMore>
        <p>View Project</p>
        <ArrowForwardIcon />
      </ViewMore>
        </Link>
    </Box>
  );
};

export default InternshipCard;
