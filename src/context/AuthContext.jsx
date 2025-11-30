import { createContext, useContext, useState,  } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const login = (user) => {
        const token = `token-falso-${user}`
        localStorage.setItem("authToken", token)
        setUser(user)
    }

    const logout = () => {
        localStorage.removeItem("authToken")
        setUser(null)
    }

    return (

        <AuthContext.Provider value={{login, logout, user}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
