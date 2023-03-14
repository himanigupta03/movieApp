import {View, Text} from 'react-native';
import React from 'react';

const Header = () => {

  return (
    <View style={{padding: 10, paddingTop: 30, backgroundColor: '#1f4b47'}}>
      <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center',color:"white"}}>
        Movies App
      </Text>
    </View>
  );
};

export default Header;
