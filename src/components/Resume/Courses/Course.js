import React from 'react';
import PropTypes from 'prop-types';

const Course = ({ data, last = false }) => (
  <li className="course-container">
    <a target="_blank" rel="noreferrer" href={data.link}>
      <p className="course-name">{data.title}</p>
    </a>
    {!last && <div className="course-dot"><p className="course-name"> &#8226;</p></div>}
  </li>
);

Course.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

export default Course;
