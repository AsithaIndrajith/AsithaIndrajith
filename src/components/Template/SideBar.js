import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me2.jpg`} alt="" />
      </Link>
      <header>
        <h2>Asitha Kottahachchi</h2>
        <p><a target="_blank" rel="noreferrer" href="mailto:ASITHAINDRAJITHK9@gmail.com">ASITHAINDRAJITHK9@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Asitha, a Ph.D. student at
        {' '}<a target="_blank" rel="noreferrer" href="https://www.rmit.edu.au/">RMIT University</a> in Melbourne.
        My research interests span machine learning, quantum computing, and cybersecurity.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Asitha Kottahachchi <Link to="/">asithaindrajith.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
