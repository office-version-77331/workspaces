import AddTodo from "@/components/AddTodo"
import TodoItem from "@/components/TodoItem"


const Page = () => {
  return (
    <main>
      <h1>Todo List</h1>
      <div>
        <AddTodo />
        <TodoItem /> 
      </div>
    </main>

  )
}

export default Page
