import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class HomeScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title="Register"
          style={styles.register}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: '50%',
    height: '10%',
    marginBottom: 40,
  },
  login: {
    backgroundColor: 'green',
    width: '50%',
    marginBottom: 40,
    textAlign: 'center',
    padding: 20,
  },
  register: {
    backgroundColor: '#f4511e',
    width: '50%',
    marginBottom: 40,
    padding: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  }
});

export default HomeScreen;