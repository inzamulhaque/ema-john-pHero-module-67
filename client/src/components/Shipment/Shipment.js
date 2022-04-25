import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);

    const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [myError, setMyError] = useState("");

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleAddresdBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhonedBlur = event => {
        setPhoneNumber(event.target.value);
    }

    const handleShipping = event => {
        event.preventDefault();
        const shipping = { name, email: user.email, address, phoneNumber };
        console.log(shipping);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Info</h2>
                <form onSubmit={handleShipping}>
                    <div className="input-group">
                        <label htmlFor="name">Name:</label>
                        <input onBlur={handleNameBlur} type="text" name="name" placeholder='Enter Your Name' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input value={user?.email} type="email" name="email" placeholder='Enter Your Email address' readOnly required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address:</label>
                        <input onBlur={handleAddresdBlur} type="text" name="address" placeholder='Enter Your Address' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <input onBlur={handlePhonedBlur} type="text" name="phone" placeholder='Enter Your Phone Number' required />
                    </div>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;