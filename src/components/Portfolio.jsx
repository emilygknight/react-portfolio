// import { useState } from 'react';

function Portfolio() {
    const portfolios = [
    {
        image: '../images/dnd-builder.png',
        title: 'DND Builder',
        deployedLink: 'https://dnd-builder-8e53886511db.herokuapp.com/',
        githubLink: 'https://github.com/InternetEthan/dnd-builder'
  },
    {
        image: '../images/bar-crawler.png',
        title: 'Bar Crawler',
        deployedLink: 'https://github.com/acantu9/team-5-project',
        githubLink: 'https://acantu9.github.io/team-5-project/'
  },
    {
      image: '../images/quotemepic.png',
      title: 'QuoteMe',
      deployedLink: 'https://quoteme-1b7p.onrender.com/',
      githubLink: 'https://github.com/charleshuurman/QuoteMe'
  },
    {
    image: '../images/workdayscheduler.png',
    title: 'Work Day Scheduler',
    deployedLink: 'https://emilygknight.github.io/crispy-octo-meme/',
    githubLink: 'https://github.com/emilygknight/crispy-octo-meme'
  },
    {
    image: '../images/Note-Taker-App.png',
    title: 'Note Taker',
    deployedLink: 'https://aqueous-gorge-13031-d60f9d5e4501.herokuapp.com/',
    githubLink: 'https://github.com/emilygknight/note-taker'
  },
];
  
    return (
      <div className="portfolio-page">
        <h2>Portfolio/Projects</h2>
        {portfolios.map((portfolio, index) => (
          <div key={index} className="project">
            <a href={portfolio.deployedLink}>
            <img src={portfolio.image} alt={portfolio.title} />
            </a>
            <h3>{portfolio.title}</h3>
            <a className="deployed-link" href={portfolio.deployedLink}>Delpoyed Application</a>
            <a className="github-link" href={portfolio.githubLink}>Github Repository</a>
          </div>
        ))}
      </div>
    );
  }

export default Portfolio;
