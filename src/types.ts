export interface IRootState {
    todoList: ITodoItem[];
    inputValue: string;
    currentTodo: ITodoItem;
}

export interface ITodoItem {
    id: string;
    name: string;
    isTodoDone?: boolean;
}


export type Action = 
| { type: 'ADD_TODO', payload: ITodoItem }
| { type: 'REMOVE_TODO', payload: string }
| { type: 'SET_INPUT', payload: string }
| { type: 'TOGGLE', payload: string}
| { type: 'SET_TODO_LIST', payload: ITodoItem[]}
| { type: 'SET_CURRENT_TODO', payload: ITodoItem}

