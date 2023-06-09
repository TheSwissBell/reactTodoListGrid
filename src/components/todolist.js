import React, { useState, useRef } from 'react';
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
        { field: 'description', sortable: true, filter: true, floatingFilter: true },
        {
            field: 'priority', sortable: true,
            cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }
        },
        { field: 'date', sortable: true }
    ])

    const gridRef = useRef(); // It creates some reference object and save it to the variable gridRef

    const handleAddTodo = (event) => {
        event.preventDefault();
        setTodos([todo, ...todos]);
        setTodo({ description: '', date: '' });
    };

    const handleDeleteTodo = (event) => {
        event.preventDefault();
        if (gridRef.current.getSelectedNodes().length > 0) {
            setTodos(todos.filter((todo, index) => index != gridRef.current.getSelectedNodes()[0].id))
        }
        else {
            alert('Please, select a row you want to delete');
        }
    };

    return (
        <div>
            <h1>Grid TodoList</h1>
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
                <button onClick={handleDeleteTodo}>Delete selected</button>

            </form>

            <div className="ag-theme-material" style={{ height: 400, width: 600, margin: 'auto' }}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowSelection="single"
                    rowData={todos}
                    columnDefs={columnDefs}
                    animateRows={true}
                >
                </AgGridReact>
            </div>



        </div >
    )
}

// OR
//export default Todolist;