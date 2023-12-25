import React, { useState } from "react";
import { useEffect } from "react";
import Dashboard from "../dashboard";
import carReducers from "../../redux/reducers/carReducer";
import { AddNewCar } from "../../redux/actions/carAction";
import DialogBox from '../../assets/images/dialog-box.png';
import './addcar.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
    const {carReducers} = useSelector(state=>state);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userEmail = localStorage.getItem('user')
    
    const [nama, setNama] = useState('');
    const [harga, setHarga] = useState('');
    const [kategory, setKategory] = useState('');
    const [gambar, setGambar] = useState(null);

    const handleNam = (e) => {
        setNama(e.target.value);  
    }
    const handleHarg = (e) => {
        setHarga(e.target.value);
    }
    const handleKate = (e) => {
        setKategory(e.target.value);
    }
    const handleGam = (e) => {
        setGambar(e.target.files[0]);
        
    }
    console.log(gambar, 'ini gambar')

    const handleAddCar = () => {
        const formData = new FormData();
            formData.append('name', nama);
            formData.append('category', kategory)
            formData.append('image', gambar);
            formData.append('price', harga);

            dispatch(AddNewCar(formData))
    }  

    const handleRedirect = () => {
        setTimeout(() => {
            if(carReducers.message.length) {
                navigate('/list-cars')
            }
        }, 4000);
    }

    useEffect(() => {
        handleRedirect();
    })

    return (
        <div>
            <Dashboard />
            <div className="container">
                <div className="wrapper-add-car">
                    <h1 className="addcar-judul">Add New Car</h1>
                    <div className='input-data'>
                        <p className='input-title'>Nama/Type Car</p>
                        <input onChange={handleNam} placeholder="Name Of The Car" />
                    </div>
                    <div className='input-data'>
                        <p className='input-title'>Price</p>
                        <input onChange={handleHarg} placeholder="Price" />
                    </div>
                    <div className='input-data'>
                        <p className='input-title'>Picture</p>
                        <input onChange={handleGam} type='file' placeholder="Picture" />
                    </div>
                    <div className='input-data'>
                        <p className='input-title' className='input-title'>Category</p>
                        <select onClick={handleKate} placeholder='Kategory'>
                            <option value='small'>
                                2 - 4 Orang
                            </option>
                            <option value='medium'>
                                4 - 6 Orang
                            </option>
                            <option value='large'>
                                6 - 8 Orang
                            </option>
                        </select>
                    </div>
                    <div className='input-data'>
                        <p className='input-title'>Created at</p>
                        <p>-</p>
                    </div>
                    <div className='input-data'>
                        <p className='input-title'>Updated at</p>
                        <p>-</p>
                    </div>
                    <div className='cancel-save'>
                        <a href='/list-cars' className='cancel-tombol'>
                            Cancel
                        </a>
                        <button onClick={handleAddCar} className='save-tombol'>
                            Save
                        </button>
                    </div>
                </div>
            </div>
            {/* awal */}
            { !!carReducers.message.length ?
            <div className="container" >
                <div className='dialog-aktif'>
                    <div className='dialog-box'>
                        <img src={DialogBox} alt="dialog-box" />
                        <h5 className="judul-dialog">The car was added successfully</h5>
                        <p>Thank you !! {userEmail}</p>
                    </div>
                </div> 
            </div>
            : null 
            } 
            {/* akhir */}
        </div>
    );
};

export default AddCar;