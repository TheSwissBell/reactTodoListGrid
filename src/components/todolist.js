import React, { useState } from 'react';
import TodoTable from './TodoTable';
// import { useState, useEffect } from 'react';

export default function Todolist() {
    // OR if you import useState from react
    // const [description, setDescription] = useState('');


    const [todo, setTodo] = React.useState({
        description: '',
        date: ''
    })

    const [todos, setTodos] = React.useState([]);

    const handleAddTodo = (event) => {
        event.preventDefault();
        setTodos([todo, ...todos]);
        setTodo({ description: '', date: '' });
    };

    const handleDeleteTodo = (row) => {

        setTodos(todos.filter((todo, index) => index !== row)) // Return a new array filtered with our condition
    };

    return (
        <div>
            <h1>Simple TodoList</h1>
            <form title="Add todo">
                <label>Description</label>
                <input
                    type="text"
                    placeholder='Laundry'
                    value={todo.description}
                    onChange={e => setTodo({ ...todo, description: e.target.value })}
                />
                <label>Date</label>
                <input
                    type="date"
                    value={todo.date}
                    onChange={e => setTodo({ ...todo, date: e.target.value })}
                />
                <button onClick={handleAddTodo}>Add</button>
            </form>
            <TodoTable todos={todos} onDeleteTodo={handleDeleteTodo}></TodoTable>
     
        </div>
    )
}

// OR
//export default Todolist;