import React, { useState } from 'react';
import googlelogo from './google.png'
import gitlogo from './github.png';
import { Form , Button,Card, ListGroup, ListGroupItem, Navbar } from 'react-bootstrap';
import { NavLink,useLocation,useHistory } from 'react-router-dom';

//import { getAuth, signInWithPopup,signInWithEmailAndPassword, GoogleAuthProvider,GithubAuthProvider ,signOut,sendPasswordResetEmail} from "firebase/auth";
import initializeAuthentation from '../FirebaseConfigaretion/FirebaseInitialization';
import './logSign.css'
// import UseFirebase from '../../hooks/UseFirebase';
import useAuth from '../../hooks/useAuth';
import UseFirebase from '../../hooks/UseFirebase';


initializeAuthentation();



const Login = () => {
 


const {GoogleSignInHandler,
       user,
       error,
       setUser,
       setError,
       GitSignInHandler,
       SigninWithEmail,
       handleEmailchange,
       handlePasswordchange,
       SignoutHandler,
       resetPasword,
       setIsLoading} =UseFirebase()
console.log(user);


const location = useLocation()
console.log(location.state?.from);
const redirect_URL = location.state?.from || '/shop'
const history = useHistory()
const HandleGoogleLogIn = ()=>
{ 
  setIsLoading(true)
  GoogleSignInHandler().then((result) => {

    const {displayName,email,photoURL} = result.user;
    const loggedinUserInfo={
      name:displayName,
      email:email,
      photo:photoURL
    }

    setUser(loggedinUserInfo);
    history.push(redirect_URL)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    setError(errorCode);
  }).finally(()=>setIsLoading(false));
}









    return (
        <div className="mt-5 row">
      
            <div className='col-12 col-lg-4 col-md-6  mx-auto  text-start p-4  '>
            <h2>Sign In / Log In</h2>

     <Form onSubmit={SigninWithEmail} className="border dorder-3 p-3 ">
           
    <Form.Group  controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control onBlur={handleEmailchange} type="email" placeholder="Enter email" required />
    </Form.Group>

    <Form.Group controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control onBlur={handlePasswordchange} type="password" placeholder="Password" required />
    </Form.Group>
    <small className='text-danger'> {error} </small> <br />
  <Button variant="warning" style={{fontWeight: "bold", fontSize:'20px',color:"white",marginTop:'5px',paddingLeft:'25px',paddingRight:'25px'}} type="submit">
    
  Sign In
  </Button>
  <Button onClick={resetPasword} variant="link">Forgate Your Password??</Button>
  </Form>
   
 

   <br />
   <p className='h5'>OR LOG IN WITH</p>
  <Button type="submit" onClick={HandleGoogleLogIn} className='btn btn-dark' >LOG IN WITH <img src={googlelogo} style={{height:'20px',width:'20px'}} alt="" /></Button>
  <Button type="submit" onClick={GitSignInHandler} className='btn btn-dark ms-2' >LOG IN WITH <img src={gitlogo} style={{height:'20px',width:'20px'}} alt="" /></Button>
    
  <br />
  
  <Navbar.Text className='h6 pe-3 '>
  <p className='h6 mt-3'>Don't have an account ??</p>
       <NavLink
     className='link' style={{fontWeight: "bold",color:"blue"}} 
    activeStyle={{ fontWeight: "bold",color: "crimson"}} to="/signUp"> Sign Up <i className="fas fa-sign-in-alt"></i></NavLink >
      </Navbar.Text>
</div>

{ 
 ( user.name||user.email) && <div>
<Card className='w-50 mx-auto'>
  <Card.Img variant="top"className='mx-auto' src={user.photo} style={{height:'125px',width:'125px',borderRadius:"100%"}} alt="" />
  <Card.Body>
    <Card.Title>Student Detail</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Name:{user.name}</ListGroupItem>
    <ListGroupItem>Email:{user.email}</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
   <Button onClick={SignoutHandler}className="btn btn-dark">Sign Out</Button>
   <Button className="btn btn-dark ms-2">Detail</Button>
    
  </Card.Body>
</Card>

        </div>
}
        </div>
    );
};

export default Login;