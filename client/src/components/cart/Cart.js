import React from 'react';
import './Cart.css';

const Cart = ({ cart, children }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        total += (product.price * product.quantity);
        shipping += product.shipping;
        quantity += product.quantity;
    }

    const tax = +((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            {/* <p>Selected Items: {cart.length}</p> */}
            <p>Total Items: {cart.length}</p>
            <p>Total Quantity: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: ${grandTotal}</p>
            {children}
        </div>
    );
};

export default Cart;