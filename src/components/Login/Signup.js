import React, { useState } from 'react';
import { Col, Form, Row , Button} from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword , sendEmailVerification,updateProfile} from "firebase/auth";
import './logSign.css';
import initializeAuthentation from '../FirebaseConfigaretion/FirebaseInitialization';
import { NavLink } from 'react-router-dom';


initializeAuthentation();

const Signup = () => {

    // const [user,setUser]=useState({})
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassWord] = useState('');
    const [error,setError] = useState('');
    const auth = getAuth();







const handleNamechange =(e)=>
{  
  
    setName(e.target.value);
     
}
const handleEmailchange =(e)=>
{  
    setEmail(e.target.value);
}
const handlePasswordchange =(e)=>
{  
    setPassWord(e.target.value);
    console.log(password);
}
const handleSignUp = (e)=>
{       e.preventDefault();
    const condition = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/;
       if (!condition.test(password))
        {   
            setError(`Password should be at least 6 characters,contsain Upper case and Lower case!!!!!!`)
          return ;
           
       }
   else
   {
   
    createUserWithEmailAndPassword(auth,email, password,name).then((result) => {
        // Signed in 
        const user = result.user;
         console.log(user);
         setError('')
         VarifyDEmail()
         SetUserName()
         
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode );
      });
   
   }
}

const SetUserName =()=>
{
    updateProfile(auth.currentUser, {
  displayName:name}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
}
const VarifyDEmail = ()=>
{
    sendEmailVerification(auth.currentUser)
    .then(() => {
      // Email verification sent!
      // ...
      console.log("Email verification sent!");
    });
}

    return (
        <div className="col-12 col-lg-4 col-md-6 mt-5 mb-5 mx-auto bg-white text-start p-4">
            <Form onSubmit={handleSignUp}>
  <Row className="mb-3">
  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Name</Form.Label>
    <Form.Control onBlur={handleNamechange} placeholder="Your Full Name" />
  </Form.Group>
    <Form.Group  controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control onBlur={handleEmailchange} type="email" placeholder="Enter email" required />
    </Form.Group>

    <Form.Group controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control onBlur={handlePasswordchange} type="password" placeholder="Password" required />
     
    </Form.Group>
  </Row>
  
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

 

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Division</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>
  <small className='text-danger'> {error} </small>
  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form>
  <p className='h6 mt-3'>Already have an account ??</p>
       <NavLink
     className='link' style={{fontWeight: "bold",color:"blue"}} 
    activeStyle={{ fontWeight: "bold",color: "crimson"}} to="/logIn"> LOG IN <i className="fas fa-sign-in-alt"></i></NavLink >
 
        </div>
    );
};

export default Signup;