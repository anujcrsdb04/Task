import React from 'react'
import { View, Text, Image, Button, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import ImagePicker from 'react-native-image-crop-picker';
export default function HomeScreen({ navigation }) {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [image, setImage] = React.useState('https://wallpapercave.com/wp/wp2555730.jpg');
    const [name, onnamechange] = React.useState('');
    const [number, onnumberchange] = React.useState('');


    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            console.log(image);
            setImage(image.path);
            setModalVisible(false);
        });
    }

    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            console.log(image);
            setImage(image.path);
            setModalVisible(false);
        });
    }
    const buttonpress = () => {
        var reg = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
        
      if (image === 'https://wallpapercave.com/wp/wp2555730.jpg'){
                alert('Please update image first')
        } else if(name === '') {
            
            if(name === '' && number === '')
            {
                alert('Name and Phone number cannot be empty')
            }
        }
        else if(number === '')
        {
            alert('Phone number cannot be empty')
        }
        else if (reg.test(number) === false) {
            alert('Enter a valid Phone number')
              }
        
        else{
            ifnumberempty(false)
            ifnameempty(false)
navigation.navigate('Data', {
            imagepath: image,
            Name: name,
            phone: number
        });
        }
      
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex:1,alignItems: 'center', backgroundColor: '#fff', justifyContent: 'center' }}>
                <Text>Click on the image to update</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>

                    <View
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 30,
                        }}>
                        <Image
                            source={{
                                uri: image,
                            }}
                            style={{
                                height: 100, width: 100, backgroundColor: '#fff',
                                borderRadius: 70,
                            }} />
                    </View>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onnamechange(text)}
                    value={name}
                    placeholder="Name"
                    style={{ height: 40, width: '70%', backgroundColor: '#fff', borderRadius: 10, borderWidth: 1, borderColor: '#000', marginTop: 20, textAlign: 'center' }}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onnumberchange(text)}
                    value={number}
                    placeholder="Mobile no"
                    keyboardType="numeric"
                    style={{ height: 40, width: '70%', backgroundColor: '#eee', borderRadius: 10, borderWidth: 1, borderColor: '#000', marginTop: 20, textAlign: 'center' }}
                />
                <TouchableOpacity  style={{ marginTop:20 , backgroundColor:'#eee', paddingVertical:10,paddingHorizontal:110,borderRadius:10}} onPress={buttonpress}>
                    <Text style={styles.panelButtonTitle}>Submit</Text>
                </TouchableOpacity>
            </View>
            { modalVisible ? <View style={styles.panel}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.panelTitle}>Upload Profile Picture</Text>
                </View>
                <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
                    <Text style={styles.panelButtonTitle}>Take Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
                    <Text style={styles.panelButtonTitle}>Choose From Library</Text>
                </TouchableOpacity>

            </View> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
    },
    
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#eee',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
});