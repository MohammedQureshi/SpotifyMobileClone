import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Library from './pages/library/Library';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        tabStyle: {
          justifyContent: 'center', 
          backgroundColor: '#2B2B2B',
        },
        labelStyle: {
          fontSize: 16,
        },
        style: {
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 80,
          shadowOffset: {
            width: 0, height: 0 
          }
        }
      }} >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: "Home",
          tabBarIcon: ({color, size}) => (<Icon name="home-variant" size={size} color={color} />)
          }} />
        <Tab.Screen name="Search" component={Search} options={{
          tabBarIcon: ({color, size}) => (<Icon name="magnify" size={size} color={color} />) 
        }} />
        <Tab.Screen name="Your Library" component={Library} options={{
          tabBarIcon: ({color, size}) => (<Icon name="bookshelf" size={size} color={color} />)
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}