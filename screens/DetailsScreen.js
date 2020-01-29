import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

class DetailsScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>My Details Screen</Text>
        <Text>
          itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
        </Text>
        <Text>
          otherParam: {JSON.stringify(navigation.getParam('otherParam', 'defaul value'))}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }
}

export default DetailsScreen;