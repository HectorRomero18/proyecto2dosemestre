// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreatePost from "./components/CreatePost/CreatePost.jsx"
import PostList from "./components/PostList/PostList.jsx"
import TeachList from "./components/TeachList/TeachList.jsx"
import  Musica  from "./Pages/Musica"
import  Ciencia from "./Pages/Ciencia"
import Tecnologias  from "./Pages/Tecnologias"
import Deportes  from "./Pages/Deportes"
import Login  from "./Login/Register"
import Cine  from "./Pages/Cine"
import  "./translate/i18n"
import App from './App'; // Ruta al componente principal de tu aplicación

// Rutas que usara nuestra App de React
const routers = createBrowserRouter([
    {
        path: '/crear',
        element: <CreatePost/>
    },
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/eliminar',
        element: <PostList/>
    },
    {
        path: '/editar',
        element: <TeachList/>
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
        path: '/ciencia',
        element: <Ciencia/>
    },
    {
        path: '/deportes',
        element: <Deportes/>
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
