import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import AppNavation from './src/route/AppNavation';
import {Header} from './src/components';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header />
      <AppNavation />
    </View>
  );
};

export default App;
