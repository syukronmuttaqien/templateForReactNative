import { connect } from 'react-redux';
import { toggleTodo } from '~/Actions/exampleAction';
import TodoList from '../TodoList';
import { VISIBILITY_FILTER } from '~/Actions/actionTypes';

const getVisibleTodos = (todos, filter) => {
  console.log({ todos, filter });
  switch (filter) {
    case VISIBILITY_FILTER.SHOW_ALL:
      return todos;
    case VISIBILITY_FILTER.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VISIBILITY_FILTER.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilters)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
