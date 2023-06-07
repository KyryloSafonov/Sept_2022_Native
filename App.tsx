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

const Stack = createNativeStackNavigator();

console.log(Stack);

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
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="CurrentUser" component={CurrentUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
