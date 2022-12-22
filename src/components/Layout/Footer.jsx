import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <div className='footer'>
      <img
        className='footer__img'
        src='images/HomePageimg/Logo.png'
        alt='로고'
        width='100px'
      />
      <p className='footer__p'>
        이용약관 ㅣ 개인정보 처리방침 ㅣ 인재채용 ㅣ 협력 및 제안 문의
      </p>
      <p>
        대표: 최원장 ㅣ 사업자번호: 02 - 1234 - 5678 ㅣ 이메일: sparta@gamil.com
      </p>
      <p>서울특별시 강남구 역삼1동 논현로 425 - Sparta Coding Club</p>
    </div>
  );
};
export default Footer;
