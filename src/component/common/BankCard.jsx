import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BankCard = ({bank, amount}) => {
  return (
    <View className="flex-row min-w-36 max-w-[50%] flex-1 bg-green-100 rounded-lg border-green-800 border-2 p-3">
      <View className="bg-green-800 my-auto py-2 px-3 rounded-lg mr-2">
        <Text className="text-2xl font-bold text-center text-green-100">
          {bank}
        </Text>
      </View>
      <View>
        <Text className="text-xs text-green-800">Balance </Text>
        <Text className="font-bold text-2xl text-green-800 ">
          <Text className="text-sm font-semibold align-top">₹</Text>
          {amount}
        </Text>
      </View>
    </View>
  );
};

export default BankCard;

const styles = StyleSheet.create({});
