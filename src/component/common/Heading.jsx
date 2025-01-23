import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Heading = ({text}) => {
  return (
    <View className="flex-row justify-center align-middle items-center ">
      <View className="bg-amber-800 w-32 h-1" />
      <Text className="mx-2 text-2xl text-amber-800 font-bold">{text}</Text>
      <View className="bg-amber-800 w-32 h-1" />
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({});
