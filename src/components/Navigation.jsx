import { useState } from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function Navigation() {
  const [currentPage, setCurrentPage] = useState('');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      case 'About':
        return <About />;
    default:
      return (
        <>
        <div className="wrapper">
          <div className="section-left">
            <div className="content content-main">
                    <h1 className="header swipe-up">Emily Knight</h1>
                <div className="description">
                  <p class="description">Product Designer / Webflow Developer / Framer Developer and Partner.
                   I am currently a UT Full-Stack Coding Bootcamp student.
                   I am tramendously eager to learn and get my career started!
                   I'm super grateful to be a part of the program and I can't wait to get better!</p>
                </div>
            </div>
          </div>
        
          <div className="section-right">
            <ul className='nav'>
              <li className='nav-item'>
                <a
                  href='#about'
                  onClick={() => handlePageChange('About')}
                  className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a
                  href='#portfolio'
                  onClick={() => handlePageChange('Portfolio')}
                  className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                  Portfolio
                </a>
              </li>
              <li className='nav-item'>
                <a
                  href='#contact'
                  onClick={() => handlePageChange('Contact')}
                  className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                  Contact
                </a>
              </li>
              <li className='nav-item'>
                <a
                  href='#resume'
                  onClick={() => handlePageChange('Resume')}
                  className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
        </>
      );
  }
};



  return (
    <div className='main-container'>

           <div className="nav-left">
           <div className="left-nav-item"> <a href="https://linkedin.com/in/emily-knight-webdev" className="left-nav-link">LinkedIn</a> </div>
           <div className="left-nav-item"> <a href="https://github.com/emilygknight" className="left-nav-link">GitHub</a> </div>
           <div className="left-nav-item"> <a href="mailto:emilyknight819@gmail.com" className="left-nav-link">Email</a> </div>
         </div>

      <div>{renderPage()}</div>
    </div>
  );
}

export default Navigation;
