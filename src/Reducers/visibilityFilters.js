import { VISIBILITY_FILTER, TODO } from '../Actions/actionTypes';

const { SET_VISIBILITY_FILTER } = TODO;

const visibilityFilter = (state = VISIBILITY_FILTER.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
