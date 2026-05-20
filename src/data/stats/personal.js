import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState('');

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1995-09-17T16:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    tick();
    const timer = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: '3 (Sri Lanka, Japan, Australia)',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Melbourne, Australia',
  },
];

export default data;
