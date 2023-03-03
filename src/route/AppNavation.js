import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Movies from '../screens/Movies';

const AppNavation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Movies" component={Movies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavation;
