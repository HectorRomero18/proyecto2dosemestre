// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Crear from "./Pages/Crear"
import  Eliminar  from "./Pages/Eliminar"
import  Editar  from "./Pages/Editar"
import App from './App'; // Ruta al componente principal de tu aplicación
const routers = createBrowserRouter([
    {
        path: '/crear',
        element: <Crear/>
    },
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/eliminar',
        element: <Eliminar/>
    },
    {
        path: '/editar',
        element: <Editar/>
    }
])

// ReactDOM.render(<App />, document.getElementById('root'));
const root = createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <RouterProvider router={routers}></RouterProvider>
    </React.StrictMode>
)

// reportWebVitals();
