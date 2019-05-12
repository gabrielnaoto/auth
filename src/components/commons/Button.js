import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ children, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

const styles = {
  button: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007aff',
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    padding: 10
  }
};

export { Button };
