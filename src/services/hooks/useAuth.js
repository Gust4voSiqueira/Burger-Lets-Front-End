
import React, { createContext, useState, useContext } from "react";
import { api } from "../api";

import history from './history'

const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [ authenticated, setAuthenticated ] = useState(false)

    function login(login, password) {
        const data = {
            "login": login,
            "password": password
        }
        api.get("/User/validarSenha", data)
            .then(function (response) {
                if (response.data) {
                    setAuthenticated(true)
                }
            })
    }

    const store = {
        authenticated,
        login
    }

    return (
        <AuthContext.Provider value={store}>
            {children}
        </AuthContext.Provider>
    )

}

export function useAuth() {
    const context = useContext(AuthContext)

    const {
        authenticated,
        login
    } = context

    return {
        authenticated,
        login
    }
}