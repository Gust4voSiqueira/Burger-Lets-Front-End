
import React, { createContext, useState, useContext } from "react";
import { api } from "../api";

import history from './history'

const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false)

    async function login(user, password) {
        await api.get(`/User/validarSenha?login=${user}&password=${password}`)
            .then(function (response) {
                if (response.data) {
                    setAuthenticated(true)
                    history.push("/PageAdmin")
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