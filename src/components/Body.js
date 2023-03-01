import { useEffect, useState } from "react";
import RestaurantsCard from "../pages/RestaurantsCard";
import SearchBox from '../pages/SearchBox'
import ShimmerCardRestaurantCard from "./ShimmerRestaurantCard";
const Body = () => {
    const [restaurants, setrestaurants] = useState([])
    useEffect(() => {
        getRestaurant()
    }, [])
    async function getRestaurant() {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.1829024&lng=74.9267229&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json()
        setrestaurants(json?.data?.cards[2]?.data?.data?.cards)
        console.log(json.data.cards[2].data.data.cards)
    }
    return (
        <>
            <SearchBox />
            <div className="flex flex-wrap justify-center items-center hover:border-b-white">
            {
                (restaurants.length==0) ? <ShimmerCardRestaurantCard /> :
                            restaurants.map((item) => {
                                return (
                                    <RestaurantsCard {...item} />
                                )
                            })
            
            }
            </div>
        </>
    )
}
export default Body;