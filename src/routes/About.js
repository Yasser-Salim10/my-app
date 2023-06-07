import React from 'react'
import HeroImage2 from './../Components/HeroImage2';
import AboutContent from '../Components/AboutContent';

const About = () => {
  return (
    <div>
      <HeroImage2 heading="About."
      text="I'm a friendly Front-End Developer."/>
      <AboutContent/>
    </div>
  )
}

export default About