import './App.css'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'

function App() {

  return (
    <> <center>
      <h1>TODO APP</h1>
      </center>
      <AddTodo />
      <TodoItems todoText='Buy Milk'  todoDate='4-01-2025'/> 



    </>
  )
}

export default App
