import {View, Text, ScrollView, TextInput} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import TalentStyles from '../../Styles/TalentStyles';
import {Picker} from '@react-native-picker/picker';

const Contact = ({data, onDataChange}) => {
  const [formdata, setFormdata] = useState({
    personalEmail: data.personalEmail || '',
    officialEmail: data.officialEmail || '',
    mobile: data.mobile || '',
    address: data.address || '',
    gender: data.gender || '',
  });

  const handleInputChange = (key, value) => {
    setFormdata(prevData => ({
      ...prevData,
      [key]: value,
    }));
  };

  useEffect(() => {
    if (
      Object.keys(formdata).some(
        key => formdata[key] !== previousFormdata.current[key],
      )
    ) {
      allContactData();
    }
  }, [formdata]);

  const previousFormdata = useRef(formdata);

  const allContactData = () => {
    const {personalEmail, officialEmail, mobile, address, gender} = formdata;
    onDataChange({personalEmail, officialEmail, mobile, address, gender});
  };

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

export default Contact;
