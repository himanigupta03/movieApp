import {View, Text} from 'react-native';
import { StatusBar } from 'react-native';
import React, {useEffect} from 'react';
import AppNavation from './src/route/AppNavation';
import {Header} from './src/components';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#1f4b47" barStyle="light-content"/>
      <Header />
      <AppNavation />
    </View>
  );
};

export default App;
