import React from 'react';
import { View } from 'react-native';
import LoginForm from './src/components/LoginForm';

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LoginForm />
      </View>
    )
  }
}

export default App;