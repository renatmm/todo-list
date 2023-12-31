import React from 'react';
import styles from './TodoList.module.css'
import TodoItem from '../TodoItem/TodoItem';

interface TodoListProps {
    todoList: {
        id: string;
        name: string;
    }[];
    onRemoveItem: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todoList, onRemoveItem }) => {
    return (
        <ul className={styles.todoList}>
            {todoList.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onRemoveItem={onRemoveItem}
                /> 
            ))}
        </ul>
    );
};

export default TodoList;
