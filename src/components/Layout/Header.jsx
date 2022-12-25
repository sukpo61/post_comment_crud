import React from 'react';
import './style.css';
import Modal from '../Pages/Modal/Modal';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();
  return (
    <header className='Headerbox'>
      <div
        onClick={() => {
          navigate('/');
        }}
      >
        <a href=''>
          <img
            className='HeaderLogo'
            src='images/HomePageimg/Logo.png'
            alt=''
          />
        </a>
      </div>
      <div className='Hambuger'>
        <i
          className='fa-solid fa-bars'
          onClick={() => {
            setOpenModal(true);
          }}
        ></i>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </header>
  );
};

export default Header;
