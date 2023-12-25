const initialState = {
    message: ''
}

const registerReducer = (state = initialState, Action) => {
    switch(Action.type) {
        case 'REGISTER':
            return {
                ...initialState,
                message: Action.payload,
            };
            default:
                return state;
    }
}

export default registerReducer;