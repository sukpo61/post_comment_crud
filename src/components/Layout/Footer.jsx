import './style.css';
import React from 'react';
import Top from './Top';

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='footerbox1'>
          <img
            className='footer__img'
            src='images/HomePageimg/Logo.png'
            alt='로고'
            width='100px'
          />
        </div>
        <div className='footerbox2'>
          <p className='footer__p'>
            이용약관 ㅣ 개인정보 처리방침 ㅣ 인재채용 ㅣ 협력 및 제안 문의
          </p>
          <p className='footer__p'>
            대표: 최원장 ㅣ 사업자번호: 02 - 1234 - 5678 ㅣ 이메일:
            sparta@gamil.com
          </p>
          <p className='footer__p'>
            서울특별시 강남구 역삼1동 논현로 425 - Sparta Coding Club
          </p>
        </div>
      </div>
      <Top />
    </div>
  );
};
export default Footer;
