import React, { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import { Link } from 'react-router-dom';
import './shop.css';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleAddToCart = (product) => {
        product.quantity += 1;
        const exists = cart.find(cartProduct => cartProduct.id === product.id);
        if (!exists) {
            setCart([...cart, product]);
        } else {
            const restProducts = cart.filter(cartProduct => cartProduct.id !== product.id);
            setCart([...restProducts, product]);
        }

        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product handleClick={handleAddToCart} product={product} key={product.id} />)
                }
            </div>
            <div className="cartContainer">
                <Cart cart={cart}>
                    <Link to={'/orders'}>
                        <button>Review Orders</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;