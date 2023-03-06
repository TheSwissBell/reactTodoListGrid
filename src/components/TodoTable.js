import React from 'react';

function TodoTable(props) {
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
                    props.todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.description}</td>
                            <td>{todo.date}</td>
                            <td><button onClick={() => props.onDeleteTodo(index)}>Delete</button></td>
                        </tr>)
                }
            </tbody>
        </table>

    );
}

export default TodoTable;