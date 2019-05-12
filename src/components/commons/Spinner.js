import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinner}>
        <ActivityIndicator
          size={size || 'large'}
        />
    </View>
  )
};

const styles = {
  spinner: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1
  }
}

export { Spinner };