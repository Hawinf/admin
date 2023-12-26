import axios from "axios";

export const GetAllCars = (configurasi) => (dispatch) => {
    axios
        .get('https://api-car-rental.binaracademy.org/admin/v2/car?page=1&pageSize=10', configurasi)
        .then((res) => {
            dispatch({
                type: 'GETALLCARS',
                payload: res.data.cars,
            })
            
        })
        .catch((err) => console.log(err));
}

export const DeleteCar = (id) => (dispatch) => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            access_token: token
        }
    }

    axios 
        .delete(`https://api-car-rental.binaracademy.org/admin/car/${id}`, config)
        .then((res) => {
            console.log(res)
            dispatch({
                type: 'DELETECAR',
                payload: 'Delete success'
            })
        })
        .catch((err) => console.log(err))
}

export const AddNewCar = (formData) => dispatch => {
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            access_token : token
        }
    }
    axios
        .post('https://api-car-rental.binaracademy.org/admin/car',formData, config)
        .then((res) => {
            console.log(res)
            dispatch({
                type: 'ADDCAR',
                payload : res.statusText
            })
        })
        .catch((err) => console.log(err))
}

export const EditCarAction = (id, formData) => dispatch => {
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            access_token : token
        }
    }
    axios 
        .put(`https://api-car-rental.binaracademy.org/admin/car/${id}`,formData, config)
        .then((res) => {
            console.log(res)

            dispatch({
                type: 'EDITCAR',
                payload : res.statusText
            })
        })
        .catch((err) => console.log(err))
}

export const GetListCar = (configurasi) => (dispatch) => {
    axios 
        .get('https://api-car-rental.binaracademy.org/admin/order', configurasi)
        .then((res) => {
            console.log(res.data, 'ini res bos')
            dispatch({
                type: 'LISTORDER',
                payload : res.data,
            })
        })
        .catch((err) => console.log(err))
}



