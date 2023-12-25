import React, { useState }  from "react";
import Dashboard from "../dashboard";
import carReducers from "../../redux/reducers/carReducer";
import { EditCarAction } from "../../redux/actions/carAction";
import DialogBox from '../../assets/images/dialog-box.png';
import '../addcar/addcar.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditCar = () => {
    const {carReducers} = useSelector(state=>state);
    
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userEmail = localStorage.getItem('user')
    const [update, setUpdate] = useState('');
    const [dibuat, setDibuat] = useState('');

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
    console.log(gambar, 'gmbar nih')

    const handleEdit = () => {
        const formData = new FormData();
            formData.append('name', nama);
            formData.append('category', kategory)
            formData.append('image', gambar);
            formData.append('price', harga);

            dispatch(EditCarAction(id, formData))
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
        const token = localStorage.getItem('token')
            const config = {
                headers: {
                    access_token : token
                }
        }
        axios
            .get(`https://api-car-rental.binaracademy.org/admin/car/${id}`, config)
            .then((res) => {
                console.log(res.data.createdAt, 'dibuat,')
                console.log(res.data.updatedAt, 'terupdate')
                setDibuat(res.data.createdAt);
                setUpdate(res.data.updatedAt)
            })
            .catch((err)=> console.log(err))
    })

    return (
        <div>
            <Dashboard />
            <div className="container">
                <div className="wrapper-add-car">
                    <h1 className="addcar-judul">Edit Car</h1>
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
                        <input onChange={handleGam} type="file" placeholder="Picture" />
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
                        <p className='input-title' className='input-title'>Created At : </p>
                        <p className="dibuat">{dibuat.slice(0, 10)}</p>
                    </div>
                    <div className='input-data'>
                        <p className='input-title' className='input-title'>Updated At : </p>
                        <p className="dibuat">{update.slice(0,10)}</p>
                    </div>
                    <div className='cancel-save'>
                        <a href='/list-cars' className='cancel-tombol'>
                            Cancel
                        </a>
                        <button onClick={handleEdit} className='save-tombol'>
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
                        <h5 className="judul-dialog">The car was edited successfully</h5>
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

export default EditCar;