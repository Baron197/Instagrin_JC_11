import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Home extends React.Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Text>Home Page</Text>
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

export default Home;