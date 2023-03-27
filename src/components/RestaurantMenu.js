import { useState , useEffect } from "react"
import { useParams } from "react-router-dom"
import { ImageCloundinaryURL } from "./constant"

const RestaurantMenu = ()=>{
    const {id}= useParams()
    const [menu , setmenu] = useState(null)
    useEffect(()=>{
        getRestaurantMenu()
    },[])
    async function getRestaurantMenu(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&submitAction=ENTER`)
        const json = await data.json()
   
        setmenu(json.data.cards[0].card.card.info)
    }
    if(!menu) return null
console.log(menu.cloudinaryImageId);
    return(
        <div>
           {
            Object.values(menu).map((item)=>{
                return(
                    console.log(item)
                )
            })
           }
           <img src={`${ImageCloundinaryURL}/${menu.cloudinaryImageId}`}/>
            <h1>{menu.name}</h1>
            <h1>{menu.city}</h1>
            <h1>Dynamic Routing</h1>
        </div>
    )
}
export default RestaurantMenu