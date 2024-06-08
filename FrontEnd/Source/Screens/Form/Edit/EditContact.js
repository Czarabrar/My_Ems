import { View, Text, ScrollView, TextInput } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import TalentStyles from '../../../Styles/TalentStyles';
import { Picker } from '@react-native-picker/picker';

const EditContact = ({ data, onDataChange }) => {
  const[formdata,setFormData]=useState({
    // talentId : talentId.toString(),
    personalEmail:data.personalEmail,
    officialEmail:data.officialEmail,
    mobile:data.mobile,
    gender:data.gender,
    address:data.address,
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
    <View style={TalentStyles.stepContainer}>
      <ScrollView style={TalentStyles.formContainer}>
        <Text style={TalentStyles.inputLabel}>Personal E-mail</Text>
        <TextInput
          value={formdata.personalEmail}
          onChangeText={text => handleInputChange('personalEmail', text)}
          placeholder="username@gmail.com"
          placeholderTextColor={'grey'}
          style={TalentStyles.textinputstyle}
        />
        <Text style={TalentStyles.inputLabel}>Official E-mail</Text>
        <TextInput
          value={formdata.officialEmail}
          onChangeText={text => handleInputChange('officialEmail', text)}
          placeholder="username@organization.com"
          placeholderTextColor={'grey'}
          style={TalentStyles.textinputstyle}
        />
        <Text style={TalentStyles.inputLabel}>Mobile Number</Text>
        <TextInput
          value={formdata.mobile}
          onChangeText={text => handleInputChange('mobile', text)}
          placeholder="+91 12345 67890"
          placeholderTextColor={'grey'}
          style={TalentStyles.textinputstyle}
        />
        <Text style={TalentStyles.inputLabel}>Enter Your Address Details</Text>
        <TextInput
          value={formdata.address}
          onChangeText={text => handleInputChange('address', text)}
          placeholder="Address Details"
          placeholderTextColor={'grey'}
          style={TalentStyles.textinputstyle}
        />
        <Text style={TalentStyles.inputLabel}>Gender</Text>
        <View style={TalentStyles.pickerBoxStyle}>
        <Picker
          selectedValue={formdata.gender}
          onValueChange={itemValue => handleInputChange('gender', itemValue)}>
          <Picker.Item label="Select an option..." value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Others" value="Others" />
          <Picker.Item label="Prefer not to say" value="prefer not to say" />
        </Picker>
        </View>
      </ScrollView>
    </View>

  );
};

export default EditContact;
