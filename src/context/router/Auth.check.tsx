import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Auth/AuthContexnt";

const AuthCheck =  ({ children }:{children:JSX.Element}) => {
   
    const {Auth} = useContext(AuthContext);
    const nav = useNavigate();

    useEffect(() => {
        if(!Auth){
            nav('/painel/login');
        }
    },[Auth,nav])

    return Auth ? children : null;
};

export default AuthCheck;