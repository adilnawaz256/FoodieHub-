import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ImageCloundinaryURL } from "./constant"

const RestaurantMenu = () => {
  const { id } = useParams()
  const [menu, setmenu] = useState(null)
  useEffect(() => {
    getRestaurantMenu()
  }, [])
  async function getRestaurantMenu() {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&submitAction=ENTER`)
    const json = await data.json()

    setmenu(json.data.cards[0].card.card.info)
  }
  if (!menu) return null
  console.log(menu.cloudinaryImageId);
  return (
    <>
      <div class="RestaurantHeader_wrapper__2GTdS RestaurantHeader_marginBottom__1rbfK"><div class="RestaurantNameAddress_wrapper__24l_g"><div aria-hidden="true"><p class="RestaurantNameAddress_name__2IaTv">Kwality Walls Frozen Dessert and Ice Cream Shop</p><p class="RestaurantNameAddress_cuisines__mBHr2">Desserts, Ice Cream</p></div><div class="RestaurantNameAddress_areaWrapper__3HIxj" aria-label=""><p class="RestaurantNameAddress_area__2P9ib" aria-hidden="true">Khajpura</p><p class="RestaurantNameAddress_lastMile__26BNf" aria-hidden="true">7.6 km</p><div class="RestaurantOutletSelector_wrapper__1aoe4"><button class="RestaurantOutletSelector_address__5hzM4" aria-label="Selected outlet is Khajpura, 7.6 km away. Double tap to change outlet."><span class="RestaurantOutletSelector_outletIcon__3mmu9">▾</span></button></div></div></div><button class="RestaurantRatings_wrapper__2294i" data-testid="restaurant-ratings-header" aria-hidden="true"><span class="RestaurantRatings_avgRating__1TOWY" aria-hidden="true"><span class="icon-star"></span> <span>4.6</span> </span><span class="RestaurantRatings_totalRatings__3d6Zc" aria-hidden="true">1K+ ratings</span></button></div>
      <div className="container">
        <div className="flex basis-full h-60 justify-evenly items-center bg-blue-dark text-gray p-8">
          <img className="w-[254px] h-[165px] mob:w-[130px] mob:[81px]" src={menu?.ImageCloundinaryURL} alt={menu?.name} />
          <div className="flex flex-col basis-[540px] m-5 ">
            <h2 className="text-3xl max-w-[538px] font-semibold">{menu.name}</h2>
            <p className="overflow-hidden whitespace-nowrap text-[15px] max-w-[538px]">{menu.cuisines.join(", ")}</p>
            <div className="flex mt-5 justify-between items-center text-sm font-semibold pb-2.5 max-w-[342px] mob:text-xs mob:font-normal">
              <div className="flex items-center px-1 py-0 gap-1">
                {/* <AiFillStar /><span>{restaurant?.avgRating}</span> */}
              </div>
              <div>|</div>
              <div>{menu?.sla.slaString}</div>
              <div>|</div>
              <div>{menu?.costForTwoMsg}</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="mt-7 w-[848px]">
            <div className="p-5">
              <h3 className="font-bold text-lg">Recommended</h3>
              {/* <p className="mt-3.5 w-3/5 text-gray-desc text-sm">{Object.keys(restaurant?.menu?.items).length} ITEMS</p> */}
            </div>
            <div className="flex flex-col justify-evenly">
              {/* { Object.values(restaurant?.menu?.items).map( item => 
            <MenuItem  key={item.id} item={item} />
          )} */}
            </div>
          </div>
          <div className="cart-widget"></div>

        </div>
      </div>
    </>
  )
}
export default RestaurantMenu