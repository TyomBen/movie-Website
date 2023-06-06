const initialState = {
    login : ''
}
export const loginReduce = (state = initialState, action) => {
    switch (action.type){
        case 'SETLOGIN' :
            return {
                login : action.payload
            }
            default : return state
    }
}