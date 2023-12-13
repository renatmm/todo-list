import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from '../TodoList/TodoList';
import styles from './App.module.css'

interface IItem {
  id: string;
  name: string;
}

function App() {
  const [isDataEmpty, setIsDataEmpty] = useState<boolean>(true)
  const [inputValue, setInputValue] = useState<string>()
  const [todoList, setTodoList] = useState<IItem[]>([]);

  const addTodoItem = () => {
    if (inputValue !== undefined) {
      const newItem: IItem = {
        id: uuidv4(),
        name: inputValue,
      };
      setTodoList([...todoList, newItem]);
    }
  };

  const removeTodoItem = (id: string) => {
    const updatedTodoList = todoList.filter(item => item.id !== id);
    setTodoList(updatedTodoList);
  };

  return (
      <div className={styles.todo}>
          <h1 className={styles.todo__title}>Get Things Done!</h1>
          <input onChange={(e) => setInputValue(e.target.value)} placeholder='What is the task today?' className={styles.todo__input} type="text"/>
          <button onClick={addTodoItem} className={styles.todo__btn}>Add task</button>
          {todoList.length > 0 ? <TodoList todoList={todoList} onRemoveItem={removeTodoItem}/> : null}
      </div>
  );
}

export default App;