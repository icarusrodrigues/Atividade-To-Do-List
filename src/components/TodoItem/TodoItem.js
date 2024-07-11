import './TodoItem.css';

function TodoItem ({titulo, descricao}) {
    return (
        <div className='Item'>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
        </div>
    );
};

export default TodoItem;