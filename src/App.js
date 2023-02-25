import { createBrowserRouter, Outlet } from "react-router-dom"
import Navbar from "./component/Navbar"
import About from '../src/component/About'
import Footer from "./component/Footer"
import Contact from './component/Contact'

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
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    }
])

export { approuter } 