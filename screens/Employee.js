
import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Modal,
  FlatList
} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
const Employee=()=>{
    const [name,setName]= useState("")
    const [phone,setPhone]= useState("")
    const [email,setEmail]= useState("")
    const [salary,setSalary]= useState("")
    const [pic,setPic]= useState("")
    const [modal,setModal]= useState(false)
   

    return(
        <View style={styles.root}>
      <TextInput
        label='Name'
        style={styles.inputStyles}
        value={name}
        theme={theme}
        mode="outlined"
        onChangeText={text => setName(text)}
      />
      <TextInput
        label='Phone'
        style={styles.inputStyles}
        value={phone}
        theme={theme}
        keyboardType="number-pad"
        mode="outlined"
        onChangeText={text => setPhone(text)}
      />
      <TextInput
        label='Email'
        style={styles.inputStyles}
        value={email}
        theme={theme}
        mode="outlined"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        label='Salary'
        style={styles.inputStyles}
        value={salary}
        theme={theme}
        mode="outlined"
        onChangeText={text => setSalary(text)}
      />
        
        
<Button style={styles.inputStyles} icon="upload-outline" theme={theme} mode="contained"  onPress={() => setModal(true)}>
    Upload Image
  </Button>
         
<Button style={styles.inputStyles} icon="content-save-outline" theme={theme} mode="contained"  onPress={() =>console.log("save")}>
    Save
  </Button>
  <Modal animationType="slide"
  transparent={true}
  visible={modal}
  onRequestClose={()=>{
    setModal(false)
  }}
  > 

<View style={styles.modalV}>
  <View style={styles.btn}> 
  <Button icon="camera" theme={theme} mode="contained"  onPress={()=>console.log("camera pressed")}>
    Camera
  </Button> 
  <Button icon="image-area" theme={theme} mode="contained"  onPress={()=>console.log("gallery pressed")}>
    Gallery
  </Button>

  </View>
<Button 
//style={styles.btn2Styles} 
icon="cancel" 
theme={theme}  
onPress={() => setModal(false)}>
    Cancel
  </Button>
</View>

  </Modal>
  </View>
    )
}
const theme={
  colors:{
    primary:"#3c46ab"
  }
}
const styles = StyleSheet.create({
    root:{
        flex:1

    },
    inputStyles:{
      margin:5
    },
    btn:{
      flexDirection:"row",
      justifyContent:"space-around",
      padding:10
    },
    modalV:{
      position:"absolute",
      bottom:2,
      width:"100%",
      backgroundColor:'#cfd3fa'

    },
    btn2Styles:{
      margin:5
    }
   });
   
export default Employee;