// import { useState } from 'react';
// import mainImage from '../assets/images/0F1A9020.jpg'

const aboutMe = {
  name: "Emily Knight",
  description: "Dynamic Full-Stack Web Developer with a customer service and management background and University of Texas at Austin Full Stack Developer Bootcamp certification. Passionate about crafting innovative applications for the future. Expert problem-solver with strong organizational and teamwork skills, adept at driving projects from concept to completion. Proven track record of delivering high-quality projects on time, with a focus on staying updated on emerging technologies and trends.",
  image: '../images/0F1A9020.jpg'
}

function About() {
  console.log("hello");
  return <div className="aboutme-page">

    <img src={aboutMe.image} alt={aboutMe.name} />
    <h2>{aboutMe.name}</h2>
    <p>{aboutMe.description}</p>
  </div>
}

export default About;
