import Home from "../../components/pages/Home";
import Store from "../../components/pages/store";
import StoreCart from "../../components/pages/storeCart";
import Panel from "../../components/pages/user-panel/Panel";
import MainRouter from "../../routers/MainRouter";


export const RoutersBase = {
    MainRouter:
    [
        {path:'loja/:NameStore',element:<Store/>},
        {path:'loja/checkout/:NameStore',element:<StoreCart/>},
    ],
    OtherRoute:
    [
        {path:'/',element:<Home/>},
        {path:'/cardapio/*',element:<MainRouter/>},
        {path:'/cardapio/administration',element:<Panel/>},

    ]
}