import {Text, ScrollView, TextInput,View} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import TalentStyles from '../../Styles/TalentStyles';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/AntDesign';
const Education = ({data,onDataChange}) => {
  const [formdata, setFormdata] = useState({
    qualification: data.qualification||'',
    school: data.school||'',
    marks: data.marks||'',
    year:data.year ? new Date(data.year) : new Date(),
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
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
      allEducationData();
    }
  }, [formdata]);

  const previousFormdata = useRef(formdata);

  const allEducationData = () => {
    const {qualification, school, marks, year} = formdata;
    onDataChange({qualification, school, marks, year});
  };
  const onDateChange = ( selectedDate) => {
    const currentDate = selectedDate || formdata.year;
    setShowDatePicker(Platform.OS === 'ios'); // Hide for Android, for iOS it closes automatically
    setFormdata({ ...formdata, year: currentDate });
  };
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
      <View style={TalentStyles.calendarInput}>
        <View>
          <Text
            onPress={() => setShowDatePicker(true)}
            style={TalentStyles.calenderText}
          >
            {formdata.year.toDateString()}
          </Text>
          
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={formdata.year}
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
  );
};

export default Education;
