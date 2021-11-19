import style from "./Todo.module.css";

function TodoList({ data }) {
    return (
      <ul className={style.list}>
        {data.map((item) => (
          <li key={item.id} className={style.listData}>
            {item.title} - {item.description} - {item.status ?"PENDING" : "DONE"}
          </li>
        ))}
      </ul>
    );
  }
  
  export default TodoList;