import { createBrowserRouter, Outlet } from "react-router-dom"
import Navbar from "./component/Navbar"
import About from '../src/component/About'
import Footer from "./component/Footer"
import Contact from './component/Contact'
import Profile from "./pages/Profile"
import LoginPage from "./component/LoginPage"
import useOnline from "./utils/useonline"
import OfflineComponent from "./component/OfflineComponent"
import SearchBox from "./pages/SearchBox"

function App() {
    const isOnline = useOnline()
    return (!isOnline)?<OfflineComponent/>:(
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
            },
            {
                path:"/",
                element:<SearchBox/>
            }
        ],

    },
    {
        path:"/signin",
        element:<LoginPage/>
    }
])

export { approuter } 