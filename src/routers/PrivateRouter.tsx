import { Route, Routes } from "react-router-dom";
import Panel from "../components/pages/user-panel/Panel";
import { RoutersBase } from "../context/router/base";
import Login from "../components/pages/user-panel/Login";
import AuthCheck from "../context/router/Auth.check";



const PrivateRouter = () => {
    return (
        <>
            <Panel>
                <Routes>
                    {RoutersBase.PrivateRouter.map((e) => (
                        <Route path={e.path} element={<AuthCheck>{e.element}</AuthCheck>}/>
                    ))}
                </Routes>
            </Panel>

        
           
            
        </>
    )
}

export default PrivateRouter;