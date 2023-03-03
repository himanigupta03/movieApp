import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const movies = [
  { id: '1', title: 'Movie 1',popularity:'Popularity:234',date:'Released Date: 2021-12-22'}, 
  { id: '2', title: 'Movie 2',popularity:'Popularity:264',date:'Released Date: 2021-04-21'},
  { id: '3', title: 'Movie 3',popularity:'Popularity:214',date:'Released Date: 2021-01-23'},
  { id: '4', title: 'Movie 4',popularity:'Popularity:319',date:'Released Date: 2021-02-18'},
];

const MovieListItem = ({ item }) => (
<View style={{ flexDirection: 'row', padding: 15}}>
    <Image source={require('./src/assets/movie.jpg')} style={{ width: 90, height: 90, marginRight: 15 }} />
    <View>
      <Text style={{ fontWeight: 'bold'}}>{item.title}</Text>
      <Text>{item.popularity}</Text>
      <Text>{item.date}</Text>
      <TouchableOpacity style={{ backgroundColor: 'skyblue', paddingHorizontal: 40, paddingVertical: 5 }}>
      <Text style={{ color: 'white' }}>More Details</Text>
      </TouchableOpacity>
    </View>
    
  </View>
);

const App = () => {

  const [value, setValue] = useState(null);

  const data = [
    { label: 'Popular', value: '1' },
    { label: 'top_rated', value: '2' },
    { label: 'upcoming', value: '3' },
    { label: 'now_playing', value: '4' },
  
  ];

return (
  <View>
    {/* <Dropdown
                //style={styles.dropdown}
                // placeholderStyle={styles.placeholderStyle}
                // selectedTextStyle={styles.selectedTextStyle}
                // inputSearchStyle={styles.inputSearchStyle}
                // iconStyle={styles.iconStyle}
                //data={data}
                //search
                //maxHeight={300}
                //labelField="label"
                //valueField="value"
                //placeholder="Select class"
                //searchPlaceholder="Search class"
                // value={value}
                // onChange={item => {
                // setValue(item.value);
                // }}
             /> */}
             
             <FlatList
             data={movies}
             renderItem={({ item }) => <MovieListItem item={item} />}
             keyExtractor={item => item.id}
             style={{ flex: 1, marginTop: 100}}
             />

             </View>
    
    )
}

export default App;
