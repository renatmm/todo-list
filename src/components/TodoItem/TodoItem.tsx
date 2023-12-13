import React, { useState } from 'react';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: {
    id: string;
    name: string;
  };
  onRemoveItem: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onRemoveItem }) => {
  const [isTodoItemDone, setIsTodoItemDone] = useState<boolean>(false);

  const handleDelete = (id: string) => {
    onRemoveItem(id); 
  };

  return (
    <li key={todo.id} className={`${styles.todoItem} ${isTodoItemDone ? styles.todoItem_donned : ''}`}>
      <span className={styles.todoItem__title}>{todo.name}</span>
      <div className={styles.todoItem__btnWrapper}>
        <button onClick={() => setIsTodoItemDone(!isTodoItemDone)} className={styles.todoItem__doneBtn}>
          DONE
        </button>
        <button onClick={() => handleDelete(todo.id)} className={styles.todoItem__delBtn}>
          DELETE
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
