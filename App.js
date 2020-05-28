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
import Home  from './screens/Home'
import Employee  from './screens/Employee'


export default function App(){
  return (
  <View style={styles.container}>
 {/* <Home/> */}
 <Employee/>
  </View>
  );
};

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"white",
  
}
});


