// import resumeImage from './assets/images/resume.png';

const myResume = {
    name: "Emily Knight",
    description: "Web Developer",
    image: "../src/assets/images/resumereact.png"
  }
  

function Resume() {
    console.log("hello");
  
    // let [about, setAbout] = useState();
  
    return <div className='resume-page'> Resume
        <p><a href="../src/assets/images/Resume.pdf" download>Download Resume</a></p>
        <img src={myResume.image} alt={myResume.name} />

    </div>
  }
  
  export default Resume;