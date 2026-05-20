import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/about.md');
const transformLinkUri = ReactMarkdown.uriTransformer;
ReactMarkdown.defaultProps = undefined;

const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

const LinkRenderer = ({ href = null, children, ...props }) => (
  href && href.startsWith('/')
    ? <Link to={href} {...props}>{children}</Link>
    : <a href={href} {...props}>{children}</a>
);

LinkRenderer.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

const About = () => (
  <Main
    title="About"
    description="Learn about Asitha Kottahachchi"
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about">About Me</Link></h2>
          <p>(in about {count} words)</p>
        </div>
      </header>
      <ReactMarkdown
        components={{
          a: LinkRenderer,
        }}
        transformLinkUri={transformLinkUri}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  </Main>
);

export default About;
