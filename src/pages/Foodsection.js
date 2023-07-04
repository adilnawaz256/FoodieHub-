import React, { useEffect, useState } from 'react'
import FoodsectionCard from './FoodsectionCard'
import ShimmerCricle from '../assets/shimmer/ShimmerCricle'
// const FoodSectiondata = [{
//     item:'Biryani',
//     imgURL:'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png'
// },
// {
//     item:"Pizza",
//     imgURL:'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png'
// },
// {
//     item:"Thali",
//     imgURL:'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png'
// },
// {
//     item:"Chicken",
//     imgURL:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
// },
// {
//     item:"Burger",
//     imgURL:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
// }
// ,
// {
//     item:"Rolls",
//     imgURL:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
// },
// {
//     item:"Rolls",
//     imgURL:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
// }
// ,
// {
//     item:"Rolls",
//     imgURL:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
// },
// {
//     item:"Rolls",
//     imgURL:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
// }
// ]
const Foodsection = () => {
    const [food , setfood ] = useState([])
    useEffect(()=>{
            GetFoodSection()
    },[])

async function GetFoodSection(){
    const data = await fetch('https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=28.7040592&lng=77.10249019999999')
    const json = await data.json()
    setfood(json.data.cards[1].card.card.imageGridCards.info)
    // console.log(json)
}
// console.log(food);
  return (
    <div className='h-72 mt-8 p-2 ' >
    <h1 className="text-3xl mt-4 p-3 ml-16 font-extralight">Inspiration for your first order</h1>
    <hr className="w-96 ml-20 "/>
    <div className='flex justify-center flex-row mt-2 ml-7'>
  {
    (food.length==0)?<ShimmerCricle/>:
        food.map((data)=>{
          return <FoodsectionCard data={data}/>
        })
  }
   
</div>
    </div>
  )
}

export default Foodsection