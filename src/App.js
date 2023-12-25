import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import ListCars from './pages/listcars';
import AddCar from './pages/addcar';
import EditCar from './pages/editcar';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} /> 
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/list-cars' element={<ListCars />} />
          <Route path='/add-new-car' element={<AddCar />} />
          <Route path='/edit-car/:id' element={<EditCar />} />
        </Routes>
    </div>
  );
};

export default App;
