import { useSelector } from "react-redux"
import store from "../utils/store"

const Cart = ()=>{
    const Cart = useSelector(store=> store.cart.items)
    console.log("Re Renders");
    return(
        <div>

            <h1>This is Cart {Cart.length}</h1>
        </div>
    )
}

export default Cart