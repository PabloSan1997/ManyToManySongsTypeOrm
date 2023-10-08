import React from "react";
import {useRoutes, HashRouter, Navigate} from 'react-router-dom';
import { Home } from "./pages/Home";

export default function App() {
    const Rutes = () => useRoutes([
        {
            path:'/home',
            element:<Home/>
        },
        {
            path:'/',
            element:<Navigate to='/home'/>
        }
    ]);
    return (
        <HashRouter>
            <Rutes/>
        </HashRouter>
    );
}
