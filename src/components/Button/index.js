import React from 'react'

const  Button = ({
    type,
    label,
    disabled,
    className,
    onClick,
    Icons
}) => {
  return (
    <>
    <button onClick={onClick} type={type} className={`px-5  text-center  flex items-center justify-center   font-medium ${className}`} disabled={disabled}> {Icons} {label}</button>
    </>
    
  )
}

export default Button