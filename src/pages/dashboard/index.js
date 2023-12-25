import React, { PureComponent, useEffect } from "react";
import NavbarDasboard from "../../component/navbardashb";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import carReducers from "../../redux/reducers/carReducer";
import { GetListCar } from "../../redux/actions/carAction";
import './dash.css';
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
    const {carReducers} = useSelector(state=>state);
    const dispatch = useDispatch();

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
    })

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
                                    <p className="tjudul">Car</p>
                                    <p className="tjudul">Start Rent</p>
                                    <p className="tjudul">Finish Rent</p>
                                    <p className="tjudul">Price</p>
                                    <p className="tjudul">Category</p>
                                </div>
                                
                                    {
                                        !!carReducers.carsData.length ? carReducers.carsData.slice(0, 15).map((item, i) => {
                                            return (
                                                <div className="tabel-konten" key={i}>
                                                    <p className="kjudul">1</p>
                                                    <p className="kjudul">k</p>
                                                    <p className="kjudul">Car</p>
                                                    <p className="kjudul">Start Rent</p>
                                                    <p className="kjudul">Finish Rent</p>
                                                    <p className="kjudul">Price</p>
                                                    <p className="kjudul">Category</p>
                                                </div>
                                            )
                                        }) : null
                                    }  
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;