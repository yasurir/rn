import React from 'react';
import {
    SafeAreaView, StyleSheet,Platform, ScrollView, View, Text, StatusBar, Image, FlatList,Linking
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Card, FAB, Title,Icon,Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Profile = (props) => {

    const {id,name,picture,phone,salary,email,position}=props.route.params.item
    const openDial=()=>{
        if(Platform.OS === "android"){
                Linking.openURL("tel:12345")
        }
        else{
            Linking.openURL("telprompt:12345")

        }

    }
    return (
        <View style={styles.root}>
            <LinearGradient
                colors={["#2c3485","#4b59de"]}//#3c46ab
                style={{ height: "20%" }}
            />
            <View style={{ alignItems: "center" }}>
                <Image
                    style={{ width: 150, height: 150, borderRadius: 75, marginTop: -85 }}
                    source={{ uri:picture}}
                />

            </View>
            <View style={{ alignItems: "center" }}>
                <Title style={{ fontSize: 30, marginTop: 15 }}>{name}</Title>
    <Text style={{ fontSize: 20,marginBottom:15 }}>{position}</Text>

            </View>
            <Card style={styles.crd} onPress={()=>{
                Linking.openURL("mailto:email")
            }}>
                <View style={styles.crdview}>
                <MaterialCommunityIcons name="email-outline" size={30} color="#3c46ab" /> 
               
                <Text style={{ fontSize: 20,color:"#000000", marginLeft:10 }}>{email}</Text>
                </View>

            </Card>
            <Card style={styles.crd} onPress={()=>{openDial()}}>
                <View style={styles.crdview}>
                <MaterialCommunityIcons name="phone" size={30} color="#3c46ab" /> 
               
        <Text style={{ fontSize: 20,color:"#000000", marginLeft:10 }}> {phone}</Text>
                </View>

            </Card>
            <Card style={styles.crd}>
                <View style={styles.crdview}>
                <MaterialIcons name="attach-money" size={30} color="#3c46ab"  /> 
               
                <Text style={{ fontSize: 20,color:"#000000", marginLeft:10 }}> {salary}</Text>
                </View>
            </Card>
            <View style={styles.btn}>
            <Button icon="account-edit" theme={theme} mode="contained" onPress={() => console.log("camera pressed")}>
              Edit
  </Button>
            <Button icon="delete-outline" theme={theme} mode="contained" onPress={() => console.log("gallery pressed")}>
              Delete
  </Button>

            </View>
           

        </View>
    )

}
const theme = {
    colors: {
      primary: "#2c3485"
    }
  }
const styles = StyleSheet.create(
    {
        root: {
            flex: 1
        },
        crd:{
            margin:5,
            padding:5

        },
        crdview:{
            flexDirection:"row",
            padding:8
        },
        btn:{
            flexDirection:"row",
            justifyContent:"space-around",
            paddingTop:30,
            height:70
        }
    }
)
export default Profile;