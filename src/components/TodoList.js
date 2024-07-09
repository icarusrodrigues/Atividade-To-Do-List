import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
    const [todoList, setTodoList] = useState([
        {titulo: "Tarefa 1", descricao: "Descrição 1"},
        {titulo: "Tarefa 2", descricao: "Descrição 3"}
    ]);

    return (
        <div>
            <ul>
                {todoList.map((item) => {
                   return (<li><TodoItem titulo={item.titulo} descricao={item.descricao}/></li>);
                })}
            </ul>
        </div>
    );
}

export default TodoList;