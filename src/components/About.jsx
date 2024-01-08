// import { useState } from 'react';


const aboutMe = {
  name: "Emily Knight",
  description: "Web Developer",
  image: "../src/assets/images/0F1A9020.jpg"
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
