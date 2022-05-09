import React from 'react'
import "./Hero.css";
import Typed from "react-typed"
import "animate.css/animate.min.css";
import {Link} from 'react-scroll'

function Hero() {
  return (
	  
	<section className="hero" id="Hero">
	<div className="content">
	<h2 className="font-link">Mitchell Dennis</h2>
	<Typed
	className="typed-text"
	strings={["Software Developer", "Web Developer","Web Designer", "Hobbyist", "Learner"]}
	typeSpeed={30}
	backSpeed={60}
	loop
	/>
	<Link to="Contact" spy={true} smooth={true} offset={0} duration={500} className="Link">Contact Me</Link>
	</div>
      <div className="waves"></div>
      </section>

  )
}

export default Hero