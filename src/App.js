import './App.css';
import taskImg from './image/task-svgrepo-com.svg';
import trashImg from './image/trash-slash-alt-svgrepo-com.svg';
import React, {useState} from 'react';

function App() {

    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState([]);


    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && inputValue.trim() !== '') {
            setTasks([...tasks, inputValue]);
            setInputValue('');
        }
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleTaskDelete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div className="App">
            <div className="input-field">
                <h1>TODO LIST</h1>
                <input placeholder="Input your task.." value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
            </div>
            <div className="tasks-field">
                {tasks.map((task, index) => (
                    <div className="task-card" key={index}>
                        <input className="checkbox" type="checkbox"/>
                        <p>{task}</p>
                        <img className="trash" src={trashImg} alt="delete-task"
                             onClick={() => handleTaskDelete(index)}/>
                    </div>
                ))}
                {tasks.length === 0 && (
                    <div>
                        <img src={taskImg} alt="default-task"/>
                        <h1>No tasks yet</h1>
                    </div>
                )}
            </div>
        </div>
    );
}


export default App;
