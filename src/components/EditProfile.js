import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Header, Button, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { API_URL } from '../helpers/apiurl';

class EditProfile extends React.Component {
    render() {
        return (
            <View>
                <Header
                    placement="left"
                    leftComponent={{ 
                        icon: 'clear', 
                        color: 'black',
                        onPress: () => this.props.navigation.goBack() 
                    }}
                    centerComponent={{ 
                        text: 'Edit Profile', 
                        style: { color: 'black', fontSize: 18, fontWeight: '700' } 
                    }}
                    rightComponent={{ 
                        icon: 'done', 
                        color: '#4388d6'
                    }}
                    containerStyle={{
                        backgroundColor: '#fff',
                        justifyContent: 'space-around',
                        elevation: 2,
                        marginTop: Platform.OS === 'ios' ? 0 : - 25
                    }}
                />
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Image 
                        source={{ uri: `${API_URL}${this.props.user.profileimage}` }} 
                        style={{ width: 90, height: 90, borderRadius: 90}} 
                    />
                    <TouchableWithoutFeedback>
                        <Text style={{ color: '#4388d6', fontSize: 17, paddingTop: 10 }} >
                            Change Profile Photo
                        </Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ paddingTop: 15 }}>
                    <Text style={{ 
                        paddingLeft: 12,
                        opacity: 0.3
                    }}>
                        Name
                    </Text>
                    <Input
                        placeholder='Name'
                        value={this.props.user.displayname}
                    />
                </View>
                <View style={{ paddingTop: 15 }}>
                    <Text style={{ 
                        paddingLeft: 12,
                        opacity: 0.3
                    }}>
                        Username
                    </Text>
                    <Input
                        placeholder='Username'
                        value={this.props.user.username}
                    />
                </View>
                <View style={{ paddingTop: 15 }}>
                    <Text style={{ 
                        paddingLeft: 12,
                        opacity: 0.3
                    }}>
                        Bio
                    </Text>
                    <Input
                        placeholder='Bio'
                        value={this.props.user.bio}
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps)(EditProfile);