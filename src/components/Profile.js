import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Header, ListItem, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { API_URL } from '../helpers/apiurl';

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
                <ListItem
                    leftAvatar={{
                        source: { uri: `${API_URL}${this.props.user.profileimage}` },
                        size: 'large'
                    }}
                    title={this.props.user.displayname}
                    subtitle={`Instagrin ${this.props.user.role}`}
                    containerStyle={{
                        width: '100%'
                    }}
                />
                <View>
                    <Text>{this.props.user.bio}</Text>
                </View>
                <Button 
                    title="Edit Profile"
                    containerStyle={{ 
                        marginVertical: 15, 
                        marginHorizontal: 15, 
                        borderWidth: 0.5,
                        borderColor: 'gray',
                        width: '95%'
                    }}
                    buttonStyle={{ borderColor: 'gray' }}
                    titleStyle={{ color: 'black' }}
                    type='outline'
                    onPress={() => this.props.navigation.navigate('EditProfile')}
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