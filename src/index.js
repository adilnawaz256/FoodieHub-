import ReactDOM  from "react-dom";
import './index.css'
import { approuter } from "./App";
import { RouterProvider } from "react-router-dom";




const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={approuter}/>)