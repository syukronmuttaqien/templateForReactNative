// React Component
import React, { Component } from 'react';
import { View } from 'react-native';

// Project Component
import Footer from './Footer';
import AddTodo from './Containers/AddTodo';
import VisibleTodoList from './Containers/VisibleTodoList';

class Todo extends Component {
  static navigationOptions = {
    title: 'Todo',
  };

  render() {
    return (
      <View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </View>
    );
  }
}

export default Todo;
