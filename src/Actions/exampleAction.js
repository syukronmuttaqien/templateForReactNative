/* eslint-disable no-plusplus */
import { TODO } from './actionTypes';

let nextTodoId = 0;

const addTodo = text => ({ type: TODO.ADD_TODO, id: nextTodoId++, text });
const toggleTodo = id => ({ type: TODO.TOGGLE_TODO, id });
const setVisibilityFilter = filter => ({ type: TODO.SET_VISIBILITY_FILTER, filter });


export { addTodo, toggleTodo, setVisibilityFilter };
