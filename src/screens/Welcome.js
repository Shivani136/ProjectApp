import { StyleSheet, Text, View, Alert, Image,TextInput } from 'react-native';
import React, { useState } from 'react';
import Button from '../component/Button';
import TextInputs from '../component/TextInputs';

function Welcome({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      setError('Both fields are required.');
    } else {
      setError('');
      Alert.alert('Login Successful', `Welcome, ${email}!`);
    }
    // navigation.navigate('ProductList');
    navigation.navigate('TabNavigator');
  };

  return (
    <View style={styles.container}>
      {/* Top Logo/Image */}
      <Image
        style={styles.image}
        source={require('../Assests/image/flower.png')}
      />

      {/* Form Box */}
      <View style={styles.box}>
        <Text style={styles.heading}>Welcome to Admin panel</Text>


        <View style={styles.inputContainer}>
          <Text style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 16, lineHeight: 24, color: '#000000' }}>
            E-mail Address
            <Text style={{ color: 'red' }}>*</Text>
          </Text>
          <TextInputs
            placeholder="E-mail Address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            containerStyle={{ marginBottom: 10 }}

          />
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={styles.label}>
            Password
            <Text style={{ color: 'red',marginBottom:10 }}>*</Text>
          </Text>
          <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={styles.passwordInput} // Pass style prop
            />
     <Image style={styles.eyeIcon} source={require('../Assests/image/eye-crossed.png')} />
           

        </View>
        </View>

        {/* Login Button */}
        <Button
          title="Login Now"
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
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 310,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  box: {
    backgroundColor: 'white',
    width: '100%',
    height: 500,
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -30, 
  },
  heading: {
    fontFamily: 'Poppins',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 30,
    marginBottom: 40,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    position: 'relative',
    marginTop:10,
  },
  passwordInput: {
    flex: 1, 
    fontSize: 16,
    color: '#000',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#233142',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontFamily: 'Poppins',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 30
  },
  label: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#000000',
    marginBottom: 0,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10, 
    width: 24,
    height: 24,
    tintColor: '#aaa',
  },
});

export default Welcome;






