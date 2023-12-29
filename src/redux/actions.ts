import { ITodoItem } from '../types'

export const addTodo = (newItem: ITodoItem) => ({type: 'ADD_TODO', payload: newItem});
export const removeTodo = (id: string) => ({type: 'REMOVE_TODO', payload: id});
export const setInputValue = (newValue: string) => ({type: 'SET_INPUT', payload: newValue});
export const setToggle = (id: string) => ({type: 'TOGGLE', payload: id});