import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FirstTab from './FirstTab';
import SecondTab from './SecondTab';
import firstTab from './FirstTab';
import FirstTabScreen from './FirstTabScreen';
import {Routes} from '../../routes/routes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export enum Tabs {
  FIRST_TAB = 'FirstTab',
  FIRST_TAB_SCREEN = 'FirstTabScreen',
  SECOND_TAB = 'SecondTab',
}

const FewScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Tabs.FIRST_TAB}>
      <Stack.Screen name={Tabs.FIRST_TAB} component={FirstTab} />
      <Stack.Screen name={Tabs.FIRST_TAB_SCREEN} component={FirstTabScreen} />
    </Stack.Navigator>
  );
};

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={Routes.FEW_SCREENS} component={FewScreens} />
      <Tab.Screen name={Tabs.SECOND_TAB} component={SecondTab} />
    </Tab.Navigator>
  );
};

export default MainTab;
