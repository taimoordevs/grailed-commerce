import React from 'react'
import { home } from '../../assets/images'
import Button from '../Button'

const ShopBanner = () => {
  return (
    <div className=' relative'>
        <img src={home} className=' h-96' alt='' />
        <div className='  absolute top-0 w-full h-full flex justify-center items-center'>
       <div className=' md:w-[70%] w-[90%] text-center'>
       <h1 className=" md:text-5xl text-4xl  font-semibold mb-14 text-white">
              The one-stop destination for buying, selling and exploring fashion.
            </h1>

            <Button label={'shop all'} className={ ' uppercase mx-auto text-white  py-2 w-40  bg-[#0000FF]'} />
       </div>
        </div>
    </div>
  )
}

export default ShopBanner