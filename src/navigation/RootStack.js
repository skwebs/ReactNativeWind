import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from '../screen/Dashboard/DashboardScreen';
import HomeScreen from '../screen/Home/HomeScreen';
import CreditCardScreen from '../screen/CreditCard/CreditCardScreen';
import CashScreen from './../screen/Cash/CashScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Overview',
        headerShown: false,
      },
    },
    Dashboard: DashboardScreen,
    CreditCard: CreditCardScreen,
    Cash: CashScreen,
  },
});

export default RootStack;
