
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/fakedb';
import FassionProduct from '../Product/FassionProducts';
import Product from '../Product/Product';
import Banner from './Banner';

const Fassion = () => {
    const [products,setProducts] = useState([]);
    
    const {cart, setCart} = useCart();
    // const [pageCount,setPageCount] = useState(0);
    // const [page ,setPage] = useState(0)
    const history = useHistory();
    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);

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

    const handleMensClothing = ()=>
    {    
        const MensProducts = products.filter(product=> product.category ==='Mensclothing');
        setDisplayProducts(MensProducts);
        console.log(displayProducts);
    }
    const  handleWoMensClothing = ()=>
    {    
        const WomensProducts = products.filter(product=> product.category ==='FemaleClothing');
        setDisplayProducts(WomensProducts);
    }
    const handleKidsClothing = ()=>
    {    
        const KidsProducts = products.filter(product=> product.category === 'KidsClothing');
        setDisplayProducts(KidsProducts);
       
    }

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }


    return (
        <div>
            <>
            <div className="p-3 mb-5 search-container">
                <Banner/>
                
            </div>

            <div className='row mt-4 mb-4 mx-auto g-3'>
                    <div className="col-12 col-lg-4 col-md-4 p-4 ">
                        <h3>MENS CLOTHING</h3>
                       <div className='optionbox'>
                       <img onClick={handleMensClothing} src="https://i.ibb.co/jr836WX/banner109.jpg" alt="woman-chooses-the-laptop" className='img-fluid option'/>
                       </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-4 p-4">
                    <h3>WOMENS CLOTHING</h3>
                    <div className="optionbox">
                    <img onClick={handleWoMensClothing} src="https://i.ibb.co/D9X3M5f/clothing-Option104.jpg" alt="electronics102" className='img-fluid option'/>
                    </div>
                        
                    </div>
                    <div className="col-12 col-lg-4 col-md-4 p-4">
                    <h3>KIDS CLOTHING</h3>
                        <div className="optionbox" >
                        <img onClick={handleKidsClothing} src="https://i.ibb.co/1TZ6hKD/clothing-Option107.jpg"  alt="electronics104" className='img-fluid option'/>
                        </div>
                    </div>

                </div>
            <div className="w-75 mx-auto search-products-container">
            <input  
                    
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Product"
             />
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
                            <div className="col-12 col-md-4 col-lg-3" key={product.key} style={{height:'450px',paddingTop:'5px'}}>

                            
                        <FassionProduct
                          
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
        </div>
    );
};

export default Fassion;