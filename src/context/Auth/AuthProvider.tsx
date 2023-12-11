import { useState } from "react"
import { AuthContext } from "./AuthContexnt"

type AuthProviderType = {
    children:JSX.Element | JSX.Element[]
}

export const AuthProvider = ({children}:AuthProviderType) => {
    //Aplicar a logica aqui

    const [ Token, setToken] = useState<string | null>(null);
    const [ Auth, setAuth] = useState<boolean | null>(null);

    const Login = (payload:any) => {
        setAuth(true)
        setToken("ok")
        return true;
    }

    return (
        <AuthContext.Provider value={{Token,Login,Auth}}>
            {children}
        </AuthContext.Provider>
    )
}