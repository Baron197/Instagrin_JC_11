import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../components/Settings';
import TabNav from './TabNav';

const Drawer = createDrawerNavigator();

export default (props) => {
    return (
        <Drawer.Navigator initialRouteName="TabMenu">
            <Drawer.Screen name="TabMenu" component={TabNav} />
            <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
    )
}