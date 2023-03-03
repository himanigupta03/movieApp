import {View, Text} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={{padding: 20, paddingTop: 50, backgroundColor: 'skyblue'}}>
      <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
        Movies App
      </Text>
    </View>
  );
};

export default Header;
