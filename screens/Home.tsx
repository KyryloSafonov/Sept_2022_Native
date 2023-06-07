import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation<any>();

  const navigateToUsersScreen = () => navigation.navigate('Users');

  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
      <Button title={'Go to Users Screen'} onPress={navigateToUsersScreen} />
    </View>
  );
};

export default Home;
