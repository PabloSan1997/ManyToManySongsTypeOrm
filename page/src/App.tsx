import {useRoutes, HashRouter, Navigate} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Songs } from './pages/Songs';
import { Authors } from './pages/Authors';

export default function App() {
    const Rutes = () => useRoutes([
        {
            path:'/home',
            element:<Home/>
        },
        {
            path:'/',
            element:<Navigate to='/home'/>
        },
        {
            path:'/songs/:id',
            element:<Songs/>
        },
        {
            path:'/authors/:id',
            element:<Authors/>
        }
    ]);
    return (
        <HashRouter>
            <Rutes/>
        </HashRouter>
    );
}
