import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

const Carousel = ({ img1, img2, img3, img4, img5 }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    lazyLoad: "progressive",
  };
  const arr = [img1, img2, img3, img4, img5];
  return (
    <div className="carousel">
      <Slider {...settings}>
        {arr.map((item) => {
          return <img src={item} alt="반죽" />;
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
