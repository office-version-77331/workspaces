'use client'
import React from 'react'
import TodoContext from "@/store/TodoContext"
import { useContext } from "react"
import TodoItems from './TodoItems'

const TodoItem = () => {
    const { todoItems } = useContext(TodoContext)
  return (
      <>
          {
              todoItems.map((item) => (
                  <div key={item.id}>
                      <TodoItems todoText={item.todoText} todoDate={item.todoDate} />
                  </div>
              ))
          }
      </>
  )
}

export default TodoItem
