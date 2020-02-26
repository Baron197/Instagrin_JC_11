import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';

class Profile extends React.Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Header
                    leftComponent={{ 
                        text: this.props.user.username, 
                        style: { color: 'black', fontSize: 18, fontWeight: '700' } 
                    }}
                    leftContainerStyle={{ flex: 4 }}
                    rightComponent={{ 
                        icon: 'menu', 
                        color: 'black',
                        onPress: () => this.props.navigation.toggleDrawer()
                    }}
                    containerStyle={{
                        backgroundColor: '#fff',
                        justifyContent: 'space-around',
                        marginTop: Platform.OS === 'ios' ? 0 : - 25,
                        borderBottomWidth: 0.5
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center'
    }
})

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps)(Profile);