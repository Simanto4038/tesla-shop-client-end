import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Option = () => {
    return (
        <div>
                 
                 <div className='row g-5 m-5'>

<div className="col-12 col-lg-4 col-md-6"> 
<NavLink className='link' to="/electronics">
       <Card className='p-2'>
           <h4 className='text-black text-center'>ELECTRONICS</h4>
           <div className='row g-1'>
            <div className="col-6">
            <img src="https://i.ibb.co/tX3QDLm/woman-chooses-the-laptop.jpg" alt="laptop" className='img-fluid' />
            </div>
            <div className="col-6">
            <img src="https://i.ibb.co/M1KHy8P/electronics102.jpg" alt="electronics102" className='img-fluid' />
            </div>
            <div className="col-6">
            <img src="https://i.ibb.co/R7v17zh/electronics103.jpg" alt="electronics104" className='img-fluid' />
            </div>
            <div className="col-6">
            <img src="https://i.ibb.co/wr29sLQ/electronics104.jpgg" alt="electronics103"  className='img-fluid' />
            </div>
        </div>
       </Card>
</NavLink >
</div>

<div className="col-12 col-lg-4 col-md-6">
<NavLink className='link' to="/fassion">   

    <Card className='p-2'>
           <h4 className='text-black text-center'>FASSION & CLOATHING</h4>
           <div className='row g-1'>
            <div className="col-6">
            <img src="https://i.ibb.co/jr836WX/banner109.jpg" alt="banner109" className='img-fluid' />
            </div>
            <div className="col-6">
            <img src="https://i.ibb.co/CWb5X50/banner107.jpg" alt="banner107" className='img-fluid' />
            </div>
            <div className="col-6">
            <img  src="https://i.ibb.co/dMntwX5/clothing-Option101.jpg" alt="clothing-Option101" className='img-fluid' />
            </div>
            <div className="col-6">
            <img  src="https://i.ibb.co/D9X3M5f/clothing-Option104.jpg" alt="clothing-Option104" className='img-fluid' />
            </div>
        </div>
       </Card>
</NavLink >    
</div>
<div className="col-12 col-lg-4 col-md-6"> 
<NavLink className='link' to="/sports">

<Card className='p-2'>
           <h4 className='text-black text-center'>SPORTS</h4>
           <div className='row g-1'>
            <div className="col-6">
            <img  src="https://i.ibb.co/WgxLhjr/Colorful-soccer-jerseys.jpg" alt="Colorful-soccer-jerseys"className='img-fluid' />
            </div>
            <div className="col-6">
            <img src="https://i.ibb.co/5FgtCHQ/sports-Banner104.jpg" alt="sports-Banner104" className='img-fluid' />
            </div>
            <div className="col-6">
            <img  src="https://i.ibb.co/9GXNHHQ/14-year-old-boy-athlete-wearing-red-jersey-holding-soccer-ball-and-looking-away-from-camera-with-han.jpg" alt="clothing-Option101" className='img-fluid' />
            </div>
            <div className="col-6">
            <img  src="https://i.ibb.co/X469RTV/sports-Banner101.jpg" alt="sports-Banner101" className='img-fluid' />
            </div>
        </div>
       </Card>
</NavLink >
 </div>
<div className="col-12 col-lg-4 col-md-6"> 
<NavLink className='link' to="/productUpload">

<Card className='p-2'>
           <h4 className='text-black text-center'> SUNGLASS </h4>
           <div className='row g-1'>
            <div className="col-6">
            <img src="https://i.ibb.co/n1f0HhS/A-portrait-of-a-beautiful-teenager-with-white-sunglasses-isolated-on-yellow-studio-background.jpg" alt="sunglass" className='img-fluid' />
            </div>
            <div className="col-6">
            <img src="https://i.ibb.co/FsCngCL/Cropped-shot-of-a-beautiful-young-woman-enjoying-herself-while-out-on-a-road-trip.jpg" alt="sunglass" className='img-fluid' />
            </div>
            <div className="col-6">
            <img src="https://i.ibb.co/RcBxrbF/sunglass106.jpg" alt="sunglass106" className='img-fluid' />
            </div>
            <div className="col-6">
            <img src="https://i.ibb.co/VHcWK7f/Sunny-croatian-mediterranean-beach-mirroring-in-black-sunglasses-Selective-Focus-Detail-Shot-Dalmati.jpg" alt="sunglass106"   className='img-fluid' />
            </div>
        </div>
       </Card>
</NavLink >
 </div>


<div className="col-12 col-lg-4 col-md-6"> 

<NavLink className='link' to="/shoes">
<Card className='p-2'>
           <h4 className='text-black text-center'> SHOES </h4>
           <div className='row g-1'>
            <div className="col-6">
            <img src="https://i.ibb.co/tCJbGHP/Young-man-shopping-shoes.jpg" alt="shoes"className='img-fluid' />
            </div>
            <div className="col-6">
            <img src="https://i.ibb.co/Ry40Q1C/Hand-holding-a-brown-leather-shoe-studio-shot.jpg" alt="brown-leather" className='img-fluid' />
            </div>
            <div className="col-6">
            <img src="https://i.ibb.co/ypQRmwC/shoe103.jpg" alt="shoe103"  className='img-fluid' />
            </div>
            <div className="col-6">
            <img src="https://i.ibb.co/fDMbKrC/shoe104.jpg" alt="shoe104" className='img-fluid' />
            </div>
        </div>
       </Card>
</NavLink >
 </div>
</div>    


        </div>
    );
};

export default Option;