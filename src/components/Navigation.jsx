// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import About from './About';
// import Portfolio from './Portfolio';
// import Contact from './Contact';
// import Resume from './Resume';

// function Navigation() {
//   const [currentPage, setCurrentPage] = useState('');

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'Portfolio':
//         return <Portfolio />;
//       case 'Contact':
//         return <Contact />;
//       case 'Resume':
//         return <Resume />;
//       case 'About':
//         return <About />;
//     default:
//       return (
//         <>
//         <div className="wrapper">
//           <div className="section-left">
//             <div className="content content-main">
//               <img className='main-img' src="../images/0F1A9020.jpg"></img>
//                     <h1 className="header swipe-up">Emily Knight</h1>
//                 <div className="description">
//                   <p class="description">
//                    I graduated from the University of Texas at Austin Full-Stack Coding Bootcamp and earned a Certification.
//                    I am tramendously passionate about web development and eager to learn more and get my dream career started!</p>
//                 </div>
//             </div>
//           </div>
        
//           <div className="section-right">
//             <ul className='nav'>
//               <li className='nav-item'>
//                 <Link
//                   href='#about'
//                   onClick={() => handlePageChange('About')}
//                   className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//                 >
//                   About
//                 </Link>
//               </li>
//               <li className='nav-item'>
//                 <Link
//                   href='#portfolio'
//                   onClick={() => handlePageChange('Portfolio')}
//                   className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//                 >
//                   Portfolio
//                 </Link>
//               </li>
//               <li className='nav-item'>
//                 <Link
//                   href='#contact'
//                   onClick={() => handlePageChange('Contact')}
//                   className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//                 >
//                   Contact
//                 </Link>
//               </li>
//               <li className='nav-item'>
//                 <Link
//                   href='#resume'
//                   onClick={() => handlePageChange('Resume')}
//                   className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
//                 >
//                   Resume
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         </>
//       );
//   }
// };



//   return (
//     <div className='main-container'>

//            <div className="nav-left">
//            <div className="left-nav-item"> <a href="https://linkedin.com/in/emily-knight-webdev" className="left-nav-link">LinkedIn</a> </div>
//            <div className="left-nav-item"> <a href="https://github.com/emilygknight" className="left-nav-link">GitHub</a> </div>
//            <div className="left-nav-item"> <a href="mailto:emilyknight819@gmail.com" className="left-nav-link">Email</a> </div>
//          </div>

//       <div>{renderPage()}</div>
//     </div>
//   );
// }

// export default Navigation;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Switch from 'react-router-dom'
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';


function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight, // Scroll to the bottom of the page
    behavior: 'smooth', // Smooth scrolling animation
  });
}


function Navigation() {
  return (
    <Router>
      <div className='main-container'>
        <div className="nav-left">
          <div className="left-nav-item">
            <a href="https://linkedin.com/in/emily-knight-webdev" className="left-nav-link">LinkedIn</a>
          </div>
          <div className="left-nav-item">
            <a href="https://github.com/emilygknight" className="left-nav-link">GitHub</a>
          </div>
          <div className="left-nav-item">
            <a href="mailto:emilyknight819@gmail.com" className="left-nav-link">Email</a>
          </div>
        </div>
        <div className="wrapper">
          <div className="section-left">
            <div className="content content-main">
              <img className='main-img' src="../images/0F1A9020.jpg" alt="Emily Knight"></img>
              <h1 className="header swipe-up">Emily Knight</h1>
              <div className="description">
                <p className="description">
                  I graduated from the University of Texas at Austin Full-Stack Coding Bootcamp and earned a Certification.
                  I am tremendously passionate about web development and eager to learn more and get my dream career started!
                </p>
              </div>
            </div>
          </div>
          <div className="section-right">
            <ul className='nav'>
              <li className='nav-item'>
                <Link to='/about' className='nav-link' onClick={scrollToBottom}>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/portfolio' className='nav-link' onClick={scrollToBottom}>
                  Portfolio
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contact' className='nav-link' onClick={scrollToBottom}>
                  Contact
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/resume' className='nav-link' onClick={scrollToBottom}>
                  Resume
                </Link>
              </li>
            </ul>
            <div className='arrow'>
            </div>
          </div>
        </div>
        <Routes>
        <Route path='/' exact element={
            <div className="content content-main">
              <img className='main-img' src="../images/0F1A9020.jpg" alt="Emily Knight"></img>
              <h1 className="header swipe-up">Emily Knight</h1>
              <div className="description">
                <p className="description">
                  I graduated from the University of Texas at Austin Full-Stack Coding Bootcamp and earned a Certification.
                  I am tremendously passionate about web development and eager to learn more and get my dream career started!
                </p>
              </div>
            </div>
          } />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
  
          </Routes>
      </div>
    </Router>
  );
}

export default Navigation;


{/* <Route path='/' exact element={
  <div className="content content-main">
    <img className='main-img' src="../images/0F1A9020.jpg" alt="Emily Knight"></img>
    <h1 className="header swipe-up">Emily Knight</h1>
    <div className="description">
      <p className="description">
        I graduated from the University of Texas at Austin Full-Stack Coding Bootcamp and earned a Certification.
        I am tremendously passionate about web development and eager to learn more and get my dream career started!
      </p>
    </div>
  </div>
} /> */}