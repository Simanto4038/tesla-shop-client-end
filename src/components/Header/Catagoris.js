import React from 'react';
import { NavLink } from 'react-router-dom';

const Catagoris = () => {
    return (
        <div>
            

            <div className='row g-5 m-5'>

                <div className="col-12 col-lg-4 col-md-6"> 
                <NavLink className='link' to="/electronics">

                <button className="btn btn-danger w-100 p-5" ><i className="fas fa-laptop" style={{fontSize:'42px'}}></i> <h4>ELECTRONICS </h4> </button>
                </NavLink >
                </div>

                <div className="col-12 col-lg-4 col-md-6">
                <NavLink className='link' to="/manageAllorders">    
                    <button className='btn btn-danger w-100 p-5'> <i className="fas fa-tshirt" style={{fontSize:'42px'}}></i> <h4>GARMENTS & CLOATHING</h4> </button>
                </NavLink >    
                </div>
                <div className="col-12 col-lg-4 col-md-6"> 
                <NavLink className='link' to="/managetestDate">

                <button className="btn btn-danger w-100 p-5" ><i className="fab fa-hornbill" style={{fontSize:'42px'}}></i> <h4>EXCLUSIVE ORNAMENTS</h4> </button>
               </NavLink >
                 </div>
                <div className="col-12 col-lg-4 col-md-6"> 
                <NavLink className='link' to="/productUpload">

                <button className="btn btn-danger w-100 p-5" ><i className="fas fa-sun" style={{fontSize:'42px'}}></i> <h4>SUNGLASS</h4> </button>
               </NavLink >
                 </div>
               

                <div className="col-12 col-lg-4 col-md-6"> 

                <NavLink className='link' to="/manageAllproducts">
                <button className="btn btn-danger w-100 p-5" ><i className="fas fa-suitcase-rolling" style={{fontSize:'42px'}}></i> <h4>BACK PACK</h4> </button>
               </NavLink >
                 </div>
            </div>


        </div>
    );
};

export default Catagoris;