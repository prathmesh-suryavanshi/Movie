/*
Filename: Main Navigator
Description: Main navigation
*/
import { createStackNavigator } from '@react-navigation/stack';
import NowPlaying from "../Screens/NowPlaying"
import TopRated from "../Screens/TopRated"
import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NowPlayingDetail from '../Screens/NowPlayingDetail'
import Icon from 'react-native-vector-icons/Ionicons'
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator  screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Now Playing') {
          iconName = focused
            ? 'md-play-circle'
            : 'md-play-circle-outline';
        } else if (route.name === 'Top Rated') {
          iconName = focused ?  'ios-star'
          : 'ios-star-outline';
        }
        return <Icon name={iconName} size={20} color={'#000'} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="Now Playing" component={NowPlaying}/>
      <Tab.Screen name="Top Rated" component={TopRated} />
    </Tab.Navigator>

  );
}

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f4b244',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Movies" component={TabNavigator} />
        <Stack.Screen name="Movie" component={NowPlayingDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
