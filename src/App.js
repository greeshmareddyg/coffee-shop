import React from "react";
import ReactDOM from"react-dom/client";
import Header from "./components/Header";
import AppContainer from "./components/AppContainer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";


const App = () => (
    <div className="main-app">
        <Header/>
        <Outlet/>

    </div>
)


const appRouter = createBrowserRouter ([
    {
        path: "/",
        element:  <App/>,
        children: [
            {
                path: "/",
                element: <AppContainer/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ],
        errorElement: <Error/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <Contact/>
    }

])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>)