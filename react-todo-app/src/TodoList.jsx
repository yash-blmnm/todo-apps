import React, { useContext } from 'react';
import { Checkbox, Typography } from 'antd';
import { TodoContext } from './App';

const { Text } = Typography;


const TodoList = () => {
    const {todos, updateTodos} = useContext(TodoContext)
    const onStatusChange = (index, status) => {
        const updatedTodos = [...todos.slice(0, index), {...todos[index], status: (status ? 1 : 0)}, ...todos.slice(index+1, todos.length)]
        updateTodos([...updatedTodos])
    }
    return (
        <div style={{display: 'flex',  flexDirection: 'column', margin: '0 20px 20px 0', padding: '20px',  minWidth: '49%', minHeight: '400px', border: '2px solid #dadada', background: ''}}>
            {todos.length ? 
            todos.map((todo, index) => 
                <Checkbox key={index} style={{ margin: '0 0 10px'}} checked={todo.status} onChange={(e) => onStatusChange(index, e.target.checked)}>
                    {/* <span style={{fontSize: '16px'}}>{todo.task}</span> */}
                    <Text style={{fontSize: '16px'}} {...(todo.status ? {disabled: true} : {strong: true})}>{todo.task}</Text>
                </Checkbox>
            )
            :
            <Text style={{fontSize: '16px'}} italic>Add a new task to your list</Text>}
        </div>
    )
};

export default TodoList;