"use client";
import TodoContext from '@/store/TodoContext';
import React, { FormEvent, useContext, useState } from 'react'

const AddTodo = () => {
  const { addTodoItems } = useContext(TodoContext);

  const [textVal, setTextVal] = useState('');
  const [dateVal, setDateVal] = useState('');



  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodoItems(textVal, dateVal);
    setDateVal('');
    setTextVal('');
  }

  return (

    <div className='flex flex-auto px-3 gap-5 py-2 '>
      <form onSubmit={handleSubmit}>
    <input className='flex-1 px-3 py-2 '
    type='text'
    value={textVal}
    onChange={(e) => setTextVal(e.target.value)}
    placeholder='Add todo here....'
    
    />
    <input className='flex-1 px-3 py-2 '
    type='date'
    value={dateVal}
    onChange={(e) => setDateVal(e.target.value)}
    placeholder='Add todo here....'
    
    />
    <button
    type='submit'
    className='bg-green-500 text-white px-3 py-2 rounded-md'>Add</button>
    </form>
</div>
  )
}

export default AddTodo
