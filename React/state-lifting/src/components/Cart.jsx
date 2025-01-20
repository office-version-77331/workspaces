import React from 'react' // children  component 

const Cart = ({setName, name}) => {
  return (
    <div>
      <input className='ring-1 bg-slate-200 ' placeholder='.........'  type="text"
      onChange={(e) => setName(e.target.value)} />
      <p>change inside the cart component:  {name}</p>
    </div>
  )
}

export default Cart
