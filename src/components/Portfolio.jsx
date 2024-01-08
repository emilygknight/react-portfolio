// import { useState } from 'react';

function Portfolio() {
    const portfolios = [
      {
        image: '../src/assets/images/dnd-builder.png',
        title: 'DND Builder',
        deployedLink: 'https://dnd-builder-8e53886511db.herokuapp.com/',
        githubLink: 'https://github.com/InternetEthan/dnd-builder'
      },
      {
        image: '../src/assets/images/bar-crawler.png',
        title: 'Bar Crawler',
        deployedLink: 'https://github.com/acantu9/team-5-project',
        githubLink: 'https://acantu9.github.io/team-5-project/'
      },
     {
        image: '../src/assets/images/Note-Taker-App.png',
        title: 'Note Taker',
        deployedLink: 'https://aqueous-gorge-13031-d60f9d5e4501.herokuapp.com/',
        githubLink: 'https://github.com/emilygknight/note-taker'
    },
];
  
    return (
      <div className="portfolio-page">
        {portfolios.map((portfolio, index) => (
          <div key={index}>
            <a href={portfolio.deployedLink}>
            <img src={portfolio.image} alt={portfolio.title} />
            </a>
            <h3>{portfolio.title}</h3>
            <p>Deployed Application: <a className="deployed-link" href={portfolio.deployedLink}>{portfolio.deployedLink}</a></p>
            <p>GitHub Repository: <a className="github-link" href={portfolio.githubLink}>{portfolio.githubLink}</a></p>
          </div>
        ))}
      </div>
    );
  }

export default Portfolio;
