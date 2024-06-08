import {View, Text, TextInput} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import TalentStyles from '../../../Styles/TalentStyles';

const EditWork = ({data,onDataChange}) => {
  const[formdata,setFormData]=useState({
   organization:data.organization,
   designation:data.designation,
   fromdate:data.fromdate,
   todate:data.todate
   })
 
 const handleInputChange = (key,value) =>{
   setFormData({
     ...formdata,
     [key]:value,
 })
 }
 useEffect(()=>{
   onDataChange(formdata);
 },[formdata]);
  return (
    <View style={TalentStyles.stepContent}>
      <Text style={TalentStyles.inputLabel}>Organization Name</Text>
      <TextInput
        value={formdata.organization}
        onChangeText={text => handleInputChange('organization', text)}
        placeholder="Organization name"
        placeholderTextColor={'grey'}
        style={TalentStyles.textinputstyle}
      />
      <Text style={TalentStyles.inputLabel}>Designation</Text>
      <TextInput
        value={formdata.designation}
        onChangeText={text => handleInputChange('designation', text)}
        placeholder="Enter your Designation"
        placeholderTextColor={'grey'}
        style={TalentStyles.textinputstyle}
      />
      <Text style={TalentStyles.inputLabel}>From</Text>
      <TextInput
        value={formdata.fromdate}
        onChangeText={text => handleInputChange('fromdate', text)}
        placeholder="Starts from"
        placeholderTextColor={'grey'}
        style={TalentStyles.textinputstyle}
      />
      <Text style={TalentStyles.inputLabel}>To</Text>
      <TextInput
        value={formdata.todate}
        onChangeText={text => handleInputChange('todate', text)}
        placeholder="Till then"
        placeholderTextColor={'grey'}
        style={TalentStyles.textinputstyle}
      />
    </View>

  );
};

export default EditWork;
