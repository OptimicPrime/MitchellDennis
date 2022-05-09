import React from 'react'
import './About.css';

import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import cv from "./Mitchell-Dennis-Resume.docx"

function About() {
  return (
    <div className="bg" id="About">
    <h2 className='about-title'>About</h2>
    <div className="about-container">
    <h2 className="skills-title">Bio</h2>
  <p className="info">I have just recently gradated college with a degree in computer science. While pursuing my degree I have also been working as a blockchain developer, building enterprise applications driven by the private Ethereum blockchain. I am driven by finding unique ways to solve problems within a development environment. I like to look at projects and find a way to build them creatively. I primarily have focused on development in React, HTML, CSS, and JavaScript as I enjoy building responsive web applications and websites that pop off the screen with my own sense of style ;)</p>

   <h2 className="skills-title">Skills</h2>
  <div className="skills">
  <a target="_blank" href='https://reactjs.org/' rel="noopener noreferrer"><FaReact className="icon"/></a> <a target="_blank" href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5' rel="noopener noreferrer"><FaHtml5 className="icon"/></a> <a target="_blank" href='https://developer.mozilla.org/en-US/docs/Web/CSS' rel="noopener noreferrer"><FaCss3 className="icon"/></a> <a target="_blank" href='https://nodejs.org/en/' rel="noopener noreferrer"><FaNodeJs className="icon"/></a>
  </div>
  <a className="button" href={cv} download="Mitchell-Dennis.docx">Download Resume</a>
  </div>

</div>



  )
}

export default About