import "./HeroImageStyle.css"
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img src={IntroImg} class="intro-img" alt="IntroImg"/>
        </div>
        <div className="content">
            <p>hi, i'm a freelancer.</p>
            <h1>Front End Developer.</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage