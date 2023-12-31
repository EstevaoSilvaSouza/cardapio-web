import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContexnt";
import Login from "../../components/pages/account/Login";

const AuthCheck =  ({ children }:{children:JSX.Element | JSX.Element[]}) => {
    const { Auth} = useContext(AuthContext);
    
      if(!Auth){
        return <Login/>
      }
      else{
        return children;
      }
      /*
    useEffect(() => {
        if(!Auth){
            toastLoagin('Sem permissao','Usuario não autenticado!', 0,'warning')
            nav('/painel/login');
        }
    },[Auth,nav])

    return Auth ? children : null;
*/


  };

export default AuthCheck;