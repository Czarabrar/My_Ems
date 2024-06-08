import { Text, ScrollView, TextInput, View } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import TalentStyles from '../../../Styles/TalentStyles';
import { Picker } from '@react-native-picker/picker';

const EditEducation = ({ data,onDataChange }) => {
  const[formdata,setFormData]=useState({
   qualification:data.qualification,
   school:data.school,
   marks:data.marks.toString(),
   year:data.year
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
    <ScrollView style={TalentStyles.formContainer}>
      <Text style={TalentStyles.inputLabel}>Select Qualification</Text>
      <View style={TalentStyles.pickerBoxStyle}>
      <Picker
        selectedValue={formdata.qualification}
        onValueChange={itemValue =>
          handleInputChange('qualification', itemValue)
        }>
        <Picker.Item label="Select an option..." value="" />
        <Picker.Item label="Ug" value="Ug" />
        <Picker.Item label="Pg" value="Pg" />
        <Picker.Item label="Hsc +2" value="Hsc +2" />
        <Picker.Item label="sslc" value="sslc" />
      </Picker>
        </View>
      <Text style={TalentStyles.inputLabel}>University/School Name</Text>
      <TextInput
        value={formdata.school}
        onChangeText={text => handleInputChange('school', text)}
        placeholder="Enter your College/School Name"
        placeholderTextColor={'grey'}
        style={TalentStyles.textinputstyle}
      />
      <Text style={TalentStyles.inputLabel}>Qualifying Marks</Text>
      <TextInput
        value={formdata.marks}
        onChangeText={text => handleInputChange('marks', text)}
        placeholder="Enter your marks"
        placeholderTextColor={'grey'}
        style={TalentStyles.textinputstyle}
      />
      <Text style={TalentStyles.inputLabel}>Passed Out year</Text>
      <TextInput
        value={formdata.year}
        onChangeText={text => handleInputChange('year', text)}
        placeholder="Year of Passout"
        placeholderTextColor={'grey'}
        style={TalentStyles.textinputstyle}
      />
    </ScrollView>
      );
};

export default EditEducation;
