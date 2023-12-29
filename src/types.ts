export interface IRootState {
    todoList: ITodoItem[];
    inputValue: string;
}

export interface ITodoItem {
    id: string;
    name: string;
    isTodoDone: boolean;
}

export type Action = 
| { type: 'ADD_TODO', payload: ITodoItem }
| { type: 'REMOVE_TODO', payload: string }
| { type: 'SET_INPUT', payload: string }
| { type: 'TOGGLE', payload: string};
  