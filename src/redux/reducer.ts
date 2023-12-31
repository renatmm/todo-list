import { IRootState, Action, ITodoItem } from '../types';

const initialState: IRootState = {
  inputValue: '',
  todoList: [],
  currentTodo: {
    id: '',
    name: '',
    isTodoDone: false
  }
};

const reducer = (state = initialState, action: Action): IRootState => {
  const todoListFromLocalStorage = localStorage.getItem('todoList')
  state.todoList = todoListFromLocalStorage ? JSON.parse(todoListFromLocalStorage) : []
  switch (action.type) {
    case 'ADD_TODO':
      const resultAddingTodo = {
        ...state,
        todoList: [...state.todoList, action.payload]
      }
      localStorage.setItem('todoList', JSON.stringify(resultAddingTodo.todoList))
      return resultAddingTodo;


    case 'REMOVE_TODO':
      const resultRemovingTodo = {
        ...state,
        todoList: state.todoList.filter((item: ITodoItem) => item.id !== action.payload)
      }
      localStorage.setItem('todoList', JSON.stringify(resultRemovingTodo.todoList))
      return resultRemovingTodo;

    case 'SET_INPUT':
      return {
        ...state,
        inputValue: action.payload
      };

    case 'TOGGLE':
      const resultTogglingTodo = {
        ...state,
        todoList: state.todoList.map((item: ITodoItem) => {
          if (item.id === action.payload) {
            return {
              ...item,
              isTodoDone: !item.isTodoDone
            };
          }
          return item;
        })
      }
    localStorage.setItem('todoList', JSON.stringify(resultTogglingTodo.todoList))
    return resultTogglingTodo;

    case 'SET_TODO_LIST':
      const newTodoList = {
        ...state,
        todoList: action.payload
      };
    localStorage.setItem('todoList', JSON.stringify(newTodoList.todoList))
    return newTodoList;

    case 'SET_CURRENT_TODO':
      return {
        ...state,
        currentTodo: action.payload
      };

    default:
      return state;
  }
}

export default reducer;
