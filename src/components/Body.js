import {  useContext, useEffect, useState } from "react";
import RestaurantsCard from "../pages/RestaurantsCard";
import SearchBox from '../pages/SearchBox'
import ShimmerCardRestaurantCard from "./ShimmerRestaurantCard";
import { API } from "./constant";
import { Link } from "react-router-dom";
const Body = () => {
    const [restaurants, setrestaurants] = useState([])
    const [search , setSearch] = useState('')
    useEffect(() => {
        getRestaurant()
    }, [search])
    async function getRestaurant() {
        const data = await fetch( `${API}`)
        const json = await data.json()
        setrestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }
    return (
        <>
            <SearchBox  restaurants={restaurants} setrestaurants={setrestaurants} setSearch={setSearch} search={search}/>
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