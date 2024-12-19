import {
    StyleSheet,
    Text,
    View,
    Alert,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Button from '../component/Button';
import TextInputs from '../component/TextInputs';

function MyProfile({ navigation }) {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (email === '' || password === '' || fullName === '') {
            setError('All fields are required.');
        } else {
            setError('');
            Alert.alert('Profile Saved', `Welcome, ${fullName}!`);
        }
    };

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
                    <Image
                        style={styles.icon}
                        source={require('../Assests/image/left.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.heading}>My Profile</Text>
                <TouchableOpacity>
                    <Image
                        style={styles.dotIcon}
                        source={require('../Assests/image/whitedot.png')}
                    />
                </TouchableOpacity>
            </View>



            {/* Form Section */}
            <View style={styles.box}>
                {/* Circle Profile Image and Plus Icon */}
                <View style={styles.profileContainer}>
                    <Image
                        source={require('../Assests/image/profile.png')} // Replace with your image
                        style={styles.profileImage}
                    />
                    <TouchableOpacity style={styles.plusIconContainer}>
                        <Image
                            source={require('../Assests/image/whiteplus.png')} // Replace with your plus icon
                            style={styles.plusIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>
                        E-mail Address<Text style={styles.required}>*</Text>
                    </Text>
                    <TextInputs
                        placeholder="E-mail Address"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>
                        Full Name<Text style={styles.required}>*</Text>
                    </Text>
                    <TextInputs
                        placeholder="Full Name"
                        value={fullName}
                        onChangeText={setFullName}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>
                        Password<Text style={styles.required}>*</Text>
                    </Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            style={styles.passwordInput}
                        />
                        <Image
                            style={styles.eyeIcon}
                            source={require('../Assests/image/eye-crossed.png')}
                        />
                    </View>
                </View>

                <Button
                    title="Save"
                    onPress={handleLogin}
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#233142',
    },
    headerContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 30,
        paddingHorizontal: 20,
        position: 'relative',
        marginBottom:105,
    },
    heading: {
                fontFamily: 'Poppins',
                fontSize: 16,
                lineHeight: 24,
                fontWeight: '600',
                color: '#F9F9F9',
                marginLeft:20,
            },
    icon: {
        width: 24,
        height: 24,
        // marginLeft: 10,
    },
        dotIcon: {
        width: 24,
        height: 24,
        marginLeft:185,
    },
    profileContainer: {
        alignItems: 'center',
        marginTop: -90, // Positioned at 129px from the top
        position: 'relative',
        marginBottom:10,
    },
    profileImage: {
        width: 138,
        height: 138,
        borderRadius: 70, // Makes the image circular
        backgroundColor: '#DADADA',
    },
    plusIconContainer: {
        position: 'absolute',
        bottom: 7,
        right: 100, // Adjust for center-right position of the plus icon
        backgroundColor: '#233142',
        borderColor: '#F9F9F9',
        borderWidth: 1,
        lineHeight: 36,
        borderRadius: 20,
        padding: 5,
        elevation: 3,
    },
    plusIcon: {
        width: 15,
        height: 15,
    },
    box: {
        backgroundColor: 'white',
        width: '100%',
        flex: 1,
        padding: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '500',
        color: '#000000',
    },
    required: {
        color: 'red',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginTop: 5,
    },
    passwordInput: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
    eyeIcon: {
        width: 24,
        height: 24,
        tintColor: '#aaa',
    },
    button: {
        backgroundColor: '#233142',
        width: '100%',
        borderRadius: 10,
        paddingVertical: 10,
        marginTop: 20,
    },
    buttonText: {
        fontFamily: 'Poppins',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: '500',
    },
});

export default MyProfile;



