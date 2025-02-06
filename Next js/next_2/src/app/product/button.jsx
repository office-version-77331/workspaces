'use client'
import React from 'react'

const Button = ({price}) => {
   
  return (
    <div>
      <button className='rounded-md px-3 py-2 bg-black '
    onClick={() => alert(price)}>Click me </button>
    </div>
  )
}

export default Button
