import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, Image, ImageBackground } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TalentStyles from '../../Styles/TalentStyles';
import Info from './Info';
import Contact from './Contact';
import Education from './Education';
import Work from './Work';
import Skill from './Skill';
import axios from 'axios';

// Import your logo images for each step
import Logo1 from '../../Images/logo/info.png';
import Logo2 from '../../Images/logo/contact.png';
import Logo3 from '../../Images/logo/education.png';
import Logo4 from '../../Images/logo/work.png';
import Logo5 from '../../Images/logo/skills.png';

//main functional componenet which take closemodal props to close the modal .
const Stepper = ({ closeModal }) => {
//storing all the entered data in a state.
  const [formdata, setFormdata] = useState({
    info: {},
    contact: {},
    education: {},
    work: {},
    skill: {},
  });
//since i am storing talentId in all the tables i am using a separate state for that.
  const [talentId, setTalentId] = useState(null);
  //state for setting steps (1 to 5)
  const [step, setStep] = useState(1);
  //prevData is the previous state of formdata. Using this with setFormdata,ensuring that i'm working with the most up-to-date state.
  const handleFormDataChange = (stepName, data) => {
    setFormdata(prevData => ({
      ...prevData,
      [stepName]: data,
    }));
  };

  //function to post
  const handleSubmit = async () => {
    try {
      if (
        //check if all the required data are available. including talentId
        formdata.info &&
        formdata.contact &&
        formdata.education &&
        formdata.work &&
        formdata.skill &&
        talentId
      ) {
        //passing talentid to all the availble entites. 
        const formDataCombined = {
          info: { ...formdata.info, talentId },
          contact: { ...formdata.contact, talentId },
          education: { ...formdata.education, talentId },
          work: { ...formdata.work, talentId },
          skill: { ...formdata.skill, talentId },
        };

        const response = await axios.post(
          'http://192.168.175.232:8080/api/talent/submit',
          formDataCombined,
        );

        console.log('Response:', response.data);
        Alert.alert('Success', 'Data submitted successfully');
      } else {
        Alert.alert('Error', 'Please complete all steps or talentId is missing');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Failed to submit data');
    }
  };

  //state method to set talentId
  const handleTalentIdChange = id => {
    setTalentId(id);
  };

  //function to move to next step or next page inside modal
  const goToNextStep = () => {
    setStep(step + 1);
  };

  //this function navigate directly to the step by pressing.
  const goToStep = stepNumber => {
    setStep(stepNumber);
  };
  //step method to comeback previous step.
  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
//for setting logo this method takes the item (current step) sets logo based on 5 steps.
  const getLogoImage = (item) => {
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

  //function which specifies which step is active so that we can apply style to logo and step.
  const isStepActive = (item) => item === step;
  return (
    <View style={TalentStyles.modalContainer}>   
      <View style={TalentStyles.modalContent}> 
        <View style={TalentStyles.modalHeader}>
          <View style={TalentStyles.headerText}>
            <Text style={TalentStyles.headerTextStyle}>Create Talent</Text>
          </View>
          <TouchableOpacity onPress={closeModal}>
            <View style={TalentStyles.closeIcon}>
             <Image source={require('../../Images/logo/red_x.png')}
             style={TalentStyles.closeIconStyle}>
             </Image>
            </View>
          </TouchableOpacity>
        </View>
        

        <View style={TalentStyles.stepperContainer}>

          {/* using JavaScript map function to iterate through the array 
          where it maps with the index of elements.
          React.Fragment is special component that allows you to return multiple elements without adding extra nodes to the DOM. */}
          {[1, 2, 3, 4, 5].map((item, index) => (
            <React.Fragment key={item}>
              <TouchableOpacity onPress={() => goToStep(item)}>
                <View
                  style={[
                    //default circle 
                    TalentStyles.circle,
                    //when item === step gives active circle.
                    item === step && TalentStyles.activeCircle,
                  ]}
                >
                  {/* implementing logo to each steps. */}
                 <Image
                source={getLogoImage(item)}
                style={[
                  //default logo styles
                  TalentStyles.logoImage,
                  //if the step and index are same applies active logo.
                  isStepActive(item) && TalentStyles.activeLogo,
                ]}
              />
                </View>
              </TouchableOpacity>
              {/* prints line between circle(steps) */}
              {index < 4 && <View style={TalentStyles.line} />}
            </React.Fragment>
          ))}
        </View>
        {/* modal label text which is present below the step  */}
        <View style={TalentStyles.modalLabel}>
          <Text
            style={[
              TalentStyles.modalLabelText,
              step === 1 && TalentStyles.highlightText,
            ]}
          >
            Info
          </Text>
          <Text
            style={[
              TalentStyles.modalLabelText,
              step === 2 && TalentStyles.highlightText,
            ]}
          >
            Contacts
          </Text>
          <Text
            style={[
              TalentStyles.modalLabelText,
              step === 3 && TalentStyles.highlightText,
            ]}
          >
            Education
          </Text>
          <Text
            style={[
              TalentStyles.modalLabelText,
              step === 4 && TalentStyles.highlightText,
            ]}
          >
            Work
          </Text>
          <Text
            style={[
              TalentStyles.modalLabelText,
              step === 5 && TalentStyles.highlightText,
            ]}
          >
            Skills
          </Text>
        </View>
        <View style={TalentStyles.modalPage}>
          {/* this is an scrollView which return the separate form component based on the selected item numberr. */}
          <ScrollView> 
            {step === 1 && (
              <Info
                data={formdata.info}
                onDataChange={data => {
                  handleFormDataChange('info', data);
                  handleTalentIdChange(data.talentId);
                }}
              />
            )}
            {step === 2 && (
              <Contact
                data={formdata.contact}
                onDataChange={data => handleFormDataChange('contact', data)}
              />
            )}
            {step === 3 && (
              <Education
                data={formdata.education}
                onDataChange={data => handleFormDataChange('education', data)}
              />
            )}
            {step === 4 && (
              <Work
                data={formdata.work}
                onDataChange={data => handleFormDataChange('work', data)}
              />
            )}
            {step === 5 && (
              <Skill
                data={formdata.skill}
                onDataChange={data => handleFormDataChange('skill', data)}
              />
            )}
          </ScrollView>
        </View>
        {/* this is step buttons functionality where when its in step 1 only next button appears when moved on both previous and next appears and finally submit appears */}
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
          <TouchableOpacity onPress={handleSubmit}>
            <View style={TalentStyles.modalSubmitButton}>
              <Text style={TalentStyles.modalButtonText}>Submit</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
    </View>
  );
};

export default Stepper;
