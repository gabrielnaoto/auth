import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
  <View style={styles.container} >
    {props.children}
  </View>
);

const styles = {
  container: {
    borderBottomWidth: 1,
    padding: 5,
    color: '#000',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderColor: '#d4d8d4',
    position: 'relative'
  }
};

export { CardSection };
