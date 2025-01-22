import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomTextField = () => {
  return (
    <View className="bg-red-500">
      <Text>CustomTextField</Text>
    </View>
  );
};

export default CustomTextField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
