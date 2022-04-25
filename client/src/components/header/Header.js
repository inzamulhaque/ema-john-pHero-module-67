import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <NavLink activeclassname="active" to="/shop">Shop</NavLink>
                <NavLink activeclassname="active" to="/orders">Orders</NavLink>
                <NavLink activeclassname="active" to="/inventory">Inventory</NavLink>
                <NavLink activeclassname="active" to="/about">About</NavLink>
                {
                    user ? <button onClick={handleSignOut}>Sign Out</button> :
                        <NavLink activeclassname="active" to="/signin">Sign In</NavLink>
                }
                {
                    user && <span style={{ color: "#fff" }}> {user.email} </span>
                }
            </div>
        </nav>
    );
};

export default Header;