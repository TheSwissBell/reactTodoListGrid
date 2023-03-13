import React, { useState } from 'react';
// import { useState, useEffect } from 'react';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

export default function Todolist() {
    // OR if you import useState from react
    // const [description, setDescription] = useState('');


    const [todo, setTodo] = React.useState({
        description: '',
        priority: '',
        date: ''
    })

    const [todos, setTodos] = React.useState([]);


    // Grid
    const [columnDefs] = useState([  // We don't to update it so no need for setColumnDefs
        { field: 'description' },
        { field: 'priority' },
        { field: 'date' }
    ])

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
                <label>Priority</label>
                <input
                    type="text"
                    placeholder='Important'
                    value={todo.priority}
                    onChange={e => setTodo({ ...todo, priority: e.target.value })}
                />
                <label>Date</label>
                <input
                    type="date"
                    value={todo.date}
                    onChange={e => setTodo({ ...todo, date: e.target.value })}
                />
                <button onClick={handleAddTodo}>Add</button>
            </form>

            <div className="ag-theme-material" style={{ height: 400, width: 600 }}>
                <AgGridReact
                    rowData={todos}
                    columnDefs={columnDefs}>
                </AgGridReact>
            </div>



        </div>
    )
}

// OR
//export default Todolist;