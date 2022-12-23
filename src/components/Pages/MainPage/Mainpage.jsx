import React from 'react';
import './style.css';
import Carousel from './Carousel';

export default function Mainpage() {
  return (
    <body>
      <p className='MainText'>
        N<br />U<br />L<br />L<br />B<br />A<br />K<br />E<br />R<br />Y
      </p>
      <img
        className='mainBread'
        src='images/HomePageimg/changeMain.png'
        alt=''
      />
      <div className='carousels'>
        <Carousel
          img1={'images/HomePageimg/img1.png'}
          img2={'images/HomePageimg/img2.png'}
          img3={'images/HomePageimg/img3.png'}
          img4={'images/HomePageimg/img4.png'}
          img5={'images/HomePageimg/img5.jpeg'}
        />
        <Carousel
          img1={'images/HomePageimg/img1.png'}
          img2={'images/HomePageimg/img2.png'}
          img3={'images/HomePageimg/img3.png'}
          img4={'images/HomePageimg/img4.png'}
          img5={'images/HomePageimg/img5.jpeg'}
        />
      </div>
      <div className='background'>
        <img className='bakery' src='images/HomePageimg/toast.png' alt='빵집' />
      </div>
      <div className='back'></div>
      <img className='wheat' src='images/HomePageimg/wheat.png' alt='밀밭' />
      <div className='wheat__'>
        <p className='wheat__p1'>우리의 밀로</p>
        <p className='wheat__p2'>우리의 것으로</p>
        <p className='wheat__p3'>우리의 미래를</p>
        <p className='wheat__p4'>만들어 갑니다</p>
        <p className='wheat__p5'>후나</p>
      </div>
      {/* <div style={{ position: "relative", height: "50px" }}></div> */}
      <div class='work__projects'>
        <a href='#' className='project' target='blank'>
          <img
            src='images/HomePageimg/bread1.png'
            alt='빵'
            className='project__img'
          />
          <div className='project__description'>
            <h3>View more</h3>
            <span>Bread</span>
          </div>
        </a>
        <div className='project' target='blank'></div>
        <a href='#' className='project' target='blank'>
          <img
            src='images/HomePageimg/bread2.png'
            alt='빵'
            className='project__img'
          />
          <div className='project__description'>
            <h3>View more</h3>
            <span>Bread</span>
          </div>
        </a>
        <a href='#' className='project' target='blank'>
          <img
            src='images/HomePageimg/bread3.png'
            alt='빵'
            className='project__img'
          />
          <div className='project__description'>
            <h3>View More</h3>
            <span>Bread</span>
          </div>
        </a>
        <div className='project' target='blank'></div>
        <a href='#' className='project' target='blank'>
          <img
            src='images/HomePageimg/bread4.png'
            alt='빵'
            className='project__img'
          />
          <div className='project__description'>
            <h3>View More</h3>
            <span>Bread</span>
          </div>
        </a>
      </div>
    </body>
  );
}
