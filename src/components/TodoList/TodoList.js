import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

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
        if (titulo.trim() !== "" && descricao.trim() !== "") {
            const novaTarefa = { titulo: titulo, descricao: descricao };
            todoList.push(novaTarefa)
            setTodoList(todoList);
            setTitulo("");
            setDescricao("");
        }
    }

    return (
        <div>
            <div className="Form">
                <h2>Adicionar Tarefa:</h2>

                <div className="FormInfo">
                    <div>
                        <div className="Title">
                            <label htmlFor="titulo">Titulo: </label>
                            <input type="text" id="titulo" value={titulo} onChange={handleChangeTitulo} />
                        </div>

                        <div className="Description">
                            <label htmlFor="descricao">Descrição: </label>
                            <textarea id="descricao" value={descricao} onChange={handleChangeDescricao} />
                        </div>
                    </div>
                    <button onClick={adicionarTarefa} id="submit-button"><p>Enviar</p></button>   
                </div>         
            </div>

            <ul className="List">
                {todoList.map((item) => {
                    console.log(todoList)
                    return (<li><TodoItem titulo={item.titulo} descricao={item.descricao} /></li>);
                })}
            </ul>
        </div>
    );
}

export default TodoList;