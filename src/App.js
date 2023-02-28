import { createBrowserRouter, Outlet } from "react-router-dom"
import Navbar from "./component/Navbar"
import About from '../src/component/About'
import Footer from "./component/Footer"
import Contact from './component/Contact'
import Profile from "./pages/Profile"
import LoginPage from "./component/LoginPage"

function App() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

const approuter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "about",
                element: <About />,
                children:[
                    {
                        path:"profile",
                        element:<Profile/>
                    }
                ]
            },
            {
                path: "contact",
                element: <Contact />
            }
        ],

    },
    {
        path:"/signin",
        element:<LoginPage/>
    }
])

export { approuter } 