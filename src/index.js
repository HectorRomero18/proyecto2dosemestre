// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Crear from "./Pages/Crear"
import  Eliminar  from "./Pages/Eliminar"
import  Editar  from "./Pages/Editar"
import  Musica  from "./Pages/Musica"
import Tecnologias  from "./Pages/Tecnologias"
import Login  from "./Login/Register"
import Cine  from "./Pages/Cine"
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
        element: <Login/>
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
    },
    {
        path: '/tecnologias',
        element: <Tecnologias/>
    },
    {
        path: '/cine',
        element: <Cine/>
    },
    {
        path: '/app',
        element: <App/>
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
