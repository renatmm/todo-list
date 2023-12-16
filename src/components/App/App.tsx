import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from '../TodoList/TodoList';
import styles from './App.module.css'

interface IItem {
  id: string;
  name: string;
}

function App() {
  const [inputValue, setInputValue] = useState<string>()
  const [todoList, setTodoList] = useState<IItem[]>([]);

  useEffect(() => {
    const savedTodoList = JSON.parse(localStorage.getItem('todoList') || '[]');
    setTodoList(savedTodoList);
  }, []);

  const addTodoItem = () => {
    if (inputValue) {
      const newItem: IItem = {
        id: uuidv4(),
        name: inputValue,
      };
      const newTodoList = [...todoList, newItem];
      setTodoList(newTodoList);
      localStorage.setItem('todoList', JSON.stringify(newTodoList));
    }
    setInputValue("");
  };

  const removeTodoItem = (id: string) => {
    const updatedTodoList = todoList.filter(item => item.id !== id);
    setTodoList(updatedTodoList);
    localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
  };

  return (
      <div className={styles.wrapper}>
          <h1 className={styles.title}>Get Things Done!</h1>
          <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='What is the task today?' className={styles.input} type="text"/>
          <button onClick={addTodoItem} className={styles.submitBtn}>Add task</button>
          {todoList.length > 0 && <TodoList todoList={todoList} onRemoveItem={removeTodoItem}/>}
      </div>
  );
}

export default App;