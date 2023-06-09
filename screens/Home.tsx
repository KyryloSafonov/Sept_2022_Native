import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../routes/routes';
import {HomeNavigationProps} from '../routes/types';

const Home = () => {
  const navigation = useNavigation<any>();

  const navigateToUsersScreen = () => navigation.navigate(Routes.USERS);
  const navigateToTabsScreen = () => navigation.navigate(Routes.MAIN_TAB);

  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
      <Button title={'Go to Users Screen'} onPress={navigateToUsersScreen} />
      <Button title={'Go to Tabs Screen'} onPress={navigateToTabsScreen} />
    </View>
  );
};

export default Home;
