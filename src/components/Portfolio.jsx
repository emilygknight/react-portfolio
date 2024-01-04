// import { useState } from 'react';

function Portfolio() {
    const portfolios = [
      {
        image: 'path/to/image1.png',
        title: 'Project 1',
        deployedLink: 'https://example.com/project1',
        githubLink: 'https://github.com/emilygknight/project1'
      },
      {
        image: 'path/to/image2.png',
        title: 'Project 2',
        deployedLink: 'https://example.com/project2',
        githubLink: 'https://github.com/emilygknight/project2'
      },
        {
            image: 'path/to/image3.png',
            title: 'Project 3',
            deployedLink: 'https://example.com/project3',
            githubLink: 'https://github.com/emilygknight/react-portfolio'
        },
];
  
    return (
      <div>
        {portfolios.map((portfolio, index) => (
          <div key={index}>
            <img src={portfolio.image} alt={portfolio.title} />
            <h3>{portfolio.title}</h3>
            <p>Deployed Application: <a href={portfolio.deployedLink}>{portfolio.deployedLink}</a></p>
            <p>GitHub Repository: <a href={portfolio.githubLink}>{portfolio.githubLink}</a></p>
          </div>
        ))}
      </div>
    );
  }

export default Portfolio;
