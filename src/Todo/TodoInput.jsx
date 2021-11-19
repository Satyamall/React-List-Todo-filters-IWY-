import { useState } from "react"
import style from "./Todo.module.css";

const TodoInput = ({onSubmit})=>{
    const [formState, setFormState]= useState({
        title: "",
        description: ""
    });
    
    const handleChange=(e)=>{
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit(formState);
    }
    return (
        <form onSubmit={handleSubmit} className={style.todoInput}>
            <div style={{padding: 4}}>
                <input type="text" 
                 placeholder="Title"
                 name="title"
                 value={formState.title}
                 onChange={handleChange}
                />
            </div>
            <div style={{padding: 4}}>
                <input type="text" 
                 placeholder="Description"
                 name="description"
                 value={formState.description}
                 onChange={handleChange}
                />
            </div>
            <div style={{padding: 4}}>
                <input type="submit" value="SUBMIT" className={style.submit}/>
            </div>
        </form>
    )
}

export default TodoInput;