// import { useState } from 'react';


const aboutMe = {
  name: "Emily Knight",
  description: "Web Developer",
}

function About() {
  console.log("hello");
  return <div>
{aboutMe.name} {aboutMe.description}
  </div>
}

export default About;
