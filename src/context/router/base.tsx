import Home from "../../components/pages/Home";
import Store from "../../components/pages/store/store";
import StoreCart from "../../components/pages/store/storeCart";
import CreateProduct from "../../components/pages/user-panel/CreateProduct";
import ListProduct from "../../components/pages/user-panel/ListProduct";
import Login from "../../components/pages/account/Login";
import MainRouter from "../../routers/MainRouter";
import PrivateRouter from "../../routers/PrivateRouter";
import AuthCheck from "./Auth.check";


export const RoutersBase = {
    MainRouter:
    [
        {path:'loja/:NameStore',element:<Store/>},
        {path:'loja/checkout/:NameStore',element:<StoreCart/>},
    ],
    PrivateRouter: 
    [
        {path:'/home',element:<><h1>Pagina Home</h1></>},
        {path:'/create_product',element:<CreateProduct/>},
        {path:'/list_product',element:<ListProduct/>},
        {path:'/painel',element:<ListProduct/>}
    ],
    OtherRoute:
    [
        {path:'/',element:<Home/>},
        {path:'/cardapio/*',element:<MainRouter/>},
        {path:'/painel/*',element:<AuthCheck><PrivateRouter/></AuthCheck>},
        {path:'/painel/login',element:<Login/>},
        {path:'/*',element:<><h1>Pagina não existe</h1></>},

    ],
    
}