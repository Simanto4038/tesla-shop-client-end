import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel fade style={{maxHeight:'450px'}}>
  <Carousel.Item style={{maxHeight:'450px'}}>
    <img
      className="d-block w-100 h-100 slideimg img-fluid"
      src="https://i.ibb.co/c8fK7hh/Topbanner4.jpg" 
      alt="First slide"
    />
    {/* <Carousel.Caption style={{backgroundColor:"rgba(1, 1, 22, 0.4)"}} className='  d-flex flex-column align-items-center justify-content-center h-100'>
    
      <h1>WE OFFER BEST QUALITY AND FAST SERVICE</h1>

    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item style={{maxHeight:'450px'}}>
    <img
      className="d-block w-100 slideimg"
      src="https://i.ibb.co/Qf9DPWs/Topbanner1.jpg" 
      alt="Second slide"
    />

   {/* <Carousel.Caption style={{backgroundColor:"rgba(1, 1, 22, 0.4)"}} className='h-100 d-flex flex-column align-items-center justify-content-center  '>
        
      <h1>WE OFFER BEST QUALITY PRODUCTS AT AFFORDABLE PRICE</h1>    
    </Carousel.Caption> */}

  </Carousel.Item>
  <Carousel.Item style={{maxHeight:'450px'}}>
    <img
      className="d-block w-100 slideimg"
      src="https://i.ibb.co/3vRVVSW/Topbanner10.jpg" 
      alt="Third slide"
    />

  {/* <Carousel.Caption style={{backgroundColor:"rgba(1, 1, 22, 0.4)"}} className='d-flex flex-column align-items-center justify-content-center h-100'>
      <h1>WE OFFER BEST QUALITY SERVICES</h1>
    </Carousel.Caption> */}

  </Carousel.Item>
  <Carousel.Item style={{maxHeight:'450px'}}>
    <img
      className="d-block w-100 slideimg"
      src="https://i.ibb.co/xJsdhyV/Topbanner3.jpg" 
      alt="Third slide"
    />
{/* 
  <Carousel.Caption style={{backgroundColor:"rgba(1, 1, 22, 0.4)"}} className='d-flex flex-column align-items-center justify-content-center h-100'>
        <p>Unmatched Quality Services</p>
      <h1>WE OFFER BEST QUALITY SERVICES</h1>
    </Carousel.Caption> */}

  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;