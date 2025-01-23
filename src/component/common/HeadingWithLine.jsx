import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeadingWithLine = ({text}) => {
  return (
    <View className="flex-row justify-center align-middle items-center ">
      <View className="bg-amber-800 w-full h-1 absolute" />
      <Text className="mx-1 text-2xl text-amber-800 font-bold z-10 bg-amber-400 px-4">
        {text}
      </Text>
    </View>
  );
};

export default HeadingWithLine;

const styles = StyleSheet.create({});
