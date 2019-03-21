import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '~/Actions/exampleAction';
import {
  View, Text, Input, Button, H2, Item, Label
} from 'native-base';
import ES from 'react-native-extended-stylesheet';

const styles = ES.create({
  button: {
    width: '100%',
    backgroundColor: '$primary',
    marginTop: 8
  },
  spacer: {
    marginVertical: 8
  },
  textDanger: {
    color: 'red'
  }
});

const AddTodo = ({ dispatch }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const add = () => {
    if (input === '' || input === null) {
      setError(true);
      return;
    }

    dispatch(addTodo(input));
    setInput('');
  };

  const handleChange = (value) => {
    setInput(value);
    if (value === '') {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <View>
      <H2>Todo Examples</H2>
      <Text>Example Component</Text>
      <View style={styles.spacer} />
      <Item floatingLabel>
        <Label>Todo..</Label>
        <Input value={input} onChangeText={handleChange} />
      </Item>
      {error && <Text style={styles.textDanger}>This Field cannot be empty!</Text>}
      <Button style={styles.button} onPress={add}>
        <Text>Add Todo</Text>
      </Button>
    </View>
  );
};

export default connect()(AddTodo);
