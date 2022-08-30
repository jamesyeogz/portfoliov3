import React, { useState } from "react";
import Header from "../components/Header";
import {NormalTransitionOut} from "../components/NormalTransition";
import StartTransition from "../components/StartTransition";
import { width } from "../style/General";
import AboutMe from "./AboutMe";
import CaseStudies from "./CaseStudies";
import HeroSection from "./HeroSection";
import Internships from "./Internships";

const MainPage = () => {
  console.log(width)
  const [title,setTitle]=useState('')
  return (
    <div>
      <NormalTransitionOut title={title}/>
      <StartTransition />
      <Header />
      <HeroSection />
      <AboutMe />
      <CaseStudies setTitle={setTitle}/>
      <Internships setTitle={setTitle} />
    </div>
  );
};

export default MainPage;
