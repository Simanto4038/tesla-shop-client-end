import React from 'react';
import img from '../../images/giphy.gif';
import { useForm } from "react-hook-form";
import "./styles.css";
import { Form, Modal } from 'react-bootstrap';
import UseFirebase from '../../hooks/UseFirebase';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import axios from 'axios';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';

const PlaceOrder = () => {
    const {user} = UseFirebase()
    //    const {cart, setCart} = useCart(products);
    const [modalShow, setModalShow] = useState(false);
    const [products] = useProducts();
    const {cart,setCart} = useCart(products);
    const savedCart = getStoredCart();
    const {displayName,email} = user;
    const { register, handleSubmit, watch,reset, formState: { errors }} = useForm();
    const onSubmit = data => 
        {
            const savedCart = getStoredCart();
            data.order=savedCart;
            const uri = 'https://pacific-sierra-62926.herokuapp.com/userOrder'

           fetch(uri,{
              method:'POST',
               headers:{
                   'content-type':'application/json'
               },
               body: JSON.stringify(data)
           }).then(response => response.json()).then(result =>{
            console.log(result)
            if (result.insertedId) {
               setModalShow(true)
               reset()
               clearTheCart();
               setCart([]);
            }
           })

        //    setCart([]);
          

        };
  
    return (
          <div className="row g-0">
                    <div className="col-12 mx-auto">
                    <div className="col-12 col-lg-6 mx-auto">
                    <Cart cart={cart} >
                    </Cart>
                    </div>
                    </div>

                  <div className='col-12 col-lg-6 mx-auto form-body p-5'>
                
    
    <form onSubmit={handleSubmit(onSubmit)}>

<input defaultValue={displayName} {...register("Name")} />
<MyVerticallyCenteredModal
show={modalShow}
onHide={() => setModalShow(false)}
/>

<input defaultValue={email} {...register("Email", { required: true })} />
 {errors.exampleRequired && <span>This field is required</span>}
<input {...register("Address", { required: true })} />
 {errors.Address && <p>This field is required</p>}



<input className='frm-button' type="submit" />
</form>


</div>

          </div>
    );
};


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
      {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3 className='text-center'>You Order Has Been Succcessfully Placed</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="d-flex align-items-center justify-content-center p-5 ">
        <i className="far fa-check-circle m-5" style={{color:'greenyellow',fontSize:'120px'}}></i>
        </div>
        </Modal.Body>
        
      </Modal>
    );
  }
export default PlaceOrder;