import { View, Text, TextInput } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import TalentStyles from '../../Styles/TalentStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';

const Work = ({ data, onDataChange }) => {
  const [formdata, setFormdata] = useState({
    organization: data.organization || '',
    designation: data.designation || '',
    fromdate: data.fromdate ? new Date(data.fromdate) : new Date(),
    todate: data.todate ? new Date(data.todate) : new Date(),
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDatePicker2, setShowDatePicker2] = useState(false);
  const handleInputChange = (key, value) => {
    setFormdata(prevData => ({
      ...prevData,
      [key]: value,
    }));
  };

  useEffect(() => {
    if (Object.keys(formdata).some(
      key => formdata[key] !== previousFormdata.current[key],
    )) {
      allWorkData();
    }
  }, [formdata]);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || formdata.fromdate;
    setShowDatePicker(Platform.OS === 'ios');
    // Ensure fromdate is always before toDate
      setFormdata({ ...formdata, fromdate: currentDate });
  };

  const onDateChange2 = (event, selectedDate) => {
    const newdate = selectedDate || formdata.todate;
    setShowDatePicker2(Platform.OS === 'ios');
    // Ensure toDate is always after fromdate
      setFormdata({ ...formdata, todate: newdate });
  };

  const previousFormdata = useRef(formdata);

  const allWorkData = () => {
    const { organization, designation, fromdate, todate } = formdata;
    onDataChange({ organization, designation, fromdate, todate });
  };

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
      <View style={TalentStyles.calendarInput}>
        <View>
          <Text
            onPress={() => setShowDatePicker(true)}
            style={TalentStyles.calenderText}
          >
            {formdata.fromdate.toDateString()}
          </Text>
          
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={formdata.fromdate}
              mode="date"
              is24Hour={false}
              display="default"
              onChange={onDateChange}
            />
          )}
        </View>
        <View style={{ marginLeft: 120, paddingTop: 7 }}>
          <Icon
            name='calendar'
            size={30}
            color={'#486EAF'}
            onPress={() => setShowDatePicker(true)}
          />
        </View>
      </View>
      <Text style={TalentStyles.inputLabel}>To</Text>
      <View style={TalentStyles.calendarInput}>
        <View>
          <Text
            onPress={() => setShowDatePicker2(true)}
            style={TalentStyles.calenderText}
          >
            {formdata.todate.toDateString()}
          </Text>
          
          {showDatePicker2 && (
            <DateTimePicker
              testID="dateTimePicker"
              value={formdata.todate}
              mode="date"
              is24Hour={false}
              display="default"
              onChange={onDateChange2}
            />
          )}
        </View>
        <View style={{ marginLeft: 120, paddingTop: 7 }}>
          <Icon
            name='calendar'
            size={30}
            color={'#486EAF'}
            onPress={() => setShowDatePicker2(true)}
          />
        </View>
      </View>
    </View>
  );
};

export default Work;
