import {View, Text} from 'react-native';
import React from 'react';
import AppNavation from './src/route/AppNavation';
import {Header} from './src/components';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <AppNavation />
    </View>
  );
};

export default App;
