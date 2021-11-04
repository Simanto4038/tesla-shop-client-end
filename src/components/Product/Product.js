import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, stock, star } = props.product;

    return (
        <div className="product">
            <Card  >
               <Card.Img variant="top" src={img} className="product-img" style={{height:'50%',width:'75%',marginInline:'auto'}}  />
               <Card.Body>
                 <Card.Text>
                 <h6 className="product-name">{name}</h6>
                 </Card.Text>
               </Card.Body>
               <ListGroup className="list-group-flush">
                 <ListGroupItem className="d-flex justify-content-between"><div>Seller:{seller}</div>  <div className='text-danger'>Price:$ {price}</div></ListGroupItem>
                 <ListGroupItem>only {stock} left in stock - order soon</ListGroupItem>
                 <ListGroupItem>  <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating></ListGroupItem>
               </ListGroup>
               <Card.Body>
               <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn btn-outline-danger"
                ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
               </Card.Body>
               </Card>
            {/* <div>
                <img src={img}  alt="" />
            </div>
            <div>
              
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <br />
                
            </div> */}
        </div>
    );
};

export default Product;