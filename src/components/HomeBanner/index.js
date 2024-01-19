import React from 'react'
import { home } from '../../assets/images'
import Button from '../Button'

const HomeBanner = () => {
  return (
    <div className="relative ">
        <img src={home} className=' w-full   h-[420px]'  alt='' />

        <div className=" absolute top-0 w-full h-full flex justify-center items-center">
        <div className="text-center">
          <div>
            <h1 className=" text-4xl font-semibold text-white">
              THE PLATFORM FOR PERSONAL STYLE
            </h1>
            <h3 className=" text-3xl text-white   font-normal  py-10">
              Buy, sell, discover authenticated pieces from the world's top
              brands.
            </h3>
            <div className=" flex gap-10 justify-center">
              <Button
                className={" uppercase font-bold text-white hover:bg-[#0000FF] hover:border-[#0000FF] border text-lg py-4"}
                label={"shop menswear"}
              />
              <Button
                className={" uppercase font-bold  text-white hover:bg-[#0000FF] hover:border-[#0000FF] border py-4 text-lg"}
                label={"shop womenswear"}
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default HomeBanner