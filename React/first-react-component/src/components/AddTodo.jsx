import React from 'react'

const AddTodo = () => {
  return (
    <div className=' m-1  px-3 flex  flex-row gap-2'>
      <input type="text" 
      placeholder='Enter Todo here........'
      className='ring rounded-md'
     />
     <input type="date" 
    />
     <button className='bg-green-500 text-white font-semibold py-2 px-4 rounded'>Add</button>
    </div>
  )
}

export default AddTodo
