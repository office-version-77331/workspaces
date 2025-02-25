import DeleteTodo from "./DeleteTodo"

interface TodoItemsProps {  // Add interface for TodoItemsProps
  todoText: string;
  todoDate: string;
}

const TodoItems = ({ todoText, todoDate }: TodoItemsProps) => {
  
  return (
    <div className='flex flex-auto gap-5 px-3 py-2'>
    <div className='flex-1 px-3 py-2 '>{todoText}</div>
    <div className='flex-1 px-3 py-2 '>{todoDate}</div>
    <div>
      <DeleteTodo  name='Delete'/> 
    </div>
  </div>
  )
}
export default TodoItems
