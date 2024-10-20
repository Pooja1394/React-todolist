import React, { useState } from "react";
import TodoList from "./components/TodoList";
import './App.css';

const App = () => {
    const [todoItem, setTodoItem] = useState('');
    const [list, setList] = useState([]);

    const addTodoItem = () => {
        if (!todoItem.trim()) return; // Prevent adding empty items
        const newItem = { id: Date.now(), item: todoItem, isDone: false };
        setList(prevList => [...prevList, newItem]);
        setTodoItem('');
    };

    const toggleDone = (id) => {
        setList(prevList => prevList.map(todo => 
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        ));
    };

    const remove = (id) => {
        setList(prevList => prevList.filter(todo => todo.id !== id));
    };

    return (
        <>
            <h1>Todo List Application</h1>
            <input
                className="mr-10"
                value={todoItem}
                onChange={(e) => setTodoItem(e.target.value)}
                placeholder="Enter todo"
            />
            <button onClick={addTodoItem}>Add</button>
            <table style={{ marginTop: '10px' }}>
                <thead>
                    <tr>
                        <th>SR.</th>
                        <th>Todo Item</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list.length > 0 ? (
                        list.map((data, index) => (
                            <TodoList 
                                key={data.id} // Use unique id as key
                                data={data} 
                                index={index} 
                                done={() => toggleDone(data.id)} 
                                remove={remove} 
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" style={{ textAlign: 'center' }}>No Data is here</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default App;