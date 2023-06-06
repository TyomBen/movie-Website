const initialState = {
    password : ''
}
export const passwordReduce = (state = initialState, action) => {
    switch (action.type) {
        case 'SETPASSWORD':
            return {
                password : action.payload
            }
            default: return state;
    }
}