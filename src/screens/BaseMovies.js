import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Movies from './Movies';
import Search from './Search';
import TVShows from './TVShows';

const BaseMovies = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 14, textTransform: 'none'},
        tabBarStyle: {backgroundColor: 'skyblue'},
      }}>
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="TVShows" component={TVShows} />
    </Tab.Navigator>
  );
};

export default BaseMovies;
