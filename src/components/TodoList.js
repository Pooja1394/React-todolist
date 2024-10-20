import React from "react";
const TodoList = ({ index, data, done, remove }) => {
    return (
        <tr>
            <td>{index + 1}.</td>
            <td style={{ backgroundColor: data.isDone ? 'Green' : 'white' }}>{data.item}</td>
            <td>
                <button 
                    className="mr-10" 
                    onClick={done} 
                    aria-label={data.isDone ? "Mark as not done" : "Mark as done"}
                >
                    {data.isDone ? "Not Done" : "Done"}
                </button>
                <button onClick={() => remove(data.id)} aria-label="Delete todo item">Delete</button>
            </td>
        </tr>
    );
};

export default TodoList;