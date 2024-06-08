import React from 'react';
import {  StyleSheet, View } from 'react-native';
import DrawerContainer from './Source/Screens/DrawerContainer';
import 'react-native-gesture-handler';

const App  = () =>{
  return (
    <View style={Styles.maincontainer}>
        <DrawerContainer />
    </View>
  )};
const Styles = StyleSheet.create({
  maincontainer:{
    width:'100%',
    height:'100%'
  }
})
export default App;
