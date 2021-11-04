import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from './banner101.jpg';
import slide2 from './banner102.jpg';
import slide3 from './banner103.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel style={{maxHeight:'650px'}}>
  <Carousel.Item style={{maxHeight:'650px'}}>
    <img
      className="d-block w-100 slideimg img-fluid"
      src={slide1}
      alt="First slide"
    />
    <Carousel.Caption style={{backgroundColor:"rgba(1, 1, 22, 0.4)"}} className='  d-flex flex-column align-items-center justify-content-center h-100'>
        <p>Unmatched Quality Of Service</p>
      <h1>WE OFFER BEST QUALITY AND FAST SERVICE</h1>
      <p>We Never Compromise With Emergency Service & Give our best to support out coustomer who are in need</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{maxHeight:'650px'}}>
    <img
      className="d-block w-100 slideimg"
      src={slide2}
      alt="Second slide"
    />

   <Carousel.Caption style={{backgroundColor:"rgba(1, 1, 22, 0.4)"}} className='h-100 d-flex flex-column align-items-center justify-content-center  '>
        <p>Unmatched Quality Medicines</p>
      <h1>WE OFFER BEST QUALITY MEDICINE & MEDICARE</h1>
      <p>Along with this, we offer a dust free, 
            temperature & humidity controlled environment to 
            ensure the safety and protection of the medicines.</p>
        
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{maxHeight:'650px'}}>
    <img
      className="d-block w-100 slideimg"
      src={slide3}
      alt="Third slide"
    />

  <Carousel.Caption style={{backgroundColor:"rgba(1, 1, 22, 0.4)"}} className='d-flex flex-column align-items-center justify-content-center h-100'>
        <p>Unmatched Quality Services</p>
      <h1>WE OFFER BEST QUALITY SERVICES</h1>
      <p>We Never Compromise With Quality Medicines and Our Services</p>

      <button className='pt-2 pb-2 banner-btn'>Call For Ambulance</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;