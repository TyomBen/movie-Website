export const deleteCurrentList = (payload) => {
    return {
        type : 'DELETE',
        payload : payload
    }
}

export const valuePassword = (payload) => {
    return {
        type : 'SETPASSWORD',
        payload : payload
    }
}

export const valueLogin = (payload) => {
    return {
       type  : 'SETLOGIN',
       payload : payload
    }
}