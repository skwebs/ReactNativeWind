import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ROUTES from '../../constants/Routes';

const CreditCard = ({bank, amount, day = ''}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(day ? ROUTES.CREDITCARD : ROUTES.CASH)}
      className="flex-row min-w-36 max-w-[50%] flex-1 bg-amber-100 rounded-lg border-amber-800 border-2 p-3">
      <View className="bg-amber-800 my-auto py-2 px-3 rounded-lg mr-2">
        <Text className="text-2xl font-bold text-center text-amber-100">
          {bank}
        </Text>
      </View>
      <View>
        <Text className="text-xs text-amber-800">Expended </Text>
        <Text className="font-bold text-2xl text-amber-800 mb-1">
          <Text className="text-sm font-semibold">₹</Text>
          {amount}
        </Text>
        {day && (
          <Text className="text-xs text-amber-800 font-bold">
            Bill Day : {day}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

export default CreditCard;

const styles = StyleSheet.create({});
