import React from "react";
import Timeline from "../components/Timeline";
import { Journey } from "../scripts/TImeline";
import { About_Me_Para, About_Me_Title } from "../style/AboutStyling";
import { Container, Grid_Box, Stroke } from "../style/General";

const AboutMe = () => {
  return (
    <Container light={false}>
      <Grid_Box reverse={false}>
        <div>
          <Timeline content={Journey}/>
        </div>
        <div >
          <About_Me_Title>About Me</About_Me_Title>
          <Stroke />
          <About_Me_Para>
            I am a Final-Year Student studying in Electrical and Electronics
            Engineering in Nanyang Technological University in Singapore
          </About_Me_Para>
          <br/>
          <About_Me_Para>
            I am a Self Taught Software/ Web Developer who has ample experience
            in Python, Javascript, HTML, CSS.
          </About_Me_Para>
          <br/>
          <About_Me_Para>
            I am most familiar with ReactJs, Flask, Django
          </About_Me_Para>
        </div>
      </Grid_Box>
    </Container>
  );
};

export default AboutMe;
