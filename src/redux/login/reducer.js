const initialState = {
    logged: false
}


export const reducer = (state = initialState, { type }) => {
    switch (type) {
        case 'LOGIN':
            return { ...state, logged: true }
        case 'LOGOUT':
            return { ...state, logged: false }
        default: return { ...state }
    }
}