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

const Home = (props) => {
  const data=[
    {id:1,name:"amal perera",position:"web", email:"amal@gmail.com",salary:"30000", phone:"12345323",picture:"https://images.unsplash.com/flagged/photo-1577351285836-19ff13f8e615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"},
    {id:2,name:"bimal",position:"mobile", email:"bimal@gmail.com",salary:"30000", phone:"12345323",picture:"https://images.unsplash.com/flagged/photo-1577351285836-19ff13f8e615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"},
    {id:3,name:"camal",position:"web", email:"camal@gmail.com",salary:"30000", phone:"12345323",picture:"https://images.unsplash.com/flagged/photo-1577351285836-19ff13f8e615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"},
    {id:4,name:"damal",position:"mobile", email:"damal@gmail.com",salary:"30000", phone:"12345323",picture:"https://images.unsplash.com/flagged/photo-1577351285836-19ff13f8e615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"},
   

    

  ]
  const renderList=((item)=>{
    return(
      <Card style={styles.mycard} 
      onPress={()=>props.navigation.navigate("Profile",{item})}> 
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
  <View style={{flex:1}}>
    <FlatList
    data={data}
    renderItem={({item})=>{
      return renderList(item)
    }}
    keyExtractor={item=>item.id}

    />
    <FAB
    style={styles.fab}
    small={false}
    theme={{colors:{accent:"#2c3485"}}}
    icon="plus"
    onPress={() => props.navigation.navigate("Employee")}
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
