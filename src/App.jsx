// In App.js in a new project

import * as React from 'react';
// import {View, Text} from 'react-native';
import {createStaticNavigation} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import DashboardScreen from './screen/Dashboard/DashboardScreen';
// import HomeScreen from './screen/Home/HomeScreen';
import './global.css';
import RootStack from './navigation/RootStack';

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
