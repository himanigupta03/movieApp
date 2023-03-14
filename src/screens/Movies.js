import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const movies = [
  {
    id: '1',
    title: 'Movie 1',
    popularity: 'Popularity:234',
    date: 'Released Date: 2021-12-22',
  },
  {
    id: '2',
    title: 'Movie 2',
    popularity: 'Popularity:264',
    date: 'Released Date: 2021-04-21',
  },
  {
    id: '3',
    title: 'Movie 3',
    popularity: 'Popularity:214',
    date: 'Released Date: 2021-01-23',
  },
  {
    id: '4',
    title: 'Movie 4',
    popularity: 'Popularity:319',
    date: 'Released Date: 2021-02-18',
  },
  {
    id: '5',
    title: 'Movie 5',
    popularity: 'Popularity:319',
    date: 'Released Date: 2021-02-18',
  },
];

const MovieListItem = ({item}) => (
  <View style={{flexDirection: 'row', padding: 15}}>
    <Image
      source={require('../../src/assets/movie.jpg')}
      style={{width: 90, height: 90, marginRight: 15}}
    />
    <View>
      <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
      <Text>{item.popularity}</Text>
      <Text>{item.date}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'skyblue',
          paddingHorizontal: 40,
          paddingVertical: 5,
        }}>
        <Text style={{color: 'white'}}>More Details</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Movies = () => {
 
  const data = [
    {label: 'Popular', value: '1'},
    {label: 'top_rated', value: '2'},
    {label: 'upcoming', value: '3'},
    {label: 'now_playing', value: '4'},
  ];
  const [value, setValue] = useState(data[0].value);

  return (
    <View style={{flex: 1}}>
      <View style={{padding: 20}}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select class"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
      </View>
      <FlatList
        data={movies}
        renderItem={({item}) => <MovieListItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  dropdown: {
    marginLeft: 85,
    height: 45,
    width: '50%',
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 10,
    padding: 8,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
