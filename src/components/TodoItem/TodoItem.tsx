import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from '../../types'
import {setToggle} from '../../redux/actions'
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: {
    id: string;
    name: string;
    isTodoDone?: false;
  };
  onRemoveItem: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({todo, onRemoveItem}) => {
  // const todoList = useSelector((state: IRootState) => state.todoList);
  const dispath = useDispatch();

  const handleDelete = (id: string) => {
    onRemoveItem(id); 
  };

  const handleToggleDone = (id: string) => {
    dispath(setToggle(id))
  };

  return (
    <li key={todo.id} className={`${styles.todoItem} ${todo.isTodoDone ? styles.donned : ''}`}>
      <span className={styles.title}>{todo.name}</span>
      <div className={styles.btnsWrapper}>
        <button onClick={() => handleToggleDone(todo.id)} className={styles.doneBtn}>
          {todo.isTodoDone ? "UNDONE" : "DONE"}
        </button>
        <button onClick={() => handleDelete(todo.id)} className={styles.delBtn}>
          DELETE
        </button>
      </div>
    </li>
  );
};

export default TodoItem;