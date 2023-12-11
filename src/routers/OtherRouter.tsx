import {Routes, Route} from 'react-router-dom';
import { RoutersBase } from '../context/router/base';

const OtherRouter = () => {
    return (
        <>
            <Routes>
                {RoutersBase.OtherRoute.map((e) => (
                    <Route key={e.path} id={e.path} path={e.path} element={e.element}/>
                ))}
            </Routes>
        </>
    )
}

export default OtherRouter;