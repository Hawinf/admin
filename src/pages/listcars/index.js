import React, { useEffect, useRef, useState } from "react";
import DialogBox from '../../assets/images/dialog-box.png';
import NavbarDasboard from "../../component/navbardashb";
import carReducers from "../../redux/reducers/carReducer";
import { GetAllCars } from "../../redux/actions/carAction";
import { GetSmallCar } from "../../redux/actions/carAction";
import { DeleteCar } from "../../redux/actions/carAction";
import './listcars.css';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ListCars = () => {
    const {carReducers} = useSelector(state=>state);
    const {id} = useParams();
    const [klikDelete, setKlik] = useState(false);
    const dispatch = useDispatch();
    const [category, setCategory] = useState('');
    const [cars, setCars] = useState();

    // const handleCategory = (e) => {
        
    // }
    const getCars = (e) => {
        setCategory(e.target.value)
        const token = localStorage.getItem('token');
        const configurasi = {
            headers: {
                access_token : token,
            },
        }
        axios
            .get(`https://api-car-rental.binaracademy.org/admin/v2/car?category=${category}`, configurasi)
            .then((res) => {
                // console.log(res.data.cars, 'ini res getCar')
                setCars(res.data.cars)
            })
            .catch((err) => console.log(err))
    }
    // useEffect(() => {
    //     getCars()
    // })

    // const getCars = () => {
    //     const token = localStorage.getItem('token');
    //     const configurasi = {
    //         headers: {
    //             access_token : token,
    //         },
    //     }
    //     dispatch(GetAllCars(configurasi))
    // }

    // useEffect(() => {
    //     getCars();
    // })

    const handleDelete = (id) => {
        dispatch(DeleteCar(id));
    }

    

    const keKllik = () => {
        setKlik(true);
    }
    const gaKlik = () => {
        setKlik(false);
    }


    return (
        <div className="wrapper-listcars">
            <NavbarDasboard />
            <div className="listcars-left">
                <h1 className="judul-listcars">List Car</h1>
                <Link to={"/add-new-car"} className="add-car">+ Add New Car</Link>
            </div>
            <div className="listcars-right">
                <button onClick={getCars} className="ctg-btn">All</button>
                <button onClick={getCars} value="small" className="ctg-btn">2 - 4 People</button>
                <button onClick={getCars} value="medium" className="ctg-btn">4 - 6 People</button>
                <button onClick={getCars} value="large" className="ctg-btn">6 - 8 People</button>
            </div>
            <div className="container">
                <div className="row">
                    {/* {!!carReducers.carsData.length ? carReducers.carsData.map((item, i) => {
                        return (
                            <div className="col-lg-4 col-md-6 kotak-gambar">
                                <div className="card pb-3">
                                    <div className="card-img">
                                        <img className="car-details" src={item.image} />
                                    </div>
                                    <div className="kartu-details">
                                        <p className="namamobil">{item.name}</p>
                                        <p className="hargamobil">Rp.{item.price}/Hari</p>
                                        <p className="category">{item.category}</p>
                                        <p className="category">Car ID : {item.id}</p>
                                        <p className="terupdate">{item.updatedAt.slice(0,10)}</p>
                                        <div className="btn-details">
                                            <button onClick={() => handleDelete(item.id)} className="tombol-delete">Delete</button>
                                            <a href={`/edit-car/${item.id}`} className="tombol-edit">Edit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                     }) : null
                    } */}
                    {/* awal */}
                        {!!cars ? cars.map((item, i) => {
                        return (
                            <div className="col-lg-4 col-md-6 kotak-gambar">
                                <div className="card pb-3">
                                    <div className="card-img">
                                        <img className="car-details" src={item.image} />
                                    </div>
                                    <div className="kartu-details">
                                        <p className="namamobil">{item.name}</p>
                                        <p className="hargamobil">Rp.{item.price}/Hari</p>
                                        <p className="category">{item.category}</p>
                                        <p className="category">Car ID : {item.id}</p>
                                        <p className="terupdate">{item.updatedAt.slice(0,10)}</p>
                                        <div className="btn-details">
                                            <button onClick={() => handleDelete(item.id)} className="tombol-delete">Delete</button>
                                            <a href={`/edit-car/${item.id}`} className="tombol-edit">Edit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                     }) : null
                    }
                    {/* akhir */}
                    
                </div>
            </div>
        </div>
    );
};

export default ListCars;

