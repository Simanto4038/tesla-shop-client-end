import React from 'react';
import img from '../../images/giphy.gif';
import { useForm } from "react-hook-form";
import "./styles.css";
import { Form } from 'react-bootstrap';
import UseFirebase from '../../hooks/UseFirebase';

const PlaceOrder = () => {
    const {user} = UseFirebase()
    const {displayName,email} = user;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => 
        {

        console.log(data)

        };
  
    return (
        <div className='w-50 mx-auto form-body p-5'>
    
            <form onSubmit={handleSubmit(onSubmit)}>
  
      <input defaultValue={displayName} {...register("Name")} />
      

      <input defaultValue={email} {...register("Email", { required: true })} />
         {errors.exampleRequired && <span>This field is required</span>}
      <input {...register("Address", { required: true })} />
         {errors.exampleRequired && <span>This field is required</span>}

     
      
      <input className='frm-button' type="submit" />
    </form>
        </div>
    );
};

export default PlaceOrder;