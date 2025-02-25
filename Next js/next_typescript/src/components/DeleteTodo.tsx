import React from 'react'

const DeleteTodo = ({name}) => {

    const deleteHandler = () => {
        console.log('delete')
    }

  return (
    <div>
      <button onClick={deleteHandler}>{name}</button>
    </div>
  )
}

export default DeleteTodo
