import React, { useState } from "react";
import Menu from '../../assets/images/fi_menu.png';
import Group from '../../assets/images/Group2.png';
import Fitruck from '../../assets/images/fi_truck.png';
import Close from '../../assets/images/close.png';
import Vector from '../../assets/images/Vector.png';
import loginReducer from "../../redux/reducers/loginReducer";
import { logoutAction } from "../../redux/actions/loginAction";
import './navbarDasboard.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavbarDasboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {loginReducer} = useSelector(state=>state);
    const [sidebar, setSidebar] = useState(false);
    const [klikLogout, setKlikLogOut] = useState(false);
    const userEmail = localStorage.getItem('user')
    const inisialEmail = userEmail.slice(0,1).toLocaleUpperCase();


    const handleLogout = () => {
        dispatch(logoutAction());
        setTimeout(() => {
            navigate('/')
        }, 2000);
    }

    const handleSidebar = () => {
        setSidebar(true);
    }
    const handlecloseMenu = () => {
        setSidebar(false)
    }
    const handleKlickLogOut = () => {
        setKlikLogOut(!klikLogout);
    }

    return (
        <>
            <div className="navbar-dashboard">
                <div className="navdash-left">
                    <img onClick={handleSidebar} alt="menu" src={Menu} className="menu" />
                </div>
                <div className="navdash-right">
                    <input className="search" placeholder="search" />
                    <button className="tombol-searchnav">Search</button>
                    { klikLogout ? null: <p className="user-inisial">{inisialEmail}</p> }
                    
                    <div className="kotak-nav-user">
                        { klikLogout ? <button onClick={handleLogout} className="tombol-logout">Log out</button> : <p className="nav-user">{userEmail}</p>}
                        
                        <img onClick={handleKlickLogOut} className="nav-vector" src={Vector} alt="logout"  />
                    </div>
                </div>
            </div>
            {
                sidebar ?
                <div className="sidebar-menu">
                    <div className="top-sidebar">
                        <h1 className="judul-sidebar">Hawinf Rent Car</h1>
                        <img onClick={handlecloseMenu} className="close-menu" src={Close} alt="close-menu " />
                    </div>
                    <div className="first-sidebar">
                        <img src={Group} alt="sidebar" className="group" />
                        <a href="/dashboard" className="menu-sidebar">Dashboard</a>
                    </div>
                    <div className="second-sidebar">
                        <img src={Fitruck} alt="sidebar" className="group" />
                        <a href="/list-cars" className="menu-sidebar">List Car</a>
                    </div>
                </div> : null
            }
            
        </>
    );
};

export default NavbarDasboard;