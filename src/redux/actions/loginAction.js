import axios from "axios";

export const loginAction = (payload) => (dispatch) => {
    axios
        .post('https://api-car-rental.binaracademy.org/admin/auth/login', payload)
        .then((res) => {
            // console.log(res)
            localStorage.setItem('user' , res.data.email)
            localStorage.setItem('token', res.data.access_token)
            dispatch({
                type: 'LOGIN',
                payload: true,
            })
        })
        .catch((err) => console.log(err));
}

export const logoutAction = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch({
        type: 'LOGOUT',
        payload: false
    })
}