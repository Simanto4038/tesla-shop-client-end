import React from 'react';
import {Carousel} from '3d-react-carousal';
import './Banner.css'
const Banner2 = () => {

    let slides = [
      <div className="bg-image">
            <img  src="https://i.ibb.co/rv6DHhP/banner101.jpg" alt="1" />

            <div className="mask row g-0 mb-2 "   > 

<div className="col-10 col-lg-6 mx-auto h-lg-75 mt-auto p-lg-4 p-2" style={{background: "rgba(251, 251, 251, 0.60)"}}>
<div className="h-100 my-auto">
<p className='fw-bold text-dark h2 text-center text-fluid bannerPara'>ENJOY 50% OFF</p>
 
 <button className='btn btn-danger w-100 mb-1'> Shop Now </button>
</div>

</div>
 
 </div>
      </div>,
      <div className="bg-image">
             <img  src="https://i.ibb.co/2s8Vcmv/banner106.jpg" alt="2" /> 

            <div className="mask row g-0 mb-2 "   > 

<div className="col-10 col-lg-6 mx-auto  h-lg-75 mt-auto p-lg-4 p-2 d-flex align-items-center " style={{background: "rgba(251, 251, 251, 0.75)"}}>

<div><p className='fw-bold text-secondary h2 text-center bannerPara'>HASSEL FREE SHOPPING</p></div>

</div>
 
 </div>
      </div>,
 <div className="bg-image">
            <img  src="https://i.ibb.co/1MCbt5n/banner102.jpg" alt="3" />

            <div className="mask row g-0 mb-2 "   > 

<div className="col-10  mx-auto h-lg-50 mb-auto p-lg-4 p-2  pt-3 d-flex align-items-center " style={{background: "rgba(19, 19, 19, 0.75)"}}>

<div><p className='fw-bold text-white h3 text-center p-2 bannerPara'>ENJOY THE WINTER SALE </p></div>

</div>
 
 </div>
      </div>,
 <div className="bg-image">
           <img  src="https://i.ibb.co/fdpYCCD/banner105.jpg" alt="4" />

            <div className="mask row g-0 mb-2 "   > 

<div className="col-10  mx-auto h-lg-50 mt-auto p-lg-4 p-2  pt-3 d-flex align-items-center " style={{background: "rgba(19, 19, 19, 0.75)"}}>

<div><p className='fw-bold text-white h3 text-center p-2 bannerPara '>WE ARE 24/7 AVAILABLE </p></div>

</div>
 
 </div>
      </div>,
 <div className="bg-image">
           <img  src="https://i.ibb.co/GM8qXjZ/banner104.jpg" alt="5" /> 

            <div className="mask row g-0 mb-2 "   > 

<div className="col-10  mx-auto h-lg-50 mt-auto p-lg-4 p-2  pt-3 d-flex align-items-center " style={{background: "rgba(19, 19, 19, 0.75)"}}>

<div><p className='fw-bold text-white h4 text-center p-2 bannerPara' style={{fontFamily:'cursive'}}>
     <span className='text-warning'>CHOOSE YOUR STYLE </span> & <span> GLAM UP YOUR PERSONALITY</span></p></div>

</div>
 
 </div>
      </div>,
 <div className="bg-image">
         <img src="https://i.ibb.co/CWb5X50/banner107.jpg" alt="banner107" />

            <div className="mask row g-0 mb-2 "   > 

<div className="col-10  mx-auto h-lg-50 mt-auto p-lg-4 p-2  pt-3 d-flex align-items-center " style={{background: "rgba(19, 19, 19, 0.75)"}}>

<div><p className='fw-bold text-white h4 text-center p-2 bannerPara' style={{fontFamily:'cursive'}}>
     <span className='text-warning'>GLAM UP YOUR PERSONALITY</span></p></div>

</div>
 
 </div>
      </div>,
 <div className="bg-image">
           <img  src="https://i.ibb.co/p1cTw7Q/banner110.jpg" alt="8" /> 

            <div className="mask row g-0 mb-2 "   > 

<div className="col-10  mx-auto h-lg-50 mt-auto p-lg-4 p-2  pt-3 d-flex align-items-center " style={{background: "rgba(19, 19, 19, 0.75)"}}>

<div><p className='fw-bold text-white h4 text-center p-2 bannerPara' style={{fontFamily:'cursive'}}>
     <span className='text-warning'> GLAM UP YOUR PERSONALITY</span></p></div>

</div>
 
 </div>
      </div>,
 <div className="bg-image">
           <img  src="https://i.ibb.co/TcPTHRp/banner108.jpg" alt="5" /> 

            <div className="mask row g-0 mb-2 "   > 

<div className="col-10  mx-auto h-lg-50 mt-auto p-lg-4 p-2  pt-3 d-flex align-items-center " style={{background: "rgba(19, 19, 19, 0.75)"}}>

<div><p className='fw-bold text-white h4 text-center p-2 bannerPara' style={{fontFamily:'cursive'}}>
     <span className='text-warning'>CHOOSE YOUR STYLE </span> </p></div>

</div>
 
 </div>
      </div>,
 <div className="bg-image">
           <img  src="https://i.ibb.co/jr836WX/banner109.jpg" alt="5" /> 

            <div className="mask row g-0 mb-2 "   > 

<div className="col-10  mx-auto h-lg-50 mt-auto p-lg-4 p-2  pt-3 d-flex align-items-center " style={{background: "rgba(19, 19, 19, 0.75)"}}>

<div><p className='fw-bold text-white h4 text-center p-2 bannerPara' style={{fontFamily:'cursive'}}>
     <span className='text-warning'>CHOOSE YOUR STYLE </span> </p></div>

</div>
 
 </div>
      </div>
        
        
       ];
    return (
        <div style={{background: "rgba(19, 19, 19, 0.75)",padding:'15px'}}>
            <Carousel slides={slides} />
        </div>
    );
};

export default Banner2;