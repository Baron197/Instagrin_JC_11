import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Profile from '../components/Profile';

const Tab = createBottomTabNavigator();

export default (props) => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}
