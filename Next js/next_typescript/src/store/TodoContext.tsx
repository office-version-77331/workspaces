"use client"; // Ensures this runs only on the client

import initialTodoItems from "@/data/initialTodoItems";
import { createContext, useReducer, ReactNode } from "react";

// Define Todo Item Type
type TodoItem = {
  id: string;
  todoText: string;
  todoDate: string;
};

// Define Action Types
type TodoAction =
  | { type: "ADD_ITEM"; payload: { todoText: string; todoDate: string } }
  | { type: "DELETE_ITEM"; payload: { todoId: string } };

// Define Context Type
type TodoContextType = {
  todoItems: TodoItem[];
  addTodoItems: (todoText: string, todoDate: string) => void;
  deleteTodoItem: (todoId: string) => void;
};

// Create Context with Default Value as Null
const TodoContext = createContext<TodoContextType>({
  todoItems: [],
  addTodoItems: () => {},
  deleteTodoItem: () => {},
});

const todoItemsReducer = (state: TodoItem[], action: TodoAction): TodoItem[] => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { id: action.payload.todoText, ...action.payload }];
    case "DELETE_ITEM":
      return state.filter((item) => item.id !== action.payload.todoId);
    default:
      return state;
  }
};

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todoItems, dispatch] = useReducer(todoItemsReducer, initialTodoItems);

    const addTodoItems = (todoText: string, todoDate: string) => {
        dispatch({
            type: "ADD_ITEM",
            payload: { todoText, todoDate }
        });
    };

  const deleteTodoItem = (todoId: string) => {
    dispatch({ 
        type: "DELETE_ITEM", 
        payload: { todoId } 
    });
  };

  return (
    <TodoContext.Provider value={{ todoItems, addTodoItems, deleteTodoItem }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
