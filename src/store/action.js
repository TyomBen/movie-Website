export const deleteCurrentList = (payload) => {
    return {
        type : 'DELETE',
        payload : payload
    }
}

export const valuePassword = (payload) => {
    return {
        type : 'SETPASSWORD'
    }
}

export const valueLogin = (payload) => {
    return {
       type  : 'SETLOGIN'
    }
}