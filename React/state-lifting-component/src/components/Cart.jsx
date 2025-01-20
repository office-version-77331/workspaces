import React from 'react' // children  component 

const Cart = ({title, isActive, children, onShow}) => {
  return (
    <div className='bg-white px-3 py-2 ring-0 '>
      <h3>{title}</h3>
     {isActive ? ( children )  :  (<button className='bg-slate-50 px-3 py-2 rounded-md text-red-500' onClick={onShow}>Show</button> )} 
    </div>
  )
}

export default Cart
