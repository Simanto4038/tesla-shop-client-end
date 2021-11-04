import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Uppernav = () => {
    return (
        <div>
            <Navbar className=' bg-dark'>
 
    <Navbar.Brand className='h6 ps-3 text-white '  > <i className="fas fa-arrow-circle-right"></i></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className='h6 pe-3 text-white'>
      Sign In <NavLink
     className='link' style={{fontWeight: "bold",color:"gray"}} 
    activeStyle={{ fontWeight: "bold",color: "crimson"}} to="/logIn"> <i className="fas fa-sign-in-alt"></i></NavLink >
      </Navbar.Text>
  
      <Navbar.Text className='h6 pe-3 text-white'>
      Sign Up <NavLink
     className='link' style={{fontWeight: "bold",color:"gray"}} 
    activeStyle={{ fontWeight: "bold",color: "crimson"}} to="/signUp"> <i className="fas fa-sign-in-alt"></i></NavLink >
      </Navbar.Text>
    </Navbar.Collapse>
 
</Navbar>
        </div>
    );
};

export default Uppernav;