import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { WishListScreen } from '../screens/WishListScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { VectorIcon } from '../components/VectorIcon';
import { Text } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabNavigator = () => {

  //To fix top initial elements
  //const {top:paddingTop} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: 'red',
        },
        tabBarActiveTintColor: 'black',
        tabBarPressColor: 'blue',
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          paddingVertical: 12,
          backgroundColor: 'white'
        },
        tabBarIconStyle: {
          flexDirection: 'row',
          justifyContent: 'center',
        },
        tabBarIcon: ({focused, color}) => {
          let iconName;
          switch (route.name) {
              case 'HomeScreen':
              iconName = <VectorIcon name='home-outline' color={'white'} />
              break;

              case 'WishListScreen':
              iconName = <VectorIcon name='heart-outline' color={'white'} />
              break;
          }
          return <Text>{iconName}</Text>
        }
      })}
    >
      <Tab.Screen name="HomeScreen"  options={{ title: 'Home'}} component={HomeScreen} />
      <Tab.Screen name="WishListScreen"  options={{ title: 'WishList'}} component={WishListScreen} />
    </Tab.Navigator>
  )
}




