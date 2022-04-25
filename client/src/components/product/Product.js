import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, handleClick }) => {
    const { name, img, seller, price, ratings } = product;
    return (
        <div className='product'>
            <div className="cartHeader">
                <img src={img} alt="Product Image" />
                <p className='productName'> {name} </p>
                <p className='price'>Price: ${price}</p>
                <p className='footertext'>Manufacturer: {seller}</p>
                <p className='footertext'>Rating: {ratings} start</p>
            </div>
            <button className='cartBtn' onClick={() => { handleClick(product) }}>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;