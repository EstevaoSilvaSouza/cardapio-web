import {Routes, Route} from 'react-router-dom';
import Home from '../components/pages/Home';
import MainRouter from './MainRouter';

const OtherRouter = () => {
    return (
        <>
            <Routes>

                <Route path='/' element={<Home/>}/>
                <Route path='/cardapio/*' element={<MainRouter/>}/>
            </Routes>
        </>
    )
}

export default OtherRouter;