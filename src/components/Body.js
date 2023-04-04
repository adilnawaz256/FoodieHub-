import {  useContext, useEffect, useState } from "react";
import RestaurantsCard from "../pages/RestaurantsCard";
import SearchBox from '../pages/SearchBox'
import ShimmerCardRestaurantCard from "./ShimmerRestaurantCard";
import { API } from "./constant";
import { Link } from "react-router-dom";
import { HandleContext } from "../utils/HandleContext";
const Body = () => {
    const city = useContext(HandleContext)
    const {lat , lag} = city.Patna
    const [restaurants, setrestaurants] = useState([])
    useEffect(() => {
        getRestaurant()
    }, [])
    async function getRestaurant() {
        const data = await fetch( `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lag}&page_type=DESKTOP_WEB_LISTING`)
        const json = await data.json()
        setrestaurants(json?.data?.cards[2]?.data?.data?.cards)
        console.log(json.data.cards[2].data.data.cards)
    }
    return (
        <>
            <SearchBox  restaurants={restaurants} setrestaurants={setrestaurants}/>
            <div className="flex flex-wrap justify-center items-center hover:border-b-white">
                {
                    (restaurants.length === 0) ? <ShimmerCardRestaurantCard /> :
                        restaurants.map((item) => {
                            return (
                                <Link to={`/restaurantmenu/${item.data.id}`} key={item.data.id}>
                                    <RestaurantsCard {...item} key={item.data.id}/>
                                </Link>
                            )
                        })

                }
            </div>

        </>
    )
}
export default Body;