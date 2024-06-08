import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView } from 'react-native';
import TalentStyles from '../../../Styles/TalentStyles';
import { Picker } from '@react-native-picker/picker';
const EditSkill = ({ data, onDataChange }) => {
  const [selectedSkillgrpValue, setSelectedSkillgroupValue] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [formdata, setFormdata] = useState({
    skillGroup: data.skillGroup || null,
    skill: data.skill || null,
  });

  const skillGroups = [
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
  ];

  const frontendSkills = [
    { label: 'React', value: 'react' },
    { label: 'Angular', value: 'angular' },
    { label: 'Vue', value: 'Vue' },
  ];

  const backendSkills = [
    { label: 'Django', value: 'Django' },
    { label: '.NET', value: '.net' },
    { label: 'Spring', value: 'Spring' },
  ];

  const handleSkillgroup = (itemValue) => {
    setSelectedSkillgroupValue(itemValue);
    setSelectedSkill(null);
    handleInputChange('skillGroup', itemValue);
  };

  const handleSkillValue = (itemValue) => {
    setSelectedSkill(itemValue);
    handleInputChange('skill', itemValue);
  };

  const handleInputChange = (key, value) => {
    setFormdata((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  useEffect(() => {
    if (
      Object.keys(formdata).some(
        (key) => formdata[key] !== previousFormdata.current[key]
      )
    ) {
      allInfoData();
    }
  }, [formdata]);

  const previousFormdata = useRef(formdata);

  const allInfoData = () => {
    const { skillGroup, skill } = formdata;
    onDataChange({ skillGroup, skill });
  };

  useEffect(() => {
    if (data) {
      setSelectedSkillgroupValue(data.skillGroup);
      setSelectedSkill(data.skill);
    }
  }, [data]);

  return (
    <ScrollView>
      <View style={TalentStyles.formContainer}>
        <Text style={TalentStyles.inputLabel}>Skill Group</Text>
        <View style={TalentStyles.pickerBoxStyle}>
          <Picker
            selectedValue={selectedSkillgrpValue}
            onValueChange={handleSkillgroup}>
            <Picker.Item label="Select" value={null} />
            {skillGroups.map((group, index) => (
              <Picker.Item key={index} label={group.label} value={group.value} />
            ))}
          </Picker>
        </View>

        <Text style={TalentStyles.inputLabel}>Actual Skill</Text>
        <View style={TalentStyles.pickerBoxStyle}>
          <Picker
            selectedValue={selectedSkill}
            onValueChange={handleSkillValue}>
            <Picker.Item label="Select" value={null} />
            {selectedSkillgrpValue === 'frontend' &&
              frontendSkills.map((skill, index) => (
                <Picker.Item
                  key={index}
                  label={skill.label}
                  value={skill.value}
                />
              ))}
            {selectedSkillgrpValue === 'backend' &&
              backendSkills.map((skill, index) => (
                <Picker.Item
                  key={index}
                  label={skill.label}
                  value={skill.value}
                />
              ))}
          </Picker>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditSkill;
