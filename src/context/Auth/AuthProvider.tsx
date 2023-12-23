import { useState } from "react"
import { AuthContext, ILoginResponse } from "./AuthContexnt"
import { BaseApi } from "../BaseApi"

type AuthProviderType = {
    children:JSX.Element | JSX.Element[]
}

export const AuthProvider = ({children}:AuthProviderType) => {
    //Aplicar a logica aqui

    const [ Token, setToken] = useState<string | null>(null);
    const [ Auth, setAuth] = useState<boolean | null>(null);

    const Login = async (payload:any) : Promise<ILoginResponse | null>=> {
      console.log(payload);
      try{
        // finalizar aqui as validações e criar o validater token no backend!
        const {data} = await BaseApi.post('user/authenticate-user',payload);
        if(data.returnCode === 5 && data.token !== null ){
            setAuth(true);
            setToken(data.token);
            localStorage.setItem('XToken-AuthGuard',data.token);
        }

        return data ? data : null;
      }
      catch(error:any){
        localStorage.clear();
        return null
      }
      

    }

    return (
        <AuthContext.Provider value={{Token,Login,Auth}}>
            {children}
        </AuthContext.Provider>
    )
}