import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '%/Home';
import ExampleComponent from '%/ExampleComponent';

const $primary = '#2e7d32';

const AppNavigator = createStackNavigator(
  { // Screen here
    Home,
    Todo: ExampleComponent
  },
  { // Config here
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: $primary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);


// const primary = EStyleSheet.value('$primary');

export default createAppContainer(AppNavigator);
