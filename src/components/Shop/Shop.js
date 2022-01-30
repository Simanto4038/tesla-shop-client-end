import React, { useEffect, useRef, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb } from '../../utilities/fakedb';
import './Shop.css';
import useCart from '../../hooks/useCart';
import { Link, useHistory } from 'react-router-dom';
import Banner from './Banner';
import { Pagination } from 'react-bootstrap';
import Banner2 from './Banner2';


const Shop = () => {
    const [products, setProducts] = useState([]);

    const { cart, setCart } = useCart();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0)
    const history = useHistory();
    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);
    const size = 9;
    useEffect(() => {
        //const uri = `https://pacific-sierra-62926.herokuapp.com/productsOutput?page=${page}&&size=${size}`
        const uri = `https://pacific-sierra-62926.herokuapp.com/productsOutput`
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                console.log(products);

                //    const count = data.count;
                //    const pageNumber = Math.ceil(count / size)
                //    setPageCount(pageNumber)


            });
    }, [page]);

    const ulRef = useRef();
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.addEventListener('click', (event) => {
            event.stopPropagation();
            ulRef.current.style.display = 'flex';
           
        });
        document.addEventListener('click', (event) => {
            ulRef.current.style.display = 'none';
        });
    }, []);
   
    // const handleOption = (e)=>{
    //     e.target.display = "none"
    // }

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

    const handleLaptop = () => {
        const LaptopProducts = products.filter(product => product.category === 'laptop');
        setDisplayProducts(LaptopProducts);
    }
    const handleCamera = () => {
        const CameraProducts = products.filter(product => product.category === 'camera');
        setDisplayProducts(CameraProducts);
    }
    const handleCPhone = () => {
        const AndroidProducts = products.filter(product => product.category === 'android');
        setDisplayProducts(AndroidProducts);

    }
         
    const [options, setOptions] = useState([]);
    const handleSearchOption = (e)=>{
        const searchText = e.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        
        setOptions(matchedProducts) 
        setDisplayProducts([])

    }
    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }

    return (
        <>
            <div className="p-3 mb-5 search-container">
                <Banner />

            </div>

            <div className='row mt-4 mb-4 mx-auto g-3'>
                <div className="col-12 col-lg-4 col-md-4 p-4 ">
                    <h3>LAPTOP</h3>
                    <div className='optionbox'>
                        <img onClick={handleLaptop} src="https://i.ibb.co/tX3QDLm/woman-chooses-the-laptop.jpg" alt="woman-chooses-the-laptop" className='img-fluid option' />
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-4 p-4">
                    <h3>CAMERA</h3>
                    <div className="optionbox">
                        <img onClick={handleCamera} src="https://i.ibb.co/M1KHy8P/electronics102.jpg" alt="electronics102" className='img-fluid option' />
                    </div>

                </div>
                <div className="col-12 col-lg-4 col-md-4 p-4">
                    <h3>MOBILE PHONE</h3>
                    <div className="optionbox" >
                        <img onClick={handleCPhone} src="https://i.ibb.co/wr29sLQ/electronics104.jpg" alt="electronics104" className='img-fluid option' />
                    </div>
                </div>

            </div>
            <div className="w-100 mx-auto search-products-container ">
                <input
                    ref={inputRef}
                    id="search-bar"
                    type="text"
                    className="form-control"
                    onChange={handleSearchOption}
                    placeholder="Search Product"
                />

<ul id="results" className="list-group" ref={ulRef} >
        {options.map((product, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={(e) => {
                inputRef.current.value = product.name;
                const matchedProducts = products.filter(product => product.name.toLowerCase().includes(inputRef.current.value.toLowerCase()));

                setDisplayProducts(matchedProducts);

              }}
              className="list-group-item list-group-item-action"
            >
              {product.name}
            </button>
          );
        })}
      </ul>
   
       
            </div>
            <div className="container row gx-0 mx-auto">
                {/* <div className="col-12 col-lg-3 p-5 cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="btn btn-outline-danger">Review Your Order</button>
                        </Link>
                    </Cart>
                </div> */}
                <div className="col-12 col-lg-12 ">
                    <div className=" container pt-5 row g-2  g-lg-2 ">


                        {
                            displayProducts.map(product =>
                                <div className="col-12 col-md-4 col-lg-3" key={product.key} style={{ height: '450px', paddingTop: '5px' }}>


                                    <Product

                                        product={product}
                                        handleAddToCart={handleAddToCart}
                                    />
                                </div>)
                        }

                    </div>

                    {/* <div className="pagination w-75 mx-auto ">
                         <Pagination className='thisPageination'>
                         <Pagination.First onClick={()=>setPage(0)} />
                         <Pagination.Prev  onClick={()=>setPage((page !== 0)? (page-1):page)} />
                       
                         {
                            [...Array(pageCount).keys()].map(index =>   <Pagination.Item
                            className= {index === page ? "active":''}
                            key={index}
                            onClick={()=>setPage(index)}>{index}</Pagination.Item>)
                        }
                        
                        
                         <Pagination.Next  onClick={()=>setPage((page !== (pageCount-1))? (page+1): 0)}  />
                         <Pagination.Last  onClick={()=>setPage((pageCount-1))} />
                         </Pagination>
                       
                    </div>        */}
                </div>

            </div>
        </>
    );
};

export default Shop;