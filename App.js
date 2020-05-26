/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList
} from 'react-native';
import {Card } from 'react-native-paper';

const App = () => {
  const data=[
    {id:1,name:"mingyu",position:"web"},
    {id:2,name:"joshua",position:"mobile"},
    {id:3,name:"dk",position:"web"},
    {id:4,name:"hi",position:"mobile"},
    

  ]
  const renderList=((item)=>{
    return(
      <Card style={styles.mycard} key={item.id}>
      <View style={styles.cardview}>
      <Image
      style={{width:60,height:60,borderRadius:30}}
      source={{uri:"https://images.unsplash.com/flagged/photo-1577351285836-19ff13f8e615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"}}

      />
      <View style={{marginLeft:10}}>
    
    <Text style={styles.txt}>{item.name}</Text>
    <Text style={styles.txt}>{item.position}</Text>
        </View>
      
      

    </View>
    
    </Card>

    )
  })
  return (
  <View>
    <FlatList
    data={data}
    renderItem={({item})=>{
      return renderList(item)
    }}
    />
  </View>
  );
};

const styles = StyleSheet.create({
 mycard:{
   margin:5,
   flexDirection:"row"
  
 },
 cardview:{
  flexDirection:"row",
  padding:7
 },
 txt:{
   fontSize:20,
  
 }
});

export default App;
