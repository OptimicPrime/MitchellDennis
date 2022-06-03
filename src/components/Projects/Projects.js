import React from 'react'
import Hall from './Photos/Hall.jpg'
import Music from './Photos/Music.jpg'
import Camarico from './Photos/Camarico.jpg'
import Blog from './Photos/blog.jpg'
import './Projects.css'

function Projects() {
  return (
    <div className="bg2" id="Projects">
    <h2 className="title">Projects</h2>
    <div className="wrapper">
    <Card 
      img={Hall}
      title="ND Hall of Fame"
      header="Website"
      description="Website designed and built for the North Dakota Sports Hall of Fame. Recognizing high calibreathletes from ND."
      link='https://ndsportshalloffame.com/'
    />
    <Card 
      img={Music}
      header="Web Application"
      title="Music Search"
      description="An application built with react that captures your current mood and displays songs, artists and playlists on spotify."
      link='https://www.youtube.com/watch?v=UaN0INMBtwk&ab_channel=MitchDennis'
    />
    <Card 
      img={Camarico}
      header="Website"
      title="Camarico"
      description="Website designed and built in React for Camarico Investments. To showcase thier buisness and team members."
      link='https://www.camarico.ca/'
    />
    <Card 
      img={Blog}
      header="Website"
      title="Blog"
      description="My personal blog designed and build with Next.JS, GraphQl, GraphCMS, and TailwindCSS. Made to promote learning."
      link='https://electric-factory.vercel.app/post/first-post'
    />
    </div>
    </div>
    
  )
}

function Card(props){
  return(
    <div className="card">
    <figure>
    <img src={props.img} className="card__img" />
    </figure>
    <article>
    <span className="card__header">{props.header}
    </span>
      <h2 className="card__title">{props.title}</h2>
      <p className="card__description">{props.description}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer" className="card__btn">View</a>
    </article>
  </div>
  )
}

export default Projects