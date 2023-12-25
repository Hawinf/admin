import { Action } from "@remix-run/router";

const initialState = {
    carsData : [],
    carData : {},
    message : '',
}

const carReducers = (state = initialState, Action) => {
    switch(Action.type) {
        case 'GETALLCARS':
            return {
                ...initialState,
                carsData: Action.payload,
            }
        case 'DELETECAR':
            return {
                ...initialState,
                message: Action.payload,
            }
        case 'ADDCAR':
            return {
                ...initialState,
                message: Action.payload,
            }
        case 'EDITCAR':
            return {
                ...initialState,
                message: Action.payload,
            }
        case 'LISTORDER':
            return {
                ...initialState,
                carsData: Action.payload,
            }
        case 'SMALLCAR': 
            return {
                ...initialState,
                carsData: Action.payload,
            }
        default :
            return state;
    }
};

export default carReducers;

