import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Tabs} from './MainTab';

const FirstTab = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>First tab</Text>
      <Button
        title={'Go to First tab screen'}
        onPress={() => navigation.navigate(Tabs.FIRST_TAB_SCREEN)}
      />
    </View>
  );
};

export default FirstTab;
