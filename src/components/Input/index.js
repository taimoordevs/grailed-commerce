import React from 'react'

const Input = ({
    label,
    placeholder,
    defaultValue,
    name,
    type,
    className,
    Icon,
    onChange,
    checked
    

}) => {
    return (
        <div className=' relative  '>
            
            <label htmlFor="first_name" className=' block  text-sm font-medium  text-gray-900'>{label}</label>
            <input onChange={onChange} checked={checked} defaultValue={defaultValue} placeholder={placeholder} name={name} id={name} type={type} className={`  outline-none bg-lightGray  p-1.5 text-primary placeholder:text-primary   ${className}`} />
            <div className=' absolute right-1 top-1'>
                <i>{Icon}</i>
            </div>
            
        </div>
    )
}

export default Input