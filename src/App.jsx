import TodoList from "./Components/TodoList";
import { TodosContext } from "./Components/Contexts/todosContext";
import { v4 as uId } from 'uuid';
import { useState } from "react";


const initialTodos = [
     {
      id:uId(),
      title:"task 1",
      date:"5:15 PM",
      isCompleted:false
     },
     {
      id:uId(),
      title:"task 2",
      date:"5:15 PM",
      isCompleted:false
     },
     {
      id:uId(),
      title:"task 3",
      date:"5:15 PM",
      isCompleted:false
     },
]

export default function IconLabelButtons() {

  const [todos, setTodos]=useState(initialTodos)
  
  return (
    <div className="App" style={{display:"flex", justifyContent:"center",alignItems:"center", height:"100vh", overflow:"hidden"}}>
    
    <TodosContext.Provider value={{todos, setTodos}}>
    <TodoList/>
    </TodosContext.Provider>
    </div>
    
  );
}
