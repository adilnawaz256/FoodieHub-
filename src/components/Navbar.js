import { useState } from "react";
import { Link } from "react-router-dom";
import City from "../pages/City";
import Title from "../pages/Title";
import cordinate from "../utils/Cordinate";
const Navbar = () => {
    const [islogin , setlogin] = useState(true)
    return (
        <>
            <nav className="flex justify-between items-center shadow-lg">
                <div className="flex">
                    <Title />
                    <div className="mt-7 ml-4">
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2">
                <City/>
                </select>
                </div>
                </div>
                <ul className="flex m-3">
                    <li className="p-3 hover:text-indigo-400 hover:rounded"><Link to="/" className="font-medium">Home</Link></li>
                    <li className="p-3 hover:text-indigo-400 hover:rounded"><Link to="/about" className="font-medium">About</Link></li>
                    <li className="p-3 hover:text-indigo-400 hover:rounded"><Link to="/contact" className="font-medium">Contact</Link></li>
                    <li className="p-3 hover:text-indigo-400 hover:rounded"><i class="fa-solid fa-cart-shopping"></i></li>
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