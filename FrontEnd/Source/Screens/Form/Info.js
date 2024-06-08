import TalentStyles from '../../Styles/TalentStyles';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, TextInput, Image, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';

const Info = ({ data, onDataChange,errors }) => {
  const [formdata, setFormdata] = useState({
    talentId: data.talentId || '',
    name: data.name || '',
    department: data.department || null,
    designation: data.designation || '',
    joiningDate: data.joiningDate ? new Date(data.joiningDate) : new Date(), // Changed to Date object
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    if (
      Object.keys(formdata).some(
        key => formdata[key] !== previousFormdata.current[key]
      )
    ) {
      allinfodata();
    }
  }, [formdata]);

  const previousFormdata = useRef(formdata);

  const allinfodata = () => {
    const { talentId, name, department, designation, joiningDate } = formdata;
    onDataChange({ talentId, name, department, designation, joiningDate: joiningDate.toISOString() });
  };

  const handleInputChange = (key, value) => {
    const updatedInfo = {
      ...formdata,
      [key]: value,
    };

    setFormdata(updatedInfo);
    onDataChange && onDataChange(updatedInfo);
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || formdata.joiningDate;
    setShowDatePicker(Platform.OS === 'ios');
    setFormdata({ ...formdata, joiningDate: currentDate });
  };

  return (
    <View style={TalentStyles.stepContainer}>
      <ScrollView style={TalentStyles.formContainer}>
        <View style={TalentStyles.stepuserimagecontainer}>
          <Image
            source={require('../../Images/add_image.png')}
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
        <View style={TalentStyles.calendarInput}>
        <View>
          <Text
            onPress={() => setShowDatePicker(true)}
            style={TalentStyles.calenderText}
          >
            {formdata.joiningDate.toDateString()}
          </Text>
          
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={formdata.joiningDate}
              mode="date"
              is24Hour={false}
              display="default"
              onChange={onDateChange}
            />
          )}
        </View >
        <View style={{marginLeft:120,paddingToP:7}}  >
        <Icon 
          name='calendar'
          size={30}
          color={'#486EAF'}
          onPress={() => setShowDatePicker(true)}
          />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Info;
