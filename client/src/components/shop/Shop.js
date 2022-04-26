import React, { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import { Link } from 'react-router-dom';
import './shop.css';

const Shop = () => {
    // const [products, setProducts] = useProducts();
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [page, size]);

    useEffect(() => {
        fetch("http://localhost:5000/productCount")
            .then(res => res.json())
            .then(data => {
                const pages = Math.ceil(data / 10);
                setPageCount(pages);
            });
    }, [])


    const handleAddToCart = (product) => {
        product.quantity += 1;
        const exists = cart.find(cartProduct => cartProduct._id === product._id);
        if (!exists) {
            setCart([...cart, product]);
        } else {
            const restProducts = cart.filter(cartProduct => cartProduct._id !== product._id);
            setCart([...restProducts, product]);
        }

        addToDb(product._id);
    }

    return (
        <>
            <div className='shop-container'>
                <div className="products-container">
                    {
                        products.map(product => <Product handleClick={handleAddToCart} product={product} key={product._id} />)
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
            <div className='pagination'>
                {
                    [...Array(pageCount).keys()].map(number => <button className={page === number && "selected"} onClick={() => setPage(number)} key={number}>{number + 1}</button>)
                }
                <select onChange={e => setSize(e.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="20">20</option>
                </select>
            </div>
        </>
    );
};

export default Shop;