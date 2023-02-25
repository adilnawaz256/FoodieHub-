import { Link } from "react-router-dom";
import Title from "../pages/Title";


const Navbar = () => {
    return (
        <>
            {/* <div className="header flex "> */}
            <nav className="flex justify-between items-center shadow-lg">
                <div className="">
                    <Title />
                </div>
                <ul className="flex m-3">
                    <li className="p-3"><Link to="/" className="font-medium">Home</Link></li>
                    <li className="p-3"><Link to="/about" className="font-medium">About</Link></li>
                    <li className="p-3"><Link to="/contact" className="font-medium">Contact</Link></li>
                    <li className="p-3"><i class="fa-solid fa-cart-shopping"></i></li>
                    <li className="p-3"><button className="font-medium">Login</button></li>
                </ul>
            </nav>

            {/* </div> */}
        </>
    )
}
export default Navbar;