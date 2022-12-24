import React from 'react';
import './style.css';

const Top = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='scroll__container'>
      <button className='scroll' onClick={scrollTop}>
        Top
      </button>
    </div>
  );
};

export default Top;
