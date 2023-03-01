import { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../pages/Title";
const Navbar = () => {
    const [islogin , setlogin] = useState(true)
    return (
        <>
            <nav className="flex justify-between items-center shadow-lg">
                <div className="">
                    <Title />
                </div>
                <ul className="flex m-3">
                    <li className="p-3"><Link to="/" className="font-medium">Home</Link></li>
                    <li className="p-3"><Link to="/about" className="font-medium">About</Link></li>
                    <li className="p-3"><Link to="/contact" className="font-medium">Contact</Link></li>
                    <li className="p-3"><i class="fa-solid fa-cart-shopping"></i></li>
                    <li className="p-3">
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