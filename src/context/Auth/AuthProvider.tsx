import { useEffect,  useState } from "react"
import { AuthContext, ILoginResponse } from "./AuthContexnt"
import { BaseApi } from "../BaseApi"


type AuthProviderType = {
  children: JSX.Element | JSX.Element[];
};

export const AuthProvider = ({children}:AuthProviderType) => {
    //Aplicar a logica aqui

   
    const [ Auth, setAuth] = useState<boolean | null>(null);
    const [Data,setData] = useState<ILoginResponse | null>(null);

    useEffect(() => {
      const checkUserAuth = async () => {
        
        try{
          const {data} = await BaseApi.get('user/authenticate-validate',{withCredentials:true});
          if(data.returnCode === 5){
            setAuth(true);
          }
          else{
            setAuth(false);
          }
        }
        catch(error:any){
          setAuth(false);
        }
      }

      checkUserAuth();
    }, []);
  
 
    const Login = async (payload:any) : Promise<ILoginResponse | null>=> {
      try{
        const {data} = await BaseApi.post('user/authenticate-user',payload);
        if(data.returnCode === 5 && data.token !== null ){
          setAuth(true);
          
        }
        else{
          setAuth(false);
        }

        return data ? data : null;
      }
      catch(error:any){
        setAuth(false);
        return error?.response?.data
      }
    }

    const Logout = () => {
      localStorage.removeItem('XToken-AuthGuard')

      setAuth(null);
      setData(null);
    };
  

    return (
        <AuthContext.Provider value={{Login,Auth,Data,Logout}}>
            {children}
        </AuthContext.Provider>
    )
}

