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
import Home from './screens/Home'
import Employee from './screens/Employee'
import Profile from './screens/Profile'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { Title } from 'react-native-paper';
const Stack = createStackNavigator();
const option={
  headerTintColor:"white",
  headerStyle:{
    backgroundColor:"#2c3485"
  }
}
 function App() {
  return (
    <View style={styles.container}>
       <Stack.Navigator >
      <Stack.Screen name="Home" component={Home} options={option}  />
      <Stack.Screen name="Employee" component={Employee} options={{...option,title:"Enter details"}} />
      <Stack.Screen name="Profile" component={Profile} options={option}/>
      
    </Stack.Navigator>
   
    
    </View>
  );
};

export default ()=>{
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

  }
});


