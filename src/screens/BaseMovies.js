import { View, Text} from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Movies from './Movies';
import Search from './Search';
import TVShows from './TvShows';

const BaseMovies = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
    <Tab.Navigator
     tabBarOptions={{ 
        
        labelStyle: {fontSize: 14, textTransform: 'none'},
        activeTintColor: '#1f4b47',
        inactiveTintColor: 'grey',
        tabBarshowIcon: true,
        indicatorStyle: {
            borderBottomColor: '#1f4b47',
            borderBottomWidth: 2,
          },
    }}
    >
    <Tab.Screen name="Movies" component={Movies} />
    <Tab.Screen name="Search Results" component={Search} />
    <Tab.Screen name="TV Shows" component={TVShows} />
    </Tab.Navigator>
  )
  }

export default BaseMovies;
