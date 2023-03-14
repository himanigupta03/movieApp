import {View, Text, StyleSheet,Image, TextInput, TouchableOpacity,} from 'react-native';
import React, {useState} from 'react';
import { searchIcon } from '../../src/assets/index.js';
import { Dropdown } from 'react-native-element-dropdown';

const Search = () => {

 const data = [
    { label: 'multie', value: '1' },
    { label: 'movie', value: '2' },
  ];

  const [value, setValue] = useState(data[1].value);
  
  return (
     <View style={{flex: 1}}>

      <Text style={styles.searchText}>
      <Text>Search Movie/TV Shows Name</Text>
      <Text style={{color: 'red'}}>*</Text>
      </Text>

        <View style={styles.parentContainer}>
        <Image
           resizeMode="contain"
           source={searchIcon}
           style={styles.srchIcon}
          />
          <TextInput style={styles.input}
           placeholder='i.e James Bond'
          />
        </View>
        
        <Text style={styles.searchType}>
        <Text>Choose Search Type</Text>
        <Text style={{color: 'red'}}>*</Text>
        </Text>

        <View style={{flexDirection: 'row', padding: 15}}>
        <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select a type"
        data={data}
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
      <TouchableOpacity style={styles.buttonStyle}>
          <Image
           resizeMode="contain"
           source={searchIcon}
          />
        <Text style={{paddingLeft: 8,color: 'white',fontSize: 18}}>Search</Text>
      </TouchableOpacity>

      

      </View>
      <Text style={styles.searchType}>Please Select a search type</Text>

      <Text style={styles.search2Text}>Please initiate a search</Text>
      </View>
        
      
    );
};

export default Search;

const styles = StyleSheet.create({
  dropdown: {
    marginLeft: 27,
    height: 45,
    width: '50%',
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 10,
  },
  placeholderStyle: {
    fontSize: 16,
    paddingLeft: 10,
  },
  selectedTextStyle: {
    fontSize: 16,
    paddingLeft: 10,
  },
  searchText: {
    margin: 20,
    paddingLeft: 20,
    fontWeight: 'bold',
    fontSize: 15,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  icon: {
    marginRight: 5,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  parentContainer: {
    width: '80%',
    height: 45,
    marginLeft: 40,
    borderWidth: 1,
    paddingTop: 1,
    borderRadius: 6,
    flexDirection: 'row',
    borderColor: 'black',
    },

   srchIcon: {
    flex: 2,
   // backgroundColor:"blue",
    marginTop: 9,
    marginLeft: 10,
  },
  input: {
    flex: 22,
    color: 'black',
    //backgroundColor: 'pink',
    marginLeft: 15,
  },
  searchType: {
   // margin: 20,
    paddingLeft: 40,
    fontWeight: 'bold',
    fontSize: 15,
  },
  buttonStyle: {
    backgroundColor: 'skyblue',
    width: '30%',
    height: 45,
    marginLeft: 10,
    marginTop: 10,
    paddingTop: 13,
    paddingLeft: 12,
    fontSize: 20,
    flexDirection: 'row',
   },
   search2Text:{
    marginTop: 60,
    paddingLeft: 80,
    fontWeight: 'bold',
    fontSize: 20,
   },
});


