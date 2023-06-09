import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Routes} from './routes';

export type HomeParams = {[Routes.HOME]: undefined};

export type UsersParams = {[Routes.USERS]: undefined};

export type CurrentUsersParams = {[Routes.CURRENT_USERS]: {userId: string}};
export type MainTabParams = {[Routes.MAIN_TAB]: undefined};

export type HomeNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<HomeParams, Routes.HOME>,
  CompositeNavigationProp<
    NativeStackNavigationProp<HomeParams, Routes.HOME>,
    NativeStackNavigationProp<UsersParams, Routes.USERS>
  >
>;

export type UsersNavigationProps = CompositeNavigationProp<
  CompositeNavigationProp<
    NativeStackNavigationProp<UsersParams, Routes.USERS>,
    NativeStackNavigationProp<MainTabParams, Routes.MAIN_TAB>
  >,
  CompositeNavigationProp<
    CompositeNavigationProp<
      NativeStackNavigationProp<UsersParams, Routes.USERS>,
      NativeStackNavigationProp<CurrentUsersParams, Routes.CURRENT_USERS>
    >,
    CompositeNavigationProp<
      NativeStackNavigationProp<CurrentUsersParams, Routes.CURRENT_USERS>,
      NativeStackNavigationProp<MainTabParams, Routes.MAIN_TAB>
    >
  >
>;

export type CurrentUserRouteProps<RouteName extends keyof CurrentUsersParams> =
  RouteProp<CurrentUsersParams, RouteName>;
