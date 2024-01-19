import React, { useEffect, useState } from 'react'
import BrandCard from '../cards/BrandCard'
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from 'axios';
import { Base_url } from '../../utils/Base_url';
import { Link } from 'react-router-dom';
const PopularBrands = () => {

  const [designer,setDesigner] = useState([]);


  useEffect(()=>{
    axios
    .post(`${Base_url}/getAllBrands`)
    .then((res) => {
      console.log(res);

      setDesigner(res.data.brands, "all products");
    })
    .catch((error) => {});



  },[])
  return (
    <div className=' container  mx-auto  py-4 px-4'>
        <div className=' flex items-center justify-between'>
           <div>
           <h4 className=' text-black font-medium text-xl'>Popular Designers</h4>
           </div>
           <div>
            <Link to={'/designers'} className=' text-xs flex items-center gap-1 text-[#0000FF]   font-extrabold'> <span>SEE ALL </span> <FaLongArrowAltRight color='#0000FF' />  </Link>
           </div>
        </div>
        

        <div className='grid item1 col-span-2 py-3  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6  grid-cols-3 gap-5'>
          {designer?.map((item,index)=>{
            return (


              <>
                 <BrandCard  item={item} />  

              </>
            )
          })}
      
         
         
        </div>


    </div>
  )
}

export default PopularBrands