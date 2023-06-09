/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Users from './screens/Users';
import CurrentUser from './screens/CurrentUser';
import {Routes} from './routes/routes';
import MainTab from './screens/tabs/MainTab';

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '600',
          },
        }}
        initialRouteName={Routes.HOME}>
        <Stack.Screen name={Routes.HOME} component={Home} />
        <Stack.Screen name={Routes.USERS} component={Users} />
        <Stack.Screen name={Routes.CURRENT_USERS} component={CurrentUser} />
        <Stack.Screen name={Routes.MAIN_TAB} component={MainTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
