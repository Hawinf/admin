import React, { useEffect, useState } from "react";
import LoginImage from '../../assets/images/loginimage.png';
import LoginLogo from '../../assets/images/Rectangle62.png';
import loginReducer from "../../redux/reducers/loginReducer";
import './login.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../redux/actions/loginAction";


const Login = () => {

    const {loginReducer} = useSelector(state => state);
    console.log(loginReducer, 'ini reducer')
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEm = (e) => {
        setEmail(e.target.value)
    }
    const handlePas = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        const payload = {
            email: email,
            password: password,
        }
        dispatch(loginAction(payload));
    }

    const handleRedirect = () => {
        setTimeout(() => {
            if(loginReducer.message === true) {
                navigate('/dashboard')
            }
        }, 2000);
    }

    useEffect(() => {
        handleRedirect();
    }, [loginReducer.message])

    return (
        
        <div className='wrapper-login'>
            <div className='login-leftside'>
                <img className='loginimage' src={LoginImage}/>
            </div>
            <div className='login-rightside'>
                <img className='loginlogo' src={LoginLogo}/>
                <h1 className='judul-login'>Welcome Back, Admin BCR</h1>
                <p className='email-password'>Email</p>
                <input onChange={handleEm} className='input' placeholder='Example@gmail.com' />
                <p className='email-password'>Password</p>
                <input onChange={handlePas} className='input' placeholder='Password 6+ Character' />
                <button onClick={handleLogin} className='btn btn-primary tombol-login'>Log In</button>
                <div className="mt-2">
                    <p>You dant have an account <a href="/register" className="signin-up">Register</a></p>
                </div>
            </div>
        </div>
        
    );
};

export default Login;