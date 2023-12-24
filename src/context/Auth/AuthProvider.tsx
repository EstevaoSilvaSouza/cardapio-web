import { useEffect, useMemo, useState } from "react"
import { AuthContext, ILoginResponse } from "./AuthContexnt"
import { BaseApi } from "../BaseApi"

type AuthProviderType = {
  children: JSX.Element | JSX.Element[];
};

export const AuthProvider = ({children}:AuthProviderType) => {
    //Aplicar a logica aqui

    const [ Token, setToken] = useState<string | null>(null);
    const [ Auth, setAuth] = useState<boolean | null>(null);
    const [Data,setData] = useState<ILoginResponse | null>(null);

    
    useEffect(() => {
      const validateToken = async () => {
        const storedToken = localStorage.getItem('XToken-AuthGuard');
        if (storedToken) {
          try {
            const { data } = await BaseApi.post(
              'user/authenticate-validate',
              {},
              { headers: { Authorization: `Bearer ${storedToken}` } }
            );
            if (data.data) {
              setAuth(true);
              setData(data);
              setToken(localStorage.getItem('XToken-AuthGuard'))
            } else {
              setAuth(false);
              setData(null);
              setToken(null);
              localStorage.removeItem('XToken-AuthGuard')
            }
          } catch (error) {
            setAuth(false);
            localStorage.removeItem('XToken-AuthGuard')
          }
        } else {
          setAuth(false);
          setData(null);
          setToken(null);
          localStorage.removeItem('XToken-AuthGuard')
        }
      };
  
      validateToken();
    }, []);
  
    const contextValue = useMemo(() : any => ({Token}),[Token]);


    const Login = async (payload:any) : Promise<ILoginResponse | null>=> {
      console.log(payload);
      try{
        const {data} = await BaseApi.post('user/authenticate-user',payload);
        if(data.returnCode === 5 && data.token !== null ){
            setAuth(true);
            setToken(data.token);
            setData(data);
            localStorage.setItem('XToken-AuthGuard',data.token);
        }

        return data ? data : null;
      }
      catch(error:any){
        localStorage.clear();
        return error?.response?.data
      }
    }

    const Logout = () => {
      localStorage.removeItem('XToken-AuthGuard')
      setToken(null);
      setAuth(null);
      setData(null);
    };
  

    return (
        <AuthContext.Provider value={{Token,Login,Auth,Data,Logout,contextValue}}>
            {children}
        </AuthContext.Provider>
    )
}

