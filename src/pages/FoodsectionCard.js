import React from 'react'



const FoodsectionCard = (props) => {
    // console.log(props.data)
  return (
    <div className='mr-10  '>
           <div className=''>
                    <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${props.data.imageId}`} className='w-96 h-36  mt-2' alt=''/>     
        </div>
    </div>
  )
}

export default FoodsectionCard