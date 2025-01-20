import React from 'react'
import TodoButton from './TodoButton'

const TodoItems = ({ todoText, todoDate }) => {
    return (<>
        <div className='flex flex-auto gap-3 px-3'>
            <div>{todoText}</div>
            <div>{todoDate}</div>
        </div>
        
        <TodoButton buttonText='Delete' />
    </>
    )
}

export default TodoItems
