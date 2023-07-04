import React from 'react'

const ShimmerCricle = () => {
  return (
 <>
 {
    Array(10).fill().map(()=>{
        return (
        <div className='m-1'>
             <div className="w-28 h-28 bg-gray-300 rounded-full animate-pulse"></div>   
        </div>    
        )
    })
 }
 </>
  )
}

export default ShimmerCricle