import React from 'react';
import {
  SafeAreaView,StyleSheet,ScrollView,View, Text,StatusBar,Image,FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Profile=()=>{
    return(
       <View style={styles.root}>
           <LinearGradient
           colors={["#202980","#3c46ab"]}
           style={{height:"20%"}}
           />

       </View>
    )

}
const styles=StyleSheet.create(
    {
        root:{
            flex:1
        }
    }
)
export default Profile;