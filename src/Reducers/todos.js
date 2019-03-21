import { TODO } from '../Actions/actionTypes';

const INITIAL_STATE = [];
const { ADD_TODO, TOGGLE_TODO } = TODO;
const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.id, text: action.text, completed: false }];
    case TOGGLE_TODO:
      return state.map(todo => (
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)
      );
    default:
      return state;
  }
};

export default todos;
