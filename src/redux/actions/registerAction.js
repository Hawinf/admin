import axios from "axios";

export const registerAction = (payload) => (dispatch) => {
    axios
        .post('https://api-car-rental.binaracademy.org/admin/auth/register', payload)
        .then((res) => {
            console.log(res)
            dispatch({
                type: 'REGISTER',
                payload: res.statusText,
            })
        })
        .catch((err) => console.log(err));
}