import { useReducer } from "react";
import { UserContext } from "./UserContext";
import { userReducer } from "./userReducer";
import axios from "axios";
import { getAuthorization } from 'passport-client'

const INITIAL_STATE = {
    user: null
}

export default function UserProvider({ children }) {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)

    const authUser = async (token) => {
        try {
            const authorization = await getAuthorization()
            
            const { data } = await axios.get('http://localhost/forum/public/api/user', {
                headers: {
                    ...authorization
                }
            })

            dispatch({ type: 'LOGIN', payload: data })
        } catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        dispatch({ type: 'LOGOUT' })
    }

    return (
        <UserContext.Provider
            value={{
                ...state,
                authUser,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
