import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { Django, P2PEnergy } from "../scripts/CaseStudy";
import { Container, FontSize, Grid_Box } from "../style/General";
const CaseTitle = styled.h1`
  font-weight: 300;
  font-size: ${FontSize.big};
  line-height: 100%;
  /* or 45px */
  height: auto;
  letter-spacing: 0.32em;
  margin-bottom: 100px;
`;

const CaseStudies = (props:any) => {
  return (

 
    <Container light={true}>
      <CaseTitle>Case Studies</CaseTitle>
      <Grid_Box>
      <Card data={Django} setTitle={props.setTitle}/>
      <Card data={P2PEnergy} setTitle={props.setTitle}/>
      </Grid_Box>

    </Container>
        
  );
};

export default CaseStudies;
