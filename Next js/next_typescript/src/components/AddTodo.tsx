"use client";
import React, { FormEvent, useState } from 'react'

const AddTodo = () => {
    const [todo, setTodo] = useState('');

 
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        
    }

  return (
    <div>
       <form onSubmit={handleSubmit}>
        <input type="text" 
         placeholder='Enter you Todo ......' 
         onChange={(e) => setTodo(e.target.value) } 
        />
        <button type='submit'>Add Todo</button>
       </form>
    </div>
  )
}

export default AddTodo
