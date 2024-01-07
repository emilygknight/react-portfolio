// import resumeImage from './assets/images/resume.png';

const myResume = {
    name: "Emily Knight",
    description: "Web Developer",
    image: "../src/assets/images/resume.png"
  }
  

function Resume() {
    console.log("hello");
  
    // let [about, setAbout] = useState();
  
    return <div className='resume-page'> Resume
        <img src={myResume.image} alt={myResume.name} />

    </div>
  }
  
  export default Resume;