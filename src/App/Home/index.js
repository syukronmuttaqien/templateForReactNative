import React, { Component } from 'react';
import {
  Container, Text, Body, View, Icon, H1, Button
} from 'native-base';

import ES from 'react-native-extended-stylesheet';

const styles = ES.create({
  centerItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginTop: 16,
    backgroundColor: '$primary'
  }
});

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  onPressNavigate = () => {
    const { navigation } = this.props;
    navigation.navigate('Todo');
  };

  render() {
    return (
      <Container>
        <Body padder>
          <View style={styles.centerItem}>
            <H1>Welcome</H1>
            <Text>
                Welcome To Home Screen
            </Text>
            <Icon name="happy" />
            <Button onPress={this.onPressNavigate} style={styles.button}>
              <Text>Click Here To Navigate</Text>
            </Button>
          </View>
        </Body>
      </Container>
    );
  }
}

export default HomeScreen;
