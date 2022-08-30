import React from "react";
import { Container } from "../style/General";
import {
  ContainingBox,
  MovingTitle,
  Para,
  Span_Title,
  Title,
} from "../style/HeroSectionStyling";

const HeroSection = () => {
  return (
    <div>
      <Container light={true}>
        <Title>Junior Software Developer</Title>
        <Para>Recreating Ideas into Products...</Para>
        <br />
        <br />
        <br />
        <Span_Title>Explore More Below</Span_Title>
      </Container>
      <ContainingBox>
      <MovingTitle animate={{
        x:[-2000,2000],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatDelay: 1,
        ease:'linear'
      }}
      >JAMES YEO GUI ZHONG</MovingTitle>
      
      </ContainingBox>
    </div>
  );
};

export default HeroSection;
