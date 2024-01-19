import React from 'react'
import { Link } from 'react-router-dom'
import { Base_url } from '../../utils/Base_url'

const CategoryCard = ({name,image,url}) => {
  return (
    <Link to={`${url}`} className=' text-center'>
       <img src={image} className=' w-full'  alt=''/>

       <h5  className=' font-semibold text-black  pt-3  text-base'>{name}</h5>
    </Link>
  )
}

export default CategoryCard