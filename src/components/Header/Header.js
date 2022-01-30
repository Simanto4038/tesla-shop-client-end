import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
import { Container, Image, Nav, Navbar, Offcanvas, Button, ListGroup, Card} from 'react-bootstrap';
// import './Navbar.css';

import profile from './profile.png';

import UseFirebase from '../../hooks/UseFirebase';
import Uppernav from './Uppernav';
import Cart from '../Cart/Cart';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';


const Header = () => {
    const [show, setShow] = useState(false);
    const {user ,SignoutHandler} = UseFirebase()
  
 
    // products to be rendered on the UI
   // console.log(user);
    const {displayName,email,photoURL} = user;
   // console.log(user);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const OrderReview = () => {
        // const [products] = useProducts();
        const {cart, setCart} = useCart();
        const history = useHistory();
    
        const handleRemove = key => {
            const newCart = cart.filter(product => product.key !== key);
            setCart(newCart);
            removeFromDb(key);
        }
    
        const handlePlaceOrder = () => {
            setCart([]);
            clearTheCart();
            history.push('/placeorder');
        }
    
        return (
            <div className="container row bg-dark text-white">
                {/* <div className="col-12 ">
                    {
                        cart.map(product => <OrderItem
                            key={product.key}
                            product={product}
                            handleRemove={handleRemove}
                        ></OrderItem>)
                    }
                </div> */}
                <div className="col-12 p-4 bg-dark text-white">
                    <Cart cart={cart} className="bg-dark text-white">
                   <div className="row g-2">
                   <Link to="/review">
                            <button className="btn btn-outline-danger w-100">Review Your Order</button>
                        </Link>
                    <div>
                    <button onClick={handlePlaceOrder} className="btn btn-outline-warning w-100">Place Order</button>
                    </div>
                   </div>
                    </Cart>
                </div>
            </div>
        );
    };

const OrderItem = (props) => {
        const { name, price, quantity, key, img } = props.product;
        const { handleRemove } = props;
        return (
            <div className="border border-2 m-1 p-4 d-block">
                  <div>
                    <img src={img} style={{height:'75px',width:'75%',marginInline:'auto'}}  alt="" />
                 </div>
                <div>
                    <small className="product-name" >{name}</small>
                    <div>
                    <p>Price:${price} Quantity: {quantity}</p>
                    </div>
                  
                  
                    <button onClick={() => handleRemove(key)} className="btn btn-outline-danger">Remove</button>
                </div>
            </div>
        );
    };

    function Userinfo() {
    
      return (
        <>
          
    
          <Offcanvas show={show} placement='end' onHide={handleClose} className="bg-dark text-white">
            <Offcanvas.Header closeButton className="bg-white text-dark">
              <Offcanvas.Title >{(displayName||email)?'WELCOME TO TESLA MART':'PLEASE LOG IN'} </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
  
            <Card className='border border-0 bg-dark text-white'>
              
              <div  className='p-2 text-center' >
                  <img src={photoURL? photoURL : profile } style={{height:'55px',width:'55px',borderRadius:"100%"}} alt="" />
              </div>
            
          
          <ListGroup variant="flush" >
            <ListGroup.Item className="bg-dark text-white">Name: {displayName} </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white">Email:{email}</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white"><OrderReview/></ListGroup.Item>
            <ListGroup.Item>
            <Card.Body>
             {(displayName||email)?<Button onClick={SignoutHandler} className="btn btn-dark">Sign Out</Button>:
            <NavLink
            className='link' style={{fontWeight: "bold",color:"gray"}} 
           activeStyle={{ fontWeight: "bold",color: "crimson"}} to="/logIn"><Button className="btn btn-dark">LOG IN</Button></NavLink >}
           
            
          </Card.Body>
            </ListGroup.Item>
          </ListGroup>
        </Card>
            
            </Offcanvas.Body>
          </Offcanvas>
        </>
      );
    }
    
    return (
      <div>
        <Uppernav/>
    <Navbar collapseOnSelect expand="lg" className="" variant="dark">
    <Container>
    <Navbar.Brand > <Image src={logo} style={{height:'60px',width:'105px'}} rounded /></Navbar.Brand>
    <Navbar.Toggle  style={{color:'crimson',backgroundColor:'crimson'}} aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
  
      <Nav className=" w-75 mx-auto linkBox ">
      <NavLink 
       className='link' style={{fontWeight: "bold", fontSize:'20px',color:"gray"}} 
      activeStyle={{ fontSize:'20px', fontWeight: "bold",color: "crimson"}} to="/home">Home</NavLink >
      <NavLink  className='link' style={{fontWeight: "bold", fontSize:'20px',color:"gray"}} 
      activeStyle={{ fontSize:'20px', fontWeight: "bold",color: "crimson"}} to="/products">Products</NavLink >
      <NavLink className='link' style={{fontWeight: "bold", fontSize:'20px',color:"gray"}}
      activeStyle={{fontSize:'20px', fontWeight: "bold",color: "crimson"}} to="/review">Order Review</NavLink >
         <NavLink className='link' style={{fontWeight: "bold", fontSize:'20px',color:"gray"}}
      activeStyle={{fontSize:'20px'}} to="/mydash"> My DashBoard </NavLink >
      <NavLink className='link' style={{fontWeight: "bold", fontSize:'20px',color:"gray"}}
      activeStyle={{fontSize:'20px', fontWeight: "bold",color: "crimson"}} to="/inventory">Inventory</NavLink >
      </Nav>
     
      <img  src={photoURL ? photoURL : profile} style={{height:'45px',width:'45px',borderRadius:"100%"}} alt="" />
      <i onClick={handleShow} className="fas fa-cart-plus" style={{fontSize:'35px'}}>
     

      </i>
        
     <Userinfo />
  
     
    </Navbar.Collapse>
    </Container>
  </Navbar>
      </div>
    );
    // return (
    //     <div className="header">
    //         <img className="logo" src={logo} alt="" />
    //         <nav>
    //             <NavLink to="/shop">Shop</NavLink>
    //             <NavLink to="/review">Order Review</NavLink>
    //             <NavLink to="/inventory">Manage Inventory</NavLink>
    //         </nav>
    //     </div>
    // );
};

export default Header;