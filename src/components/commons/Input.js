import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        autoCorrect={false}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = {
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    lineHeight: 23,
    fontSize: 18,
    flex: 2,
  },
  label: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export { Input };