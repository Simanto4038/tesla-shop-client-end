import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products] = useProducts();
    const {cart, setCart} = useCart(products);
    const history = useHistory();
       
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handlePlaceOrder = () => {
        // setCart([]);
        // clearTheCart();
        history.push('/placeorder');
    }

    return (
        <div className="container row">
            
            <div className="col-12 col-lg-9">
                {
                   cart.length? cart.map(product => <ReviewItem
                    key={product.key}
                    product={product}
                    handleRemove={handleRemove}
                ></ReviewItem>):<h2 className="text-center mt-4">"PLEASE ADD SOME PRODUCTS"</h2>
                }
            </div>
            <div className="col-12 col-lg-3 mt-2 ">
                <Cart cart={cart} >
                    <button onClick={handlePlaceOrder} className="btn btn-outline-danger">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;