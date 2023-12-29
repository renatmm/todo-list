import { IRootState, Action, ITodoItem } from '../types';

const initialState: IRootState = {
  inputValue: '',
  todoList: [],
};

const reducer = (state = initialState, action: Action): IRootState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      };

    case 'REMOVE_TODO':
      return {
        ...state,
        todoList: state.todoList.filter((item: ITodoItem) => item.id !== action.payload)
      };

    case 'SET_INPUT':
      return {
        ...state,
        inputValue: action.payload
      };

    case 'TOGGLE':
      return {
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
      };

    default:
      return state;
  }
}

export default reducer;
