import { useContext } from "react"
import CreateContext from "../utils/CreateContext"

const ImageCloundinaryURL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill"
const langitude =77.5945627
const latitude =12.971598
const API = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${langitude}&page_type=DESKTOP_WEB_LISTING`


export {ImageCloundinaryURL , API}