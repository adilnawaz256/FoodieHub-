import { createBrowserRouter, Outlet } from "react-router-dom"
import LoginPage from "./components/LoginPage"
import useOnline from "./utils/useonline"
import OfflineComponent from "./components/OfflineComponent"
import Body from "./components/Body"
import RestaurantMenu from "./components/RestaurantMenu"
import { lazy, Suspense } from "react"
import ShimmerCardRestaurantCard from "./components/ShimmerRestaurantCard"
import { Provider } from "react-redux"
import { store } from "./utils/store"
const Navbar = lazy(()=> import('./components/Navbar'))
const About = lazy(()=>  import('../src/components/About'))
const Footer = lazy(()=> import('./components/Footer'))
const Contact = lazy(()=> import('./components/Contact'))
const Profile = lazy(()=>import('./pages/Profile'))

function App() {
    const isOnline = useOnline()
  
    return (!isOnline)?<OfflineComponent/>:(
        <>
      {/* <Provider store={store}> */}
            <Navbar />
            <Outlet />
            <Footer />
            {/* </Provider> */}
           
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
                element: <Suspense fallback={<ShimmerCardRestaurantCard/>}>
                    <About />
                </Suspense>,
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