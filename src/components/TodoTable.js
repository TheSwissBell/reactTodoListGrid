import React from 'react';

function TodoTable({ todos, handleDeleteTodo }) {
    return (
        <table>
             <thead>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                </thead>
            <tbody>
                {
                    todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.description}</td>
                            <td>{todo.date}</td>
                            <td><button onClick={() => handleDeleteTodo.handleDeleteTodo(index)}>Delete</button></td>
                        </tr>)
                }
            </tbody>
        </table>

    );
}

export default TodoTable;