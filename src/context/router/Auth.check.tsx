import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContexnt";
import Login from "../../components/pages/user-panel/Login";

const AuthCheck =  ({ children }:{children:JSX.Element | JSX.Element[]}) => {
    const { contextValue} = useContext(AuthContext);

      if(!contextValue?.Token){
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