import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigations/MainNavigation';

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
          <MainNavigation />
      </NavigationContainer>
    )
  }
}

export default App;