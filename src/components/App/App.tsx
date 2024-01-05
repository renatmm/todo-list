import { v4 as uuidv4 } from 'uuid';
import TodoList from '../TodoList/TodoList';
import styles from './App.module.css'
import {addTodo, removeTodo, setInputValue} from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux';
import { IRootState, ITodoItem } from '../../types'

function App() {
  const inputValue = useSelector((state: IRootState) => state.inputValue);
  const todoList = useSelector((state: IRootState) => state.todoList);
  const dispatch = useDispatch();

  const addTodoItem = () => {
    if (inputValue) {
      const newItem: ITodoItem = {
        id: uuidv4(),
        name: inputValue,
        isTodoDone: false
      };
      dispatch(addTodo(newItem))
    }
    dispatch(setInputValue(''))
  };
  
  const removeTodoItem = (id: string) => {
    dispatch(removeTodo(id));
  };

  return (
      <div className={styles.wrapper}>
          <h1 className={styles.title}>Get Things Done!</h1>
          <input value={inputValue} onChange={(e) => dispatch(setInputValue(e.target.value))} placeholder='What is the task today?' className={styles.input} type="text"/>
          <button onClick={addTodoItem} className={styles.submitBtn}>Add task</button>
          {todoList.length > 0 && <TodoList todoList={todoList} onRemoveItem={removeTodoItem}/>}
      </div>
  );
}

export default App;