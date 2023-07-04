import { useEffect, useState } from "react";
import RestaurantsCard from "../pages/RestaurantsCard";
import SearchBox from '../pages/SearchBox';
import ShimmerCardRestaurantCard from "../assets/shimmer/ShimmerRestaurantCard";
import { GET_RESTAURANTS_LIST } from "./constant";
import { Link } from "react-router-dom";
import Foodsection from "../pages/Foodsection";
import useFilter from "../utils/useFilter";
import ShimmerCricle from "../assets/shimmer/ShimmerCricle";

let count = 0
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setRestaurants([]); // Clear the previous restaurant data
    getRestaurant();
  }, [search, page]);

  async function getRestaurant() {
    const data = await fetch(GET_RESTAURANTS_LIST);
    const json = await data.json();
    setRestaurants((prev) => [...prev, ...json?.data?.cards[2]?.data?.data?.cards]);
  }

  const infiniteScrollHandle = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', infiniteScrollHandle);
    return () => {
      window.removeEventListener('scroll', infiniteScrollHandle);
    };
  }, []);

  const filteredRestaurants = useFilter(search, restaurants);

  return (
    <>
      <SearchBox
        restaurants={restaurants}
        setrestaurants={setRestaurants}
        setSearch={setSearch}
        search={search}
      />
     
      <Foodsection />
      <hr className="h-2 "/>
     
      <div className="flex justify-between">
      <h1 className="text-3xl mt-4 p-3 ml-16 font-semibold">{count} restaurants </h1>
      <h1 className="text-3xl mt-4 p-3 mr-4 font-semibold">Best Food in Delhi NCR</h1>
      </div>
      <hr className="h-2 "/>
      <div className="flex flex-wrap justify-center items-center hover:border-b-white">
        {restaurants.length === 0 ? (
          <ShimmerCardRestaurantCard />
        ) : (
          filteredRestaurants.map((item) => (
            count = count + 1,
            <Link to={`/restaurantmenu/${item.data.id}`} key={item.data.id}>
              <RestaurantsCard {...item} />
          
            </Link>
          ))
        )}
       
      </div>
    </>
  );
};

export default Body;
