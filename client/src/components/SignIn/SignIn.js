import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./SignIn.css";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user]);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign In</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Enter Your Email Address' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='Enter Your Password' required />
                    </div>
                    {
                        error && <p style={{ color: "red" }}>{error.message}</p>
                    }
                    {
                        loading && <p style={{ color: "blue" }}>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Sign In" />
                </form>
                <p>
                    New To Ema-John? <Link className='form-link' to={"/signup"}>Create An Account</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;