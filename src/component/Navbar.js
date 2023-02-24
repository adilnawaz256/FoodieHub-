import { Link } from "react-router-dom";
import Title from "../pages/Title";


const Navbar =()=>{
    return(
        <>
    <nav>
        <div className="">
        <Title/>
        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
        </>
    )
}
export default Navbar;