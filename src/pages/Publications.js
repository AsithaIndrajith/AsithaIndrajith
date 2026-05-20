import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import publications from '../data/publications';

const Publications = () => (
  <Main
    title="Publications"
    description="Research publications by Asitha Kottahachchi."
  >
    <article className="post" id="publications">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/publications">Publications</Link></h2>
          <p>Research in machine learning, quantum computing, and cybersecurity.</p>
        </div>
      </header>
      {publications.map((publication) => (
        <article className="jobs-container" key={publication.title}>
          <header>
            <h4>
              <a target="_blank" rel="noreferrer" href={publication.link}>
                {publication.title}
              </a>
            </h4>
            <p className="daterange">
              {publication.venue}
              {' '}
              ({publication.year})
            </p>
          </header>
          <p>{publication.authors}</p>
          {publication.citedBy > 0 && (
            <p>
              Cited by
              {' '}
              {publication.citedBy}
            </p>
          )}
        </article>
      ))}
    </article>
  </Main>
);

export default Publications;
