import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import InternshipCard from "../components/InternshipCard";
import { NEC, Panasonic } from "../scripts/Internships";
import { Container, FontSize, Grid_Box } from "../style/General";

const InternTitle = styled.h1`
  font-weight: 300;
  font-size: ${FontSize.big};
  line-height: 100%;
  /* or 45px */
    margin-bottom:50px;
  text-align: right;
  letter-spacing: 0.32em;
  margin-right: 40px;
`;

const Internships = (props:any) => {
  return (
    <Container light={false}>
      <div>
        <InternTitle>Internships</InternTitle>
        <Grid_Box>
            <InternshipCard internship={NEC} setTitle={props.setTitle}/>
            <InternshipCard internship={Panasonic}setTitle={props.setTitle}/>
        </Grid_Box>
      </div>
    </Container>
  );
};

export default Internships;
