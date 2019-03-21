import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'native-base';
import ES from 'react-native-extended-stylesheet';

const styles = ES.create({
  button: {
    width: '100%',
    backgroundColor: '$primary',
    marginTop: 8
  }
});

const Link = ({ active, children, onClick }) => (
  <Button
    onPress={onClick}
    disabled={active}
    style={styles.button}
  >
    <Text>{children}</Text>
  </Button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
