import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({
  title = 'Login Now',   // Default title
  onPress,           // Function to execute on button press
  buttonStyle,       // Custom styles for button
  textStyle,         // Custom styles for text
  disabled = false,  // Disable button interaction
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button, 
        buttonStyle, 
        disabled && styles.disabledButton // Apply disabled styles
      ]}
      onPress={!disabled ? onPress : null} // Prevent press if disabled
      activeOpacity={0.8}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#B0B0B0',
  },
});

export default Button;
