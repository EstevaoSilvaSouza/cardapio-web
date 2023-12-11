import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AuthCheck =  ({ children }:{children:JSX.Element}) => {
   
    let logado = false;
    const nav = useNavigate();
    useEffect(() => {
        if(!logado){
            nav('/painel/login');
        }
    },[logado,nav])

    return logado ? children : null;
};

export default AuthCheck;