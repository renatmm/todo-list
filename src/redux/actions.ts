import { ITodoItem } from '../types'

export const addTodo = (newItem: ITodoItem) => ({type: 'ADD_TODO', payload: newItem});
export const removeTodo = (id: string) => ({type: 'REMOVE_TODO', payload: id});
export const setInputValue = (newValue: string) => ({type: 'SET_INPUT', payload: newValue});
export const setToggle = (id: string) => ({type: 'TOGGLE', payload: id});
export const setTodoList = (newList: ITodoItem[]) => ({type: 'SET_TODO_LIST', payload: newList});
export const setCurrentTodo = (newCurrentTodo: ITodoItem) => ({type: 'SET_CURRENT_TODO', payload: newCurrentTodo});