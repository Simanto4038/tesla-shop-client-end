import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import './Inventory.css'

const Inventory = () => {
    const [products,setProducts] = useState([]);
    const [displayProducts,setDisplayProducts] = useState([]);


    useEffect(() => {
        fetch('https://pacific-sierra-62926.herokuapp.com/productsOutput')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setDisplayProducts(data.products);
            });
    }, []);
    //console.log(displayProducts);
    const handleSearch = event => {
        const searchText = event.target.value;
        //console.log(searchText);
        const matchedProducts = products.filter(product => product.key.toLowerCase().includes(searchText.toLowerCase()));
         //console.log(matchedProducts);
        setDisplayProducts(matchedProducts);
    }
    
    return (
        <div>
              <div className='text-center'><h2>Manage All Products</h2></div>

              <div className="w-75 mb-2 mx-auto search-products-container">
            <input  
                    
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Product By The Products Unique Key"
             />
            </div>
            {
                displayProducts.map(item =>{
                    return(
                            <InventoryProducts key={item._id} item={item}/>
                    )
                })
            }
        </div>
    );
};

const InventoryProducts = (props)=>
{
    const { img,price,key } = props.item;
    return(
        <div>
            <Card className='container mx-auto' style={{border:0,margin:"10px"}}>
               
                 <ListGroupItem className="d-flex flex-wrap w-100 border border-0 justify-content-between align-items-center">
                      <div><img src={img} style={{height:'75px',width:'75px'}} alt="Products" /> </div>
                      <div>ID :-  {key}</div>  
                      <div className='text-danger'>Price:$ {price}</div>
                      <div>
                      <button className="btn btn-outline-danger">U</button>
                      <button className="btn btn-outline-danger">D</button>
                      </div>
                 </ListGroupItem>
               
               </Card>
            
           
        </div>
    )
}

export default Inventory;