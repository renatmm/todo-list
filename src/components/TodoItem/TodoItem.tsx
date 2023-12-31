import { useSelector, useDispatch } from 'react-redux';
import {setToggle, setTodoList, setCurrentTodo} from '../../redux/actions'
import styles from './TodoItem.module.css';
import { DragEvent, FC } from 'react';
import { IRootState, ITodoItem } from '../../types';

interface TodoItemProps {
  todo: {
    id: string;
    name: string;
    isTodoDone?: boolean;
  };
  onRemoveItem: (id: string) => void;
}

const TodoItem: FC<TodoItemProps> = ({todo, onRemoveItem}) => {
  const currentTodo = useSelector((state: IRootState) => state.currentTodo);
  const todoList = useSelector((state: IRootState) => state.todoList);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    onRemoveItem(id); 
  };

  const handleToggleDone = (id: string) => {
    dispatch(setToggle(id))
  };

  function dragStartHandler(e: DragEvent<HTMLLIElement>, todo:ITodoItem): void {
    dispatch(setCurrentTodo(todo))
  }

  function dragOverHandler(e: DragEvent<HTMLLIElement>): void {
    e.preventDefault();
    const target = e.target as HTMLLIElement;
    if(target.nodeName  === 'LI'){
      target.classList.add(styles.over);
    }
  }

  function dragLeaveHandler(e: DragEvent<HTMLLIElement>): void {
    const target = e.target as HTMLLIElement;
    if(target.nodeName  === 'LI'){
      target.classList.remove(styles.over);
    }
  }

  function dragEndHandler(e: DragEvent<HTMLLIElement>): void {
    const target = e.target as HTMLLIElement;
    if(target.nodeName  === 'LI'){
      target.classList.remove(styles.over); 
    }
  }

  function dragDropHandler(e: DragEvent<HTMLLIElement>, todo:ITodoItem): void {
    e.preventDefault()
    const target = e.target as HTMLLIElement;
    if(target.nodeName  === 'LI'){
      target.classList.remove(styles.over); 
    }
    const updatedList = todoList.map((item: ITodoItem) => {
      if (item.id === todo.id) {
        return currentTodo;
      } else if (item.id === currentTodo.id) {
        return todo;
      } else {
        return item;
      }
    });
    dispatch(setTodoList(updatedList));
  }

  return (
    <li
      key={todo.id}
      className={`${styles.todoItem} ${todo.isTodoDone ? styles.donned : ''}`}
      draggable={true}
      onDragStart={(e) => dragStartHandler(e, todo)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDrop={(e) => dragDropHandler(e, todo)}
    >
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