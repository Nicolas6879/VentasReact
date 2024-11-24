import React from 'react';
import Slider from 'react-slick';
import slide1 from '../assets/images/slide-01.jpg';
import slide2 from '../assets/images/slide-02.jpg';
import slide3 from '../assets/images/slide-03.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/ImageSlider.css'; // Importa el archivo CSS

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div className="slide">
        <img src={slide1} alt="Slide 1" />
      </div>
      <div className="slide">
        <img src={slide2} alt="Slide 2" />
      </div>
      <div className="slide">
        <img src={slide3} alt="Slide 3" />
      </div>
    </Slider>
  );
}

export default ImageSlider;