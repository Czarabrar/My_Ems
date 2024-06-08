// import { View, Text } from 'react-native';
// import React, { useState } from 'react';
// import TalentStyles from '../../Styles/TalentStyles';
// import { Picker } from '@react-native-picker/picker';

// const Skills = ({ onDataChange }) => {
//   const [formdata, setFormdata] = useState({
//     skillGroup: 'Frontend',
//     skill: '',
//   });

//   const handleInputChange = (key, value) => {
//     setFormdata(prevData => ({
//       ...prevData,
//       [key]: value,
//     }));
//   };

//   const allSkillsData = () => {
//     const { skillGroup, skill } = formdata;
//     onDataChange({ skillGroup, skill });
//   };

//   const firstPickerOptions = [
//     { label: 'Frontend', value: 'Frontend' },
//     { label: 'Backend', value: 'Backend' },
//   ];

//   const secondPickerOptions = {
//     Frontend: [
//       { label: 'React', value: 'React' },
//       { label: 'Angular', value: 'Angular' },
//       { label: 'Vue', value: 'Vue' },
//     ],
//     Backend: [
//       { label: 'Node.js', value: 'Node.js' },
//       { label: 'Django', value: 'Django' },
//       { label: 'Spring', value: 'Spring' },
//     ],
//   };

//   return (
//     <View style={TalentStyles.stepContent}>
//       <Text style={TalentStyles.inputLabel}>Select Skill Category: </Text>
//       <Picker
//         selectedValue={formdata.skillGroup}
//         onValueChange={itemValue => handleInputChange('skillGroup', itemValue)}
//         style={{ height: 50, width: 150 }}>
//         {firstPickerOptions.map(option => (
//           <Picker.Item
//             key={option.value}
//             label={option.label}
//             value={option.value}
//           />
//         ))}
//       </Picker>
//       <Text style={TalentStyles.inputLabel}>Select Skills: </Text>
//       <Picker
//         selectedValue={formdata.skill}
//         onValueChange={itemValue => handleInputChange('skill', itemValue)}
//         style={{ height: 50, width: 150 }}>
//         {secondPickerOptions[formdata.skillGroup].map(option => (
//           <Picker.Item
//             key={option.value}
//             label={option.label}
//             value={option.value}
//           />
//         ))}
//       </Picker>
//     </View>
//   );
// };

// export default Skills;


import {View, Text, ScrollView , StyleSheet} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {Picker} from '@react-native-picker/picker';
 import TalentStyles from '../../Styles/TalentStyles';
const Skill = ({data, onDataChange}) => {
 const [selectedSkillgrpValue, setSelectedskillgroupValue] = useState(null);
  const [selectedSkill, setSelectedskill] = useState(null);
  const [formdata, setFormdata] = useState({
    skillGroup: data.skillGroup || null,
    skill: data.skill || null,
  });

  const skillGroups = [
    {label: 'Frontend', value: 'frontend'},
    {label: 'Backend', value: 'backend'},
  ];
 
  const frontendSkills = [
    {label: 'React', value: 'react'},
    {label: 'Angular', value: 'angular'},
    {label: 'Vue', value: 'Vue'},
  ];
 
  const backendSkills = [
    {label: 'Django', value: 'Django'},
    {label: '.NET', value: '.net'},
    {label: 'Spring', value: 'Spring'},
  ];
 
  const handleskillgroup = item => {
    setSelectedskillgroupValue(item);
    setSelectedskill(null);
    handleInputChange('skillGroup', item);
  };
  const handleskillvalue = item => {
    setSelectedskill(item);
    handleInputChange('skill', item);
  };
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
      allinfodata();
    }
  }, [formdata]);
 
  const previousFormdata = useRef(formdata);
 
  const allinfodata = () => {
    const {skillGroup, skill} = formdata;
    onDataChange({skillGroup, skill});
  };
 
  useEffect(() => {
    if (data) {
      setSelectedskillgroupValue(data.skillGroup);
      setSelectedskill(data.skill);
    }
  }, [data]);
  return (
    <ScrollView>
      <View style={TalentStyles.formContainer}>
        <Text  style={TalentStyles.inputLabel}>SKill Group</Text>
        <View style={TalentStyles.pickerBoxStyle}>
        <Picker
          selectedValue={selectedSkillgrpValue}
          onValueChange={handleskillgroup}>
          <Picker.Item label="Select" value={null} />
          {skillGroups.map((group, index) => (
            <Picker.Item key={index} label={group.label} value={group.value} />
          ))}
        </Picker>
        </View>
        
 
        <Text  style={TalentStyles.inputLabel}>Actuall Skill</Text>
        <View style={TalentStyles.pickerBoxStyle}>
        <Picker selectedValue={selectedSkill} onValueChange={handleskillvalue}>
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
 

export default Skill;
 
