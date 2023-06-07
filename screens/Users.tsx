import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Users = () => {
  const [users, setUsers] = useState<any[]>([]);
  const navigation = useNavigation<any>();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => setUsers(json));
  }, []);

  const navigateToCurrentUser = (userId: string) =>
    navigation.navigate('CurrentUser', {
      userId,
    });
  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => navigateToCurrentUser(item.id as string)}
        style={{
          backgroundColor: 'grey',
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'orange',
        }}>
        <Text>
          {item.id} --- {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text>Users Screen</Text>
      <FlatList
        data={users}
        renderItem={renderItem}
        style={{
          height: 600,
          width: '100%',
        }}
      />
    </View>
  );
};

export default Users;
