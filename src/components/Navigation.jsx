import { useState } from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

function Navigation() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <ul className='nav nav-tabs'>
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
      </ul>
      <div>{renderPage(currentPage)}</div>
    </div>
  );  
  
}

export default Navigation;
