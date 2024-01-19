import React from 'react'

const PageNotFound = () => {
  return (
    <div>
        <h1 className='  text-3xl font-semibold text-center pt-4'>404 - Page Not Found</h1>

        <div className=' h-96 pt-4'>
        <img src={require('../../assets/images/notFound.webp')}  className=' w-full h-full object-contain' alt='' />
        </div>

       
    </div>
  )
}

export default PageNotFound