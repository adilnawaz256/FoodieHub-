import {  createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../pages/Title";
import City from "../pages/City";
import { HandleContext } from "../utils/HandleContext";
import {  useSelector } from "react-redux";
import store from "../utils/store";
const Navbar = () => {
    const [islogin , setlogin] = useState(true)
    const city = useContext(HandleContext)
    const [iscity , setcity] = useState(city)
    function HandleOnChange(e){
        const AllCity = Object.keys(city)
        const x = e.target.value
        AllCity.forEach(item=>{
            if(item===x){
                setcity(Object.values(city[item]))
            }
        })
        // how to send the data to the parent component

    }
   const cartItem  = useSelector(store => store.cart.items)
   console.log(cartItem);

    return (
        <>
            <nav className="flex justify-between items-center shadow-lg">
                <div className="flex">
                    <Title />
                    <div className="mt-7 ml-4">
                  
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2" onChange={HandleOnChange}>
                      <City/>
                </select>
          
                </div>
                </div>
                <ul className="flex m-3">
                    <li className="p-3 hover:text-indigo-400 hover:rounded"><Link to="/" className="font-medium">Home</Link></li>
                    <li className="p-3 hover:text-indigo-400 hover:rounded"><Link to="/about" className="font-medium">About</Link></li>
                    <li className="p-3 hover:text-indigo-400 hover:rounded"><Link to="/contact" className="font-medium">Contact</Link></li>
                    <li className="p-3 hover:text-indigo-400 hover:rounded">{cartItem.length}<i class="fa-solid fa-cart-shopping"></i></li>
                    <li className="p-3 hover:bg-indigo-400 hover:rounded-3xl">
                    {
                        islogin ?
                        <Link to="signin">                      
                        <button className="font-medium"
                        onClick={()=>{
                            setlogin(false)
                        }}>Login</button></Link>:<Link to=""><button className="font-medium" onClick={()=>{
                            setlogin(true)
                        }}>Logout</button></Link>
                    }
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;