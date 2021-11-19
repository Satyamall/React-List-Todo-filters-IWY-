
import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import style from "./Todo.module.css";

const Todo=()=>{
    const [todos, setTodos]=useState([]);
    const [showCompleted, setShowCompleted]=useState(true);
    
    const handleSubmit = ({ title, description })=>{
        const payload={
            id: todos.length+1,
            title,
            description,
            status: true
        }
        setTodos([...todos,payload]);
    }

    return (
        <div className={style.todo}>
            <h1>React LIST Todo Filters</h1>
            <TodoInput onSubmit={handleSubmit}/>
            <TodoList data={todos.filter( item => showCompleted ? true: !item.status ).map(item=>item)}/>
            <div>
                <button onClick={() => setShowCompleted(!showCompleted)} className={style.button}>
                {showCompleted===true? "HIDE COMPLETED":"SHOW COMPLETED"}
               </button>
            </div>
        </div>
    )
}

export default Todo;