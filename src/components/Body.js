import {  useEffect, useState } from "react";
import RestaurantsCard from "../pages/RestaurantsCard";
import SearchBox from '../pages/SearchBox'
import ShimmerCardRestaurantCard from "./ShimmerRestaurantCard";
import { API } from "./constant";
import { Link } from "react-router-dom";
const Body = () => {
    const [restaurants, setrestaurants] = useState([])
    useEffect(() => {
        getRestaurant()
    }, [])
    async function getRestaurant() {
        const data = await fetch(API)
        const json = await data.json()
        setrestaurants(json?.data?.cards[2]?.data?.data?.cards)
        console.log(json.data.cards[2].data.data.cards)
    }
    return (
        <>
            <SearchBox />
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