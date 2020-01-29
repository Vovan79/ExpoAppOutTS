import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ModalScreen from './screens/ModalScreen';

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const RootStack = createStackNavigator(
  {
    Main: {screen: MainStack},
    MyModal: {screen: ModalScreen} 
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },  
);

const AppContainer = createAppContainer(RootStack);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;