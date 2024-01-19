import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import axios from 'axios';
import { Base_url } from '../../utils/Base_url';

const ButtonNav = () => {

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
    <div className='  hidden md:block'>
      <div className='h-12 border-b flex items-center '>

      
      <div className='container mx-auto   px-6'>
      <ul className=' flex items-center relative justify-between'>
              <li className='group  '>
                  <Link className=' text-xs  font-bold' to={''}>DESIGNERS</Link>

                  <div className='  w-[100%] bg-white absolute hidden group-hover:block  top-14 border z-50 p-8  h-[70vh]'>
                <div className=' flex gap-12'> 
                <div>
                  <h1 className=' text-xl  font-medium'>Designers A-Z</h1>
                </div>
                <div>
                  <ul className=' leading-9'>
                    {designer?.map((item,index)=>{
                      return (


                        <>
                          <li>
                      <Link to={`/designers_details/${item._id}`} className=' text-black  text-sm font-medium'>{item.name}</Link>
                    </li>
                        
                        </>
                      )
                    })}
                  
                  
                  </ul>
                </div>
                </div>
              </div>


              </li>


            


             

            {/* <li className='  flex gap-12'> */}
                {/* <Link className=' text-xs  font-bold' to={''}>MENSWEAR</Link> */}
                <NavLinks/>
            {/* </li> */}
            {/* <li>
                <Link className=' text-xs  font-bold' to={''}>WOMENSWEAR</Link>
            </li> */}
            <li>
                <Link className=' text-xs  font-bold' to={''}>SNEAKERS</Link>
            </li>
            <li>
                <Link className=' text-xs  font-bold' to={''}>STAFF PICKS</Link>
            </li>
            <li>
                <Link className=' text-xs  font-bold' to={''}>COLLECTIONS</Link>
            </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default ButtonNav