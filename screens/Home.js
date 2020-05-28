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
import {Card,FAB  } from 'react-native-paper';

const Home = () => {
  const data=[
    {id:1,name:"mingyu",position:"web"},
    {id:2,name:"joshua",position:"mobile"},
    {id:3,name:"dk",position:"web"},
    {id:5,name:"hi",position:"mobile"},
    {id:6,name:"hi",position:"mobile"},
    {id:7,name:"hi",position:"mobile"},
    {id:8,name:"hi",position:"mobile"},
    {id:9,name:"hi",position:"mobile"},
    {id:10,name:"hi",position:"mobile"},
    {id:11,name:"hi",position:"mobile"},
    {id:12,name:"hi",position:"mobile"},
    {id:13,name:"hi",position:"mobile"},
    {id:14,name:"hi",position:"mobile"},
    {id:15,name:"hi",position:"mobile"},
    {id:16,name:"hi",position:"mobile"},
    
    

    

  ]
  const renderList=((item)=>{
    return(
      <Card style={styles.mycard} >
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
    keyExtractor={item=>`${item.id}`}

    />
    <FAB
    style={styles.fab}
    small={false}
    theme={{colors:{accent:"green"}}}
    icon="plus"
    onPress={() => console.log('Pressed')}
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
  
 },
 fab: {
  position: 'absolute',
  margin: 16,
  right: 0,
  bottom: 0,
},
});

export default Home;
