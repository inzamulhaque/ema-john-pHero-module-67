import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./SignUp.css";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [myError, setMyError] = useState("");
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);

    const handleCreateUser = event => {
        event.preventDefault();

        if (password.length < 6) {
            setMyError("Your Password Must Be 6 Characters Or Longer");
            return;
        }

        if (password !== confirmPassword) {
            setMyError("Your Password And Confirm Password Did't Match");
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Enter Your Email Address' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='Enter Your Password' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirmPassword" placeholder='Confirm Your Password' required />
                    </div>
                    {
                        (myError || error) && <p style={{ color: "red" }}>{myError || error.message}</p>
                    }
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>
                    Already Have An Account? <Link className='form-link' to={"/signin"}>Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;