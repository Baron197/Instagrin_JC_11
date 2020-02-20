import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class RegisterForm extends Component {
    state = { 
        email: '', 
        username: '', 
        password: '', 
        conpassword: '', 
        hidePassword: true,
        hideConPassword: true
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Animatable.Text animation={'fadeInDown'} duration={2000}>
                    <Text h3>Welcome!</Text>
                </Animatable.Text>
                <View style={styles.inputContainerStyle}>
                    <Input
                        placeholder='Email'
                        leftIcon={
                            <Icon
                                name='email'
                                size={24}
                                color='black'
                            />
                        }
                        value={this.state.email}
                        onChangeText={(val) => this.setState({ email: val })}
                    />
                    <Input
                        placeholder='Username'
                        leftIcon={
                            <Icon
                                name='account-box'
                                size={24}
                                color='black'
                            />
                        }
                        value={this.state.username}
                        onChangeText={(val) => this.setState({ username: val })}
                    />
                    <Input
                        placeholder='Password'
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='black'
                            />
                        }
                        rightIcon={
                            <Icon
                                name={this.state.hidePassword ? 'visibility-off' : 'visibility' }
                                size={24}
                                color={this.state.hidePassword ? '#bfc3c9' : 'black' }
                                onPress={() => this.setState({ hidePassword: !this.state.hidePassword })}
                            />
                        }
                        value={this.state.password}
                        onChangeText={(val) => this.setState({ password: val })}
                        secureTextEntry={this.state.hidePassword}
                    />
                    <Input
                        placeholder='Confirm Password'
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='black'
                            />
                        }
                        rightIcon={
                            <Icon
                                name={this.state.hideConPassword ? 'visibility-off' : 'visibility' }
                                size={24}
                                color={this.state.hideConPassword ? '#bfc3c9' : 'black' }
                                onPress={() => this.setState({ hideConPassword: !this.state.hideConPassword })}
                            />
                        }
                        value={this.state.conpassword}
                        onChangeText={(val) => this.setState({ conpassword: val })}
                        secureTextEntry={this.state.hideConPassword}
                    />
                </View>
                <Button
                    title="Register"
                    containerStyle={{ width: '95%', marginBottom: 10 }}
                    buttonStyle={{ borderColor: 'black', borderWidth: 1 }}
                    titleStyle={{ color: 'black' }}
                    type="outline"
                />
                <Button
                    title="Back to Login"
                    containerStyle={{ width: '95%' }}
                    buttonStyle={{ backgroundColor: 'black' }}
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    inputContainerStyle: {
        marginTop: 50,
        marginBottom: 100,
        width: '100%'
    }
})

export default RegisterForm;