import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Settings extends React.Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Text>Settings Page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Settings;