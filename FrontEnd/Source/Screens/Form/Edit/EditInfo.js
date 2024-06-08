import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, ScrollView, Image, Button } from 'react-native';
import TalentStyles from '../../../Styles/TalentStyles';
import { Picker } from '@react-native-picker/picker';

const EditInfo = ({ data, talentId, onDataChange }) => {
  const [formdata, setFormData] = useState({
    talentId: '',
    name: '',
    department: null,
    designation: null,
    joiningDate: null,
  });

  useEffect(() => {
    if (data) {
      setFormData({
        talentId: talentId.toString(),
        name: data.name,
        department: data.department,
        designation: data.designation,
        joiningDate: data.joiningDate,
      });
    }
  }, [data, talentId]);

  const handleInputChange = (key, value) => {
    setFormData(prevData => ({
      ...prevData,
      [key]: value,
    }));
  }

  useEffect(() => {
    // Call the parent component's onDataChange with the updated formdata
    onDataChange(formdata);
  }, [formdata]);

  return (
    <View style={TalentStyles.stepContainer}>
      <ScrollView style={TalentStyles.formContainer}>
        <View style={TalentStyles.stepuserimagecontainer}>
          <Image
            source={require('../../../Images/add_image.png')}
            style={TalentStyles.userimgstyles}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={TalentStyles.inputLabel}>Talent ID</Text>
          <Text style={{ color: 'red', marginTop: 6, paddingLeft: 5 }}>*</Text>
        </View>
        <TextInput
          value={formdata.talentId}
          onChangeText={text => handleInputChange('talentId', text)}
          placeholder="Enter Your TalentId"
          placeholderTextColor={'grey'}
          style={TalentStyles.textinputstyle}
        />
        <View style={{ flexDirection: 'row' }}>
          <Text style={TalentStyles.inputLabel}>Enter Your Name</Text>
          <Text style={{ color: 'red', marginTop: 6, paddingLeft: 5 }}>*</Text>
        </View>
        <TextInput
          value={formdata.name}
          onChangeText={text => handleInputChange('name', text)}
          placeholder="Full Name"
          placeholderTextColor={'grey'}
          style={TalentStyles.textinputstyle}
        />
        <Text style={TalentStyles.inputLabel}>Department</Text>
        <View style={TalentStyles.pickerBoxStyle}>
          <Picker
            selectedValue={formdata.department}
            onValueChange={text => handleInputChange('department', text)}>
            <Picker.Item label="Select an option..." value="" />
            <Picker.Item label="Development" value="Development" />
            <Picker.Item label="Testing" value="Testing" />
            <Picker.Item
              label="Business Analytics"
              value="Business Analytics"
            />
            <Picker.Item label="HR" value="HR" />
          </Picker>
        </View>
        <Text style={TalentStyles.inputLabel}>Enter your Designation</Text>
        <TextInput
          placeholder="Designation"
          placeholderTextColor={'grey'}
          value={formdata.designation}
          onChangeText={text => handleInputChange('designation', text)}
          style={TalentStyles.textinputstyle}
        />
        <Text style={TalentStyles.inputLabel}>Enter Your Date of Joining</Text>
        <TextInput
          value={formdata.joiningDate}
          onChangeText={text => handleInputChange('joiningDate', text)}
          placeholder="Joining date"
          placeholderTextColor={'grey'}
          style={TalentStyles.textinputstyle}
        />
      </ScrollView>
    </View>
  );
};

export default EditInfo;
