import React, { useEffect, useState } from "react";
import LoginImage from '../../assets/images/loginimage.png';
import LoginLogo from '../../assets/images/Rectangle62.png';
import '../login/login.css';
import { useDispatch, useSelector } from "react-redux";
import registerReducer from "../../redux/reducers/registerReducer";
import { registerAction } from "../../redux/actions/registerAction";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const {registerReducer} = useSelector(state => state);
    console.log(registerReducer, 'ini rgis reducer')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [em, setEm] = useState('');
    const [pass, setPass] = useState('');

    const handleEm = (e) => {
        setEm(e.target.value);
    }
    const handlePass = (e) => {
        setPass(e.target.value)
    }

    const handleRegister = () => {
        const payload = {
            email : em,
            password: pass,
            role: 'Admin',
        }
        dispatch(registerAction(payload))
    }

    const handleRedirect = () => {
        setTimeout(() => {
            if(!!registerReducer.message.length) {
                navigate('/')
            }
        }, 2000);
    };

    useEffect(() => {
        handleRedirect();
    }, [registerReducer]);
    
    return (
        <div className='wrapper-login'>
            <div className='login-leftside'>
                <img className='loginimage' src={LoginImage}/>
            </div>
            <div className='login-rightside'>
                <img className='loginlogo' src={LoginLogo}/>
                <h1 className='judul-login'>Welcome, Admin BCR</h1>
                <p className='email-password'>Email</p>
                <input onChange={handleEm} className='input' placeholder='Example@gmail.com' />
                <p className='email-password'>Password</p>
                <input onChange={handlePass} className='input' placeholder='Password 6+ Character' />
                <button onClick={handleRegister} className='btn btn-primary tombol-login'>Register</button>
                <div className="mt-2">
                    <p>You have an account <a href="/" className="signin-up">Log In</a></p>
                </div>
            </div>
        </div>
        
    );
};

export default Register;