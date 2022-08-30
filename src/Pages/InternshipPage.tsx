import { ArrowLeftIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { NormalTransitionIn } from "../components/NormalTransition";
import Timeline from "../components/Timeline";
import { NEC, Panasonic } from "../scripts/Internships";
import { Journey } from "../scripts/TImeline";
import { colors, Container, FontSize, width } from "../style/General";
import { Title } from "../style/HeroSectionStyling";

const Internship_Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* font-size: 80px; //This should not be static */
  font-size:${FontSize.big};
`

const Grid_Container = styled.div`
  padding-top: ${width<400 ? '10vh': ''};
  padding: ${width<400 ? '50px': ''};
  padding:-50px;
  display: grid;
  ${width<400 ? 'grid-template-rows: 2fr 0.5fr 2fr;': 'grid-template-columns: 2fr 0.5fr 2fr;'}
  /* grid-template-columns: 2fr 0.5fr 2fr; */
  margin-top: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;
const GridInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
const Line = styled.div`
  width: 50px;
  height: 0;
  border: 1px solid ${colors.grey};
`;
const Font = styled.h2<any>`
  font-size: 30px;
  font-weight: 300;
  /* font-size: ${(props) => (props.small ? "20px" : "30px")}; */
  font-size:${FontSize.small};
  line-height: 100%;
  max-width: 300px;
`;
const VerticalLine = styled.div`
  height: ${width<400 ? '0': '100%'};
  width: ${width<400 ? '100%': '0'}%;;
  border: 1px solid ${colors.white};
`;
const List = styled.div`
  > ul > li {
    /* font-size: 15px; */
    font-size:${FontSize.Internshipsmall};
  }
`;
const InternshipPage = () => {
  const params = useParams();
  const productId = params.id;
  const [internship, setInternship] = useState<any>({});
  useEffect(() => {
    if (productId === "1") {
      setInternship(NEC);
    }
    if (productId === "2") {
      setInternship(Panasonic);
    }
    window.scrollTo(0, 0)
  }, [productId]);

  return (
    <>
      <NormalTransitionIn title={internship.title}>
      <Header/>
        <Container light={true}>
          <Grid_Container>
            <Internship_Title>
              {internship.title }
            </Internship_Title>
            <VerticalLine />
            <div>
              <Grid>
                <GridInner>
                  <div>
                    <Font>Skills</Font>
                    <br />
                    <Line />
                    <br />
                    <Font small={true}>{internship.skills}</Font>
                  </div>
                  <div>
                    <Font>Duration</Font>
                    <br />
                    <Line />
                    <br />
                    <Font small={true}>{internship.date}</Font>
                  </div>
                </GridInner>
                <div>
                  <Font>Description</Font>
                  <br />
                  <Line />
                  <br />
                  <List>
                    <ul>
                      {internship.descriptions
                        ? internship.descriptions.map((description: any) => (
                            <li>{description}</li>
                          ))
                        : ""}
                    </ul>
                  </List>
                </div>
              </Grid>
            </div>
          </Grid_Container>
        </Container>
        <Container>
        Still In Progress
        </Container>
      </NormalTransitionIn>
    </>
  );
};

export default InternshipPage;
