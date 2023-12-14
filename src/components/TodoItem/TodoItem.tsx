import React, { useState, useEffect } from 'react';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: {
    id: string;
    name: string;
  };
  onRemoveItem: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onRemoveItem }) => {
  const [isTodoItemDone, setIsTodoItemDone] = useState<boolean>(
    () => {
      const storedValue = localStorage.getItem(`todo_${todo.id}`);
      return storedValue ? JSON.parse(storedValue) : false;
    }
  );

  const handleDelete = (id: string) => {
    onRemoveItem(id); 
  };

  const handleToggleDone = () => {
    setIsTodoItemDone((prevDone) => {
      const newDone = !prevDone;
      localStorage.setItem(`todo_${todo.id}`, JSON.stringify(newDone));
      return newDone;
    });
  };

  useEffect(() => {
    localStorage.setItem(`todo_${todo.id}`, JSON.stringify(isTodoItemDone));
  }, [isTodoItemDone, todo.id]);

  return (
    <li key={todo.id} className={`${styles.todoItem} ${isTodoItemDone ? styles.donned : ''}`}>
      <span className={styles.title}>{todo.name}</span>
      <div className={styles.btnsWrapper}>
        <button onClick={handleToggleDone} className={styles.doneBtn}>
          {isTodoItemDone ? "UNDONE" : "DONE"}
        </button>
        <button onClick={() => handleDelete(todo.id)} className={styles.delBtn}>
          DELETE
        </button>
      </div>
    </li>
  );
};

export default TodoItem;