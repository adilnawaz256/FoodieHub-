import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { addItems } from "../utils/cartSlice"

const ImageUrl = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit'

const HandleStylebtn = {
  position: "relative",
  left: "14px",
  top: "-10px",
  color: '#61B247'

}
const RestaurantMenu = () => {
  const { id } = useParams()
  const [menu, setmenu] = useState(null)
  const [menuitem, setmenuitem] = useState(null)
  const [btnhandle,setbtnhandle] = useState(true) 
  const dispatch = useDispatch()
  useEffect(() => {
    getRestaurantMenu()
  }, [])
  async function getRestaurantMenu() {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}`)
    const json = await data.json()

    setmenu(json.data.cards[0].card.card.info)
    setmenuitem(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
  }

  if (!menu) return null
  const { name, avgRating, totalRatingsString, costForTwoMessage, feeDetails, cuisines
    , locality, nearestOutletNudge } = menu
  console.log(menuitem);
  // const { slaString, lastMileTravelString } = nearestOutletNudge?.nearestOutletInfo?.siblingOutlet?.sla
  console.log(totalRatingsString, avgRating);
 
  function handleItems(item){
    dispatch(addItems(item))
  }
  return (
    <>
      <div className=" mt-10 p-5">
        <div className="flex justify-around">
          <div className="">
            <h2 className="font-bold text-2xl">{name}</h2>
            <p className="font-light">{cuisines.join(', ')}</p>
            <p className="font-light">{locality},</p>
          </div>
          <button className="shadow-lg p-3 ">
            <span className="p-1" style={{ color: "#3C9B6C" }}>⭐</span>
            <span className="font-bold" style={{ color: "#3C9B6C" }}>{avgRating}</span>
            <hr />
            <span className="font-light text-sm ">{totalRatingsString}</span>
          </button>
        </div>
        <div className="ml-52">
          <ul className="mt-5 ">
            <li>{feeDetails.message}</li>
            <div className="flex mt-2">
              <li><span className="m-1"><i class="fa fa-circle-half-stroke"></i></span><span className="font-bold ml-1"></span></li>
              <li className=""><span className="ml-7"><i class="fa fa-money-bill"></i></span><span className="ml-2 font-bold">{costForTwoMessage}</span></li>
            </div>
          </ul>
        </div>
        <hr style={{ textAlign: "center" }} className="font-bold mt-2" />
        {
          Object.values(menuitem).map(ite => {
            return (
              <>
                <div className="flex justify-evenly mt-16 ">
                  <div className="">
                    <h3 className="font-bold text-lg">{ite.card.info.name}</h3>
                    <p className="font-light text-base">₹{ite.card.info.price}</p>
                  </div>
                  <div className="" style={{
                    position: "relative",
                    left: "22%",
                    top: "-27px"
                  }}>
                    <img className="w-32" src={`${ImageUrl}/${ite.card.info.imageId}`} alt="" />
                    <button className=" font-bold text-lg bg-white  text-center w-20 rounded-lg" style={HandleStylebtn} onClick={()=>handleItems(ite.card.info)}>{
                      btnhandle?<button>+</button>:<button>-</button>
          }</button>
                  </div>
                  <div>
                  </div>

                </div>
                <hr />
              </>
            )
          })
        }
        {/* <div className="flex justify-evenly mt-16 ">
          <div className="">
            <h3 className="font-bold text-lg">{menuitem[0].card.info.name}</h3>
            <p className="font-light text-base">₹129</p>
          </div>
          <div className="" style={{
            position: "relative",
            left: "22%",
            top: "-27px"
          }}>
            <img className="w-32" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/mwjxnsys86a5apetncxm" alt="" />
            <button className=" font-bold text-lg bg-white  text-center w-20 rounded-lg" style={HandleStylebtn}>Add</button>
          </div>
          <div>
          </div>
        </div> */}

      </div>
    </>
  )
}
export default RestaurantMenu