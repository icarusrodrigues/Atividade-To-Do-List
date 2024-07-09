import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
    const [todoList, setTodoList] = useState([
        { titulo: "Tarefa 1", descricao: "Descrição 1" },
        { titulo: "Tarefa 2", descricao: "Descrição 2" }
    ]);

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    const handleChangeTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const handleChangeDescricao = (e) => {
        setDescricao(e.target.value)
    }

    const adicionarTarefa = () => {
        const novaTarefa = { titulo: titulo, descricao: descricao };
        todoList.push(novaTarefa)
        setTodoList(todoList);
        setTitulo("");
        setDescricao("");
    }

    return (
        <div>
            <h3>Adicionar Tarefa</h3>
            <label htmlFor="titulo">Titulo</label>
            <input type="text" id="titulo" value={titulo} onChange={handleChangeTitulo} />
            <label htmlFor="descricao">Descrição</label>
            <textarea id="descricao" value={descricao} onChange={handleChangeDescricao} />
            <button onClick={adicionarTarefa}>Enviar</button>            
            
            <ul>
                {todoList.map((item) => {
                    console.log(todoList)
                    return (<li><TodoItem titulo={item.titulo} descricao={item.descricao} /></li>);
                })}
            </ul>
        </div>
    );
}

export default TodoList;