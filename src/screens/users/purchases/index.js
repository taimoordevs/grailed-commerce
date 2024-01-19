import React from 'react'
import { Link } from 'react-router-dom'

const Purchases = () => {
  return (
    <div> <h1 className="h2">Purchases</h1>
    <p className=" text-black font-semibold  text-xl font-semibold mt-8">
    You have no purchases.

   <p className=' text-sm mt-2'>Start  <Link to={''} className=' border-b'> shopping </Link> today! </p>
    </p></div>
  )
}

export default Purchases