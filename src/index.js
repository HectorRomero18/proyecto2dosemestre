// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Crear from "./Pages/Crear"
import  Eliminar  from "./Pages/Eliminar"
import  Editar  from "./Pages/Editar"
import  Musica  from "./Pages/Musica"
import  "./translate/i18n"
import App from './App'; // Ruta al componente principal de tu aplicación

// Rutas que usara nuestra App de React
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
    },
    {
        path: '/musica',
        element: <Musica/>
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
