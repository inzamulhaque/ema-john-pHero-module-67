import React from 'react';
import "./ReviewItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleRemoveProduct }) => {
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className='reviewItem'>
            <div className="">
                <img src={img} alt="product image" />
            </div>
            <div className="reviewItemdetailsContainer">
                <div className="reviewItemdetails">
                    <p className="productN" title={name}>
                        {name.length > 20 ? name.slice(0, 20) + "..." : name}
                    </p>
                    <p>Price: <span className='orangeColor'>${price}</span></p>
                    <p><small>Shipping: {shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="deleteContainer">
                    <button onClick={() => handleRemoveProduct(product)} className='deleteBtn'> <FontAwesomeIcon className='deleteIcon' icon={faTrashAlt} /> </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;