export const userReducer = (state, action) => {
    const { type } = action

    switch (type) {
        case 'LOGIN': {
            return {
                ...state,
                user: action.payload
            }
        }

        case 'LOGOUT': {
            return {
                ...state,
                user: null
            }
        }

        default:
            return state
    }
}
