import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Tabs} from './MainTab';

const FirstTabScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View>
      <Text>First tab screeeeeeeeeeennnnn</Text>
      <Button title={'Go back'} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default FirstTabScreen;
