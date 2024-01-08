import { useState } from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function Navigation() {


  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <ul>
      <h1 className='nav-title'> Emily Knight </h1>
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
      <div className="footer">
        <div className="footer-item"> <a href="https://linkedin.com/in/emily-knight-webdev" className="footer-link">LinkedIn</a> </div>
        <div className="footer-item"> <a href="https://github.com/emilygknight" className="footer-link">GitHub</a> </div>
        <div className="footer-item"> <a href="https://emilyknight819@gmail.com" className="footer-link">Email</a> </div>
    </div>
      <div>{renderPage(currentPage)}</div>
    </div>
  );  
  
}

export default Navigation;
