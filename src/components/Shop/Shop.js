import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb } from '../../utilities/fakedb';
import './Shop.css';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import Banner from './Banner';


const Shop = () => {
    const [products,setProducts] = useState([]);
    
    const {cart, setCart} = useCart(products);
    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);
     
    useEffect(() => {
        fetch('https://pacific-sierra-62926.herokuapp.com/productsOutput')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);



    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);

    }

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }

    return (
        <>
            <div className="p-3 mb-5 search-container">
                <Banner/>
                
            </div>
            <div className="w-75 mx-auto search-products-container">
            <input  
                    
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Product"
             />
            </div>
            <div className="container row gx-0 mx-auto shop-container">
            <div className="col-12 col-lg-3 p-5 cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="btn btn-outline-danger">Review Your Order</button>
                        </Link>
                    </Cart>
                </div>
                <div className="col-12 col-lg-9 ">
                    <div className=" container pt-5 row gx-0  g-lg-1 ">

                
                    {
                        displayProducts.map(product => 
                            <div className="col-6 col-md-6 col-lg-3 "
                             key={product.key}
                             style={{height:'600px',
                                    paddingTop:'5PX',
                                    
                                   }}>

                            
                        <Product 
                            
                            product={product}
                            handleAddToCart={handleAddToCart}
                        />
                        </div>)
                    }
                        </div>
                </div>
              
            </div>
        </>
    );
};

export default Shop;