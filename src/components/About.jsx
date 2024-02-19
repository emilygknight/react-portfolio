// import { useState } from 'react';
// import mainImage from '../assets/images/0F1A9020.jpg'

const aboutMe = {
  name: "Emily Knight",
  description: "Web Developer",
  image: './images/0F1A9020.jpg'
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
