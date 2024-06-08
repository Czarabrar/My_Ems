import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import TalentStyles from '../../../Styles/TalentStyles';
import EditInfo from './EditInfo';
import EditContact from './EditContact';
import EditEducation from './EditEducation';
import EditWork from './EditWork';
import EditSkill from './EditSkill';
import axios from 'axios';
// Import your logo images for each step
import Logo1 from '../../../Images/logo/info.png';
import Logo2 from '../../../Images/logo/contact.png';
import Logo3 from '../../../Images/logo/education.png';
import Logo4 from '../../../Images/logo/work.png';
import Logo5 from '../../../Images/logo/skills.png';

const EditStepper = ({
  talentId,
  closeModal
}) => {
  const [formdata, setFormdata] = useState({
    info: {},
    contact: {},
    education: {},
    work: {},
    skill: {},
  });
 const [updatedata,setUpdatedata] =  useState({
  info: {},
    contact: {},
    education: {},
    work: {},
    skill: {},
 }) // const updateFormData = (newFormData) => {
  //   setFormdata(newFormData);
  //   console.log(newFormData)
  // };

  // useEffect to fetch data for the provided IDs
  useEffect(() => {
    fetchDataForTalent();
  }, []);

  const fetchDataForTalent = async () => {
    try {
      const response = await fetch(
        `http://192.168.175.232:8080/api/talent/get/${talentId}`,
      );
      const data = await response.json();
      setFormdata({
        info: {
          ...formdata.info,
          name: data.info.name,
          designation: data.info.designation,
          department: data.info.department,
          joiningDate: data.info.joiningDate,
          talentId: data.info.talentId,
        },
        contact: {
          ...formdata.contact,
          personalEmail: data.contact.personalEmail,
          officialEmail: data.contact.officialEmail,
          mobile: data.contact.mobile,
          gender: data.contact.gender,
          address: data.contact.address,
          talentId: data.contact.talentId,
        },
        education: {
          ...formdata.education,
          qualification: data.education.qualification,
          year: data.education.year,
          school: data.education.school,
          marks: data.education.marks,
          talentId: data.education.talentId,
        },
        work: {
          ...formdata.work,
          organization: data.work.organization,
          designation: data.work.designation,
          fromdate: data.work.fromdate,
          todate: data.work.todate,
          talentId: data.work.talentId,
        },
        skill: {
          ...formdata.skill,
          skillGroup: data.skill.skillGroup,
          skill: data.skill.skill,
          talentId: data.skill.talentId,
        },
        
      });
      // console.log(data)
    } catch (e) {
      console.log(e, 'error msg');
    }
  };
  // const handleInputChange = (key, value) => {
  //   // If value is null or undefined, set it to an empty string
  //   const sanitizedValue = value != null ? value.toString() : '';
  
  //   // Update the corresponding section in the formdata
  //   setFormdata(prevState => ({
  //     ...prevState,
  //     [key]: sanitizedValue,
  //   }));
  // };
  useEffect(()=>{
 console.log('checking', updatedata);
  },[updatedata])
  
  const handleInputChange = (key, value) => {
    setUpdatedata(prevData => ({
      ...prevData,
      [key]: value,
    }));
   
  };


  const [step, setStep] = useState(1);

  const goToNextStep = () => {
    setStep(step + 1);
  };

  const goToStep = stepNumber => {
    setStep(stepNumber);
  };

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const getLogoImage = item => {
    switch (item) {
      case 1:
        return Logo1;
      case 2:
        return Logo2;
      case 3:
        return Logo3;
      case 4:
        return Logo4;
      case 5:
        return Logo5;
      default:
        return null;
    }
  };

  const isStepActive = item => item === step;
  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://192.168.175.232:8080/api/talent/update/${talentId}`, {
        info: updatedata.info,
        contact: updatedata.contact,
        education: updatedata.education,
        work: updatedata.work,
        skill: updatedata.skill,
      });
      console.log(response.data);
      Alert.alert('Update Successful', 'Data updated successfully');
    } catch (error) {
      console.error('Error updating data:', error);
      Alert.alert('Update Failed', 'Failed to update data. Please try again.');
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    // You can access all the formdata fields here
    // Example:
    console.log('Formdata:', updatedata);
    Alert.alert('Form Submitted', 'Formdata submitted successfully');
  };

  return (
    <View style={TalentStyles.modalContainer}>
      <View style={TalentStyles.modalContent}>
        <View style={TalentStyles.modalHeader}>
          <View style={TalentStyles.headerText}>
            <Text style={TalentStyles.headerTextStyle}>Edit Talent</Text>
          </View>
          <TouchableOpacity onPress={closeModal}>
            <View style={TalentStyles.closeIcon}>
              <Image
                source={require('../../../Images/logo/red_x.png')}
                style={TalentStyles.closeIconStyle}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={TalentStyles.stepperContainer}>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <React.Fragment key={item}>
              <TouchableOpacity onPress={() => goToStep(item)}>
                <View
                  style={[
                    TalentStyles.circle,
                    isStepActive(item) && TalentStyles.activeCircle,
                  ]}>
                  <Image
                    source={getLogoImage(item)}
                    style={[
                      TalentStyles.logoImage,
                      isStepActive(item) && TalentStyles.activeLogo,
                    ]}
                  />
                </View>
              </TouchableOpacity>
              {index < 4 && <View style={TalentStyles.line} />}
            </React.Fragment>
          ))}
        </View>

        <View style={TalentStyles.modalLabel}>
          <Text
            style={[
              TalentStyles.modalLabelText,
              step === 1 && TalentStyles.highlightText,
            ]}>
            Info
          </Text>
          <Text
            style={[
              TalentStyles.modalLabelText,
              step === 2 && TalentStyles.highlightText,
            ]}>
            Contacts
          </Text>
          <Text
            style={[
              TalentStyles.modalLabelText,
              step === 3 && TalentStyles.highlightText,
            ]}>
            Education
          </Text>
          <Text
            style={[
              TalentStyles.modalLabelText,
              step === 4 && TalentStyles.highlightText,
            ]}>
            Work
          </Text>
          <Text
            style={[
              TalentStyles.modalLabelText,
              step === 5 && TalentStyles.highlightText,
            ]}>
            Skills
          </Text>
        </View>

        <View style={TalentStyles.modalPage}>
          <ScrollView>
            {step === 1 && (
              <EditInfo data={formdata.info} talentId={talentId}  onDataChange={(data)=>{handleInputChange('info',data)}}
             
              />
            )}
            {step === 2 && (
              <EditContact
                data={formdata.contact}
                onDataChange={(data)=>{handleInputChange('contact',data)}}
             
            
              />
            )}
            {step === 3 && (
              <EditEducation
                data={formdata.education}
                onDataChange={(data)=>{handleInputChange('education',data)}}
             
  
              />
            )}
            {step === 4 && (
              <EditWork data={formdata.work} onDataChange={(data)=>{handleInputChange('work',data)}}
             
            />
            )}
            {step === 5 && (
              <EditSkill
                data={formdata.skill}
                onDataChange={(data)=>{handleInputChange('skill',data)}}
             
              
              />
            )}
          </ScrollView>
        </View>

        <View style={TalentStyles.modalButtonsContainer}>
          {step !== 1 && (
            <TouchableOpacity onPress={goToPreviousStep}>
              <View style={TalentStyles.modalLeftButton}>
                <Text style={TalentStyles.modalButtonText}>Previous</Text>
              </View>
            </TouchableOpacity>
          )}
          {step === 1 && (
            <TouchableOpacity onPress={goToNextStep}>
              <View style={TalentStyles.startbutton}>
                <Text style={TalentStyles.modalButtonText}>Next</Text>
              </View>
            </TouchableOpacity>
          )}

          {step !== 5 && step !== 1 && (
            <TouchableOpacity onPress={goToNextStep}>
              <View style={TalentStyles.modalRightButton}>
                <Text style={TalentStyles.modalButtonText}>Next</Text>
              </View>
            </TouchableOpacity>
          )}
          {step === 5 && (
            <TouchableOpacity onPress={handleUpdate}>
              <View style={TalentStyles.modalSubmitButton}>
                <Text style={TalentStyles.modalButtonText}>Update</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default EditStepper;
