import React, { PureComponent, useEffect, useState } from "react";
import NavbarDasboard from "../../component/navbardashb";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import carReducers from "../../redux/reducers/carReducer";
import { GetListCar } from "../../redux/actions/carAction";
import './dash.css';
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
    const {carReducers} = useSelector(state=>state);
    const dispatch = useDispatch();
    const [satu, setSatu] = useState(false);

    const itemsPerPage = 15;
    const [currentPage, setCurrentPage] = useState(0);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = (currentPage + 1) * itemsPerPage;
    const handleClickNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1)

    }
    const handleClickPrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1)

    }
    const RenderPagination = () => {
        if (!carReducers.carsData.length) {
            return null
        }
    } 
    

    const getData = () => {
        const token = localStorage.getItem('token')
            const configurasi = {
                headers: {
                    access_token : token
                }
            }
        dispatch(GetListCar(configurasi))
    }

    useEffect(() => {
        getData();
    }, [])

    const data = [
        {name: 'January' , total: 110},
        {name: 'February', total: 210},
        {name: 'March', total: 250},
        {name: 'April', total: 143},
        {name: 'May' , total: 110},
        {name: 'June', total: 210},
        {name: 'July', total: 250},
        {name: 'August', total: 143},
        {name: 'September' , total: 110},
        {name: 'October', total: 210},
        {name: 'November', total: 250},
        {name: 'December', total: 143},
    ]
    return (
        <>
        <NavbarDasboard />
            <div className="wrapper-dashboard">
                <div className="container">
                        <h1 className="chart-judul">Rented Car Data Visualization</h1>
                        <div>
                        <BarChart 
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        <Bar dataKey="total" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                        </BarChart>
                        </div>
                        <div>
                            <h1 className="chart-judul">List Order</h1>
                            <div className="tabel">
                                <div className="tabel-judul">
                                    <p className="tjudul">No</p>
                                    <p className="tjudul">User Email</p>
                                    <p className="tjudul">Car ID</p>
                                    <p className="tjudul">Start Rent</p>
                                    <p className="tjudul">Finish Rent</p>
                                    <p className="tjudul">Price</p>
                                    <p className="tjudul">Updated At</p>
                                </div>
                                
                                    {
                                        !!carReducers.carsData.length ? carReducers.carsData.slice(startIndex, endIndex).map((item, i) => {
                                            let k = 1;
                                            for (let k = 1; k <=carReducers.carsData.length; k++) 
                                            return (
                                                <div className="tabel-konten" key={i}>
                                                    <p className="kjudul">{i + 1}</p>
                                                    <p className="kjudul">{item.User.email}</p>
                                                    <p className="kjudul">{item.CarId}</p>
                                                    <p className="kjudul">{item.start_rent_at.slice(0,10)}</p>
                                                    <p className="kjudul">{item.finish_rent_at.slice(0,10)}</p>
                                                    <p className="kjudul">Rp. {item.total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                                    <p className="kjudul">{item.updatedAt.slice(0,10)}</p>
                                                </div>
                                            )
                                        }) : null
                                    }  
                            </div>
                            <div className="next-prev">
                                {RenderPagination()}
                                <button className="next-prev-tmbol" onClick={handleClickPrevPage}>Previous</button>
                                <button className="next-prev-tmbol" onClick={handleClickNextPage}>Next</button>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;