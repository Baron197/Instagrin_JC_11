import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Button, Input, Header, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { onInputCaptionChange } from '../actions';

class PostPhoto extends React.Component {
    onBtnOpenCameraPress = () => {

    }

    onBtnSelectGaleryPress = () => {

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    leftComponent={{ 
                        text: 'Select Image', 
                        style: { color: 'black', fontSize: 18, fontWeight: '700' } 
                    }}
                    leftContainerStyle={{ flex: 3 }}
                    containerStyle={{
                        backgroundColor: '#fff',
                        justifyContent: 'space-around',
                        marginTop: Platform.OS === 'ios' ? 0 : - 25,
                        elevation: 2
                    }}
                />
                <ScrollView>
                    <View style={{ marginVertical: 20, marginHorizontal: 15 }}>
                        <Button
                            icon={
                                <Icon
                                    name="photo-library"
                                    size={30}
                                    color="white"
                                />
                            }
                            title="Select from Gallery"
                            onPress={this.onBtnSelectGaleryPress}
                            containerStyle={{ marginBottom : 15 }}
                            buttonStyle={{ backgroundColor: 'black' }}
                        />
                        <Button
                            icon={
                                <Icon
                                    name="photo-camera"
                                    size={30}
                                    color="white"
                                />
                            }
                            title="Open Camera"
                            onPress={this.onBtnOpenCameraPress}
                            buttonStyle={{ backgroundColor: 'black' }}
                        />
                        <Input
                            placeholder='Caption'
                            onChangeText={this.props.onInputCaptionChange}
                            value={this.props.caption}
                        />
                    </View>
                    <View 
                        style={{ 
                            marginHorizontal: 15, 
                            alignItems: 'center', 
                            justifyContent: 'center' 
                        }}
                    >
                        <Image 
                            source={{ uri: this.props.image ? this.props.image.path : null }} 
                            style={{ height: 350, width: '100%' }} 
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = ({ postPhoto }) => {
    return { 
        ...postPhoto
    }
}

export default connect(mapStateToProps, { onInputCaptionChange })(PostPhoto);