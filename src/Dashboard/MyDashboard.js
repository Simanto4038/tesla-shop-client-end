import React,{ useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

import useAuth from '../../hooks/useAuth';
import profile from './profile.png'

const MyDashboard = () => {
      

    const {user}=useAuth()
    const {displayName,email,photoURL} = user;
    
    const [displayOrder,setDisplayOrder]=useState("none")
    const [displaytest,setDisplaytest]=useState("none")


    const [orders, setOrders] = useState([]);
    const [dates, setDates] = useState([]);
    useEffect(() => {
        fetch('https://floating-coast-28469.herokuapp.com/userOrder')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    useEffect(() => {
        fetch('https://floating-coast-28469.herokuapp.com/testdrive')
            .then(res => res.json())
            .then(data => setDates(data));
    }, []);

    const HandleOrders=()=>{
        const myorders = orders.filter(order => order.email == email )
        setOrders(myorders);
        setDisplaytest("none")
        setDisplayOrder("block")

        console.log(orders);
       
    }
    const HandleDate=()=>{
        const mydates = dates.filter(index => index.email == email )
        setDates(mydates)
        setDisplayOrder("none")
        setDisplaytest("block")


        console.log(orders);
       
    }

    const ShowOrder =()=>
    {
        return(
            
           <div className="row g-4">
               {
                    orders.map(order =>{
                        const {jeepColor,name,FinalPrice,colorExtra,tireExtra,transmissionExtra,interiorExtra,entertainmentExtra,address}=order;
                       return(
                           
                        <div className='col-12 col-lg-4 col-md-6'>
                               <Card >
          <Card.Img variant="top" src={jeepColor} />
          <Card.Body>
            <Card.Title>{name} </Card.Title>
          
          </Card.Body>
          <ListGroup className="list-group-flush">
        <ListGroupItem>{FinalPrice} USD </ListGroupItem>
            <ListGroupItem> ADDITIONAL PRICE FOR COLOR :- {colorExtra} USD</ListGroupItem>
            <ListGroupItem> ADDITIONAL PRICE FOR TIRE :-{tireExtra} USD</ListGroupItem>
            <ListGroupItem> ADDITIONAL PRICE FOR TRANSMISSION :-{transmissionExtra} USD</ListGroupItem>
            <ListGroupItem> ADDITIONAL PRICE FOR ITERIORCOLOR :-{interiorExtra} USD</ListGroupItem>
            <ListGroupItem> ADDITIONAL PRICE FOR ENTERTAINMENT :-{entertainmentExtra} USD</ListGroupItem>
            <ListGroupItem> ADDRESS :-{address} USD</ListGroupItem>
            <ListGroupItem> <button className='btn btn-warning m-3'>Delete</button></ListGroupItem>
          
          </ListGroup>

         
        </Card>        
                       </div>
                       )
                        
                    })
               }
           </div>
        )
    }


    const ShowTestDate = ()=>{
        return(
            
           <div className="row g-4">
               {
                    dates.map( drivedate =>{
                        const {name,email,address,phone,branch,date, brand} =drivedate;
                       return(
                           
                        <div className='col-12 col-lg-4 col-md-6 p-4'>
                               <Card >
          <Card.Img variant="top" src={brand} style={{height:'250px'}} />
          <Card.Body>
            <Card.Title>{name} </Card.Title>
            <Card.Title>{email} </Card.Title>
            <Card.Title>{phone} </Card.Title>
          
          </Card.Body>
          <ListGroup className="list-group-flush">
        <ListGroupItem>ADDRESS : {address}</ListGroupItem>
            <ListGroupItem>PREFERED BRANCH: {branch}</ListGroupItem>
            <ListGroupItem> TEST DRIVE DATE :{date} </ListGroupItem>
            
            <ListGroupItem> <button className='btn btn-warning m-3'>Delete</button></ListGroupItem>
          
          </ListGroup>

         
        </Card>        
                       </div>
                       )
                        
                    })
               }
           </div>
        )
    }


    return (
        <div>
            <div className='mt-5 '>
                <img src={photoURL?photoURL:profile}   style={{height:'165px',width:'165px',borderRadius:"100%"}} alt="" />
                <h1>{displayName?displayName:email}</h1>
            </div>
            <button onClick={HandleOrders} className='btn btn-danger p-5 m-2'><h1>ALL MY ORDERS</h1></button>
            <button  onClick={HandleDate}  className='btn btn-danger p-5 m-2'><h1>ALL MY APPOINTMENT</h1></button>

            <div className='row' style={{display:`${displayOrder}`}}>
                 <ShowOrder/>
             </div>
            <div className='row' style={{display:`${displaytest}`}}>
                 <ShowTestDate/>
             </div>

            <div className='col-12'>
            <img src="https://i.ibb.co/8jVRFnw/art101.png" alt="art101" border="0" className='w-100'/>
            </div>
             

             
        </div>
    );
};

export default MyDashboard;