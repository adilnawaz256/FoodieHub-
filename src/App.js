import { createBrowserRouter, Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from '../src/components/About'
import Footer from "./components/Footer"
import Contact from './components/Contact'
import Profile from "./pages/Profile"
import LoginPage from "./components/LoginPage"
import useOnline from "./utils/useonline"
import OfflineComponent from "./components/OfflineComponent"
import Body from "./components/Body"
import RestaurantMenu from "./components/RestaurantMenu"

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
                    element:<Body/>
            },{
                path:"/restaurantmenu/:id",
                element:<RestaurantMenu/>
            }
        
        ],

    },
    {
        path:"/signin",
        element:<LoginPage/>
    }
])

export { approuter } 