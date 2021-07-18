import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Library from './pages/library/Library';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      tabBarOptions={{
        activeTintColor: 'white',
        tabStyle: {
          justifyContent: 'center', 
          backgroundColor: '#2B2B2B'
        },
        labelStyle: {
          fontSize: 14,
          color: 'white',
          fontWeight: 'bold'
        }
      }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          )
          }} />
        <Tab.Screen name="Search" component={Search} options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={size} color={color} />
          )
          }} />
        <Tab.Screen name="Your Library" component={Library} options={{
          tabBarLabel: 'Your Library',
          tabBarIcon: ({color, size}) => (
            <Icon name="book" size={size} color={color} />
          )
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}