import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../components/Settings';
import TabNav from './TabNav';

const Drawer = createDrawerNavigator();

const SettingPage = (nav) => {
    return ({ navigation }) => <Settings navigation={navigation} rootStackNavigation={nav} />
}
export default ({ navigation }) => {
    return (
        <Drawer.Navigator initialRouteName="TabMenu">
            <Drawer.Screen name="TabMenu" component={TabNav} />
            <Drawer.Screen name="Settings">
                {SettingPage(navigation)}
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}