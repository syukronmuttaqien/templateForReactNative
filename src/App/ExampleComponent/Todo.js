import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'native-base';

const Todo = ({ onClick, completed, text }) => (
  <Text onPress={onClick} style={{ marginTop: 8, textDecorationLine: completed ? 'line-through' : 'none' }}>{text}</Text>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
