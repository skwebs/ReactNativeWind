import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
} from 'react-native';
import React from 'react';

import CreditCard from '../../component/common/CreditCard';
import BankCard from '../../component/common/BankCard';
import HeadingWithLine from '../../component/common/HeadingWithLine';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import ROUTES from '../../constants/Routes';

const HomeScreen = () => {
  const navigation = useNavigation();

  //   <Button onPress={() => navigation.navigate('Details')}>
  //   Go to Details
  // </Button>

  return (
    <ScrollView className="flex-1 bg-amber-400 p-4">
      <View>
        <Text className="text-4xl font-bold text-amber-900 text-center mt-2">
          Overview
        </Text>
      </View>
      <View className="my-6">
        <Pressable
          onPress={() => navigation.navigate(ROUTES.CASH)}
          className=" items-center bg-amber-100 py-4  my-2 rounded-xl border-2 border-amber-700">
          <Text className="text-4xl text-amber-900 font-bold ">
            Cash : ₹ 99999
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate(ROUTES.CREDITCARD)}
          className=" items-center bg-amber-100 py-4  my-2 rounded-xl border-2 border-amber-700">
          <Text className="text-4xl text-amber-900 font-bold ">
            Credit Exp : ₹ 99999
          </Text>
        </Pressable>
      </View>

      <View className="p-2 mb-3">
        <HeadingWithLine text="Cards Expenses" />
      </View>
      <View className="  flex-row gap-2 flex-wrap">
        <CreditCard bank={'SBI'} amount={99999} day="03" />
        <CreditCard bank={'Axis'} amount={99999} day="10" />
        <CreditCard bank={'HDFC'} amount={99999} day="01" />
        <CreditCard bank={'ICICI'} amount={99999} day="02" />
      </View>
      <View className="p-2 mb-4 my-6">
        <HeadingWithLine text="Bank Balance" />
      </View>
      <View className=" flex-row gap-2 flex-wrap">
        <BankCard bank={'SBI'} amount={99999} />
        <BankCard bank={'Ujjivn'} amount={99999} />
      </View>

      <View className="p-2 mb-4 my-6">
        <HeadingWithLine text="Others" />
      </View>
      <View className=" flex-row gap-2 flex-wrap">
        <BankCard bank={'Dr'} amount={99999} />
        <CreditCard bank={'Cr'} amount={99999} />
      </View>

      {/* <View className=" my-2 border-2 border-amber-700 rounded-xl flex-row">
        <FAIcon
          name="user"
          size={30}
          color="#bb4d00"
          className=" h-20 ml-4 flex justify-center items-center align-middle text-center"
        />
        <TextInput className="text-amber-900 pl-3 flex-1 border-amber-700 rounded-xl pr-5 font-semibold text-3xl h-20" />
      </View> */}
      <View className="py-3 " />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
