import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './src/components/LoginForm';
import RegisterForm from './src/components/RegisterForm';

const Stack = createStackNavigator()

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Login"
          screenOptions={{ title: 'Ayo' }}
          headerMode="none"
        >
          <Stack.Screen name="Login" component={LoginForm} />
          <Stack.Screen 
            name="Register" 
            options={({ route }) => ({ title: route.params.ab })} 
            component={RegisterForm} 
            initialParams={{ ab: 'cuka' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;