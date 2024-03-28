// import resumeImage from './assets/images/resume.png';

const myResume = {
    name: "Emily Knight",
    description: "Web Developer",
    // image: "./images/resume1.jpeg"
  }
  

function Resume() {
    console.log("hello");
  
    // let [about, setAbout] = useState();
  
    return <div className='resume-page'>         
              <h2>Resume</h2>
              <p><a href="./pdf/EmilyKnightResume.pdf" download>Download Resume</a></p>
              {/* <img src={myResume.image} alt={myResume.name} /> */}
              <div className="resume-image">
              <img src="./images/resume1.jpeg" alt={myResume.name} />
              <img src="./images/resume2.jpeg" alt={myResume.name} />
              <img src="./images/resume3.jpeg" alt={myResume.name} />
              <img src="./images/resume4.jpeg" alt={myResume.name} />
              <img src="./images/resume5.jpeg" alt={myResume.name} />
              </div>
          </div>
  }
  
  export default Resume;