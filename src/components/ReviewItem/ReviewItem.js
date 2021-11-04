import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, key, img } = props.product;
    const { handleRemove } = props;
    return (
        <div className="border border-2 m-2 p-4 d-flex">
              <div>
                <img src={img} style={{height:'125px'}}  alt="" />
             </div>
            <div>
                <h6 className="product-name" >{name}</h6>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => handleRemove(key)} className="btn btn-outline-danger">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;