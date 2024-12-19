import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

const TextInputs = ({
  value = '',           // Current value of the text input
  onChangeText,         // Function to handle text change
  placeholder = '',     // Placeholder text
  inputStyle,           // Custom styles for the text input
  containerStyle,       // Custom styles for the container
  label,                // Optional label for the input
  labelStyle,           // Custom styles for the label
  secureTextEntry = false, // Secure text input for passwords
  keyboardType = 'default', // Keyboard type (e.g., numeric, email-address)
  maxLength,            // Maximum length of input
  editable = true,      // Whether the input is editable
  errorMessage = '',    // Error message to display
  errorStyle,           // Custom styles for the error message
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[styles.input, inputStyle]}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        maxLength={maxLength}
        editable={editable}
        placeholderTextColor="#999"
      />
      {errorMessage ? <Text style={[styles.errorText, errorStyle]}>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});

export default TextInputs;
