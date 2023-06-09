import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {CurrentUserRouteProps} from '../routes/types';
import {Routes} from '../routes/routes';

const CurrentUser = () => {
  const [user, setUser] = useState<any>(null);
  const {params} = useRoute<CurrentUserRouteProps<Routes.CURRENT_USERS>>();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      .then(res => res.json())
      .then(json => setUser(json));
  }, [params.userId]);

  if (!user) return null;

  return (
    <View>
      <Text>Current user is:</Text>
      <Text>
        {user.id} --- {user.name}
      </Text>
    </View>
  );
};

export default CurrentUser;
