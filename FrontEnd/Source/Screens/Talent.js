import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
  Animated,
} from 'react-native';
import Stepper from './Form/Stepper';
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import ADIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Picker} from '@react-native-picker/picker';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import TalentStyles from '../Styles/TalentStyles';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
import EditStepper from './Form/Edit/EditStepper';
const Talent = () => {
  //state for modal visiblity
  const [modalcontent, setModalContent] = useState(false);
  //stores all the from data -- didnt used it here
  const [formData, setFormData] = useState(null);
  //state to select a particular talent and updating their data
  const [selectedTalent, setSelectedTalent] = useState(null);
  //state to store all the available talents in an array.
  const [talents, setTalents] = useState([]);
  //state to made the update modal visible
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  //state which will expand the selected talent view.(to show more data)
  const [expandedTalentIndex, setExpandedTalentIndex] = useState(null);
  //function to open update modal
  const [selectedTalentId, setSelectedTalentId] = useState('');
  const [modalUpdatecontent, setModalUpdateContent] = useState(false);

  const handleButtonPress = talentId => {
    setSelectedTalentId(talentId); 
  };
  const openUpdateModal = talent => {
    setSelectedTalent(talent);
    // Set formData with default values from selectedTalent
    setFormData({
      name: talent.name || '',
      designation: talent.designation || '',
      department: talent.department || '',
      joiningDate: talent.joiningDate || '',
    });
    setUpdateModalVisible(true);
  };

  //function to perform put request when the update button is pressed inside the update modal
  const updateTalentInfo = async () => {
    try {
      //checking if the talentsdata is availble in both formData and selectedTalent
      if (selectedTalent && formData) {
        const response = await axios.put(
          `http://192.168.0.168:8080/api/talent/info/${selectedTalent.infoId}`,
          formData,
        );
        console.log('Update Response:', response.data);
        const updatedTalent = response.data;
        //updating the talents array my iterating through the array and putting new value for the current seleted talent
        const updatedTalents = talents.map(talent =>
          talent.infoId === updatedTalent.infoId ? updatedTalent : talent,
        );
        setTalents(updatedTalents);
        setUpdateModalVisible(false);
        Alert.alert('Success', 'Data updated successfully');
      }
    } catch (error) {
      console.error('Error updating talent info:', error);
      Alert.alert('Error', 'Failed to update data');
    }
  };

  //function to close update modal.
  const closeUpdateModal = () => {
    setUpdateModalVisible(false);
    setSelectedTalent(null);
    setFormData(null);
  };

  //function to open main modal.
  const openModal = () => {
    setModalContent(true);
  };

  //function to close main modal.
  const closemodal = () => {
    setModalContent(false);
  };

  //sample function to get console log of all the formdata.
  const updateData = formData => {
    console.log('Form Data:', formData);
  };

  //useEffect hook fetch the data from the get request when the page is rendered at the start (one time)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.0.168:8080/api/talent/info');
        //converting to json
        const data = await response.json();
        setTalents(data);
      } catch (error) {
        console.error('Error fetching talents:', error);
      }
    };
    //fetchData func called .
    fetchData();
  }, []);

  //performing delete request based on the id.
  const deletefunc = async id => {
    try {
      await axios.delete(`http://192.168.0.168:8080/api/talent/delete/${id}`);
      //updating the talents array by removing deleted item id.
      setTalents(talents.filter(talent => talent.infoId !== id));
    } catch (error) {
      console.error(error);
    }
  };

  //gets the index of talents as paramter whicheven index is pressed it comes here.
  const toggleTalent = index => {
    if (expandedTalentIndex === index) {
      setExpandedTalentIndex(null);
    } else {
      setExpandedTalentIndex(index);
    }
  };
  //whenever the expandedindex === current index will return a new view which has additional data.
  const renderAdditionalDetails = (talent, index) => {
    if (expandedTalentIndex === index) {
      return (
        <View style={TalentStyles.additionalDetails}>
          <View style={TalentStyles.listElementbottom}>
            <Text style={TalentStyles.additional}>
              {' '}
              TalentId : {talent.talentId}
            </Text>
            <Text style={TalentStyles.additional}>
              {' '}
              Department :{talent.department}
            </Text>
          </View>
        </View>
      );
    }
    return null;
  };

  //return
  return (
    <View>
      {/* main container starts here */}
      <View style={TalentStyles.mainContainer}>
        <View style={TalentStyles.headerBackground}>
          {/* header component with 3 buttons backarrow,filter button and availabilityButton */}
          <View style={TalentStyles.headerContainer}>
            <View style={TalentStyles.iconContainer}>
              <TouchableOpacity>
                <Icon
                  name="arrow-back-outline"
                  size={30}
                  color="#486EAF"
                  style={TalentStyles.iconstyle}
                />
              </TouchableOpacity>
            </View>
            <View style={TalentStyles.filtercontainer}>
              <View style={TalentStyles.filerOutline}>
                <View style={TalentStyles.filterButtonwrapper}>
                  <View style={TalentStyles.filterButton}>
                    <Text style={TalentStyles.filtertext}>Filter</Text>
                    <FIcon
                      name="filter"
                      size={20}
                      color="#486EAF"
                      style={{marginLeft: 5}}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={TalentStyles.availableContainer}>
              <View style={TalentStyles.filerOutline}>
                <View style={TalentStyles.availabilityButtonwrapper}>
                  <View style={TalentStyles.availabilityButton}>
                    <Text style={TalentStyles.availabilityText}>
                      Availability
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* the next section with search box and search icon  */}
        <View style={TalentStyles.searchBoxContainer}>
          <View style={TalentStyles.searchboxWrapper}>
            <View style={TalentStyles.searchBox}>
              <TextInput
                placeholder="Search Here.."
                placeholderTextColor={'#7077A1'}
                style={TalentStyles.searchInputBox}
              />
            </View>
            <TouchableOpacity>
              <View style={TalentStyles.searchIcon}>
                <FIcon
                  name="search"
                  size={20}
                  color="#fff"
                  style={TalentStyles.searchIconstyle}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* main body starts here */}
        <View style={TalentStyles.bodyContainer}>
          {/* shows no.of talents using talent.length property */}
          <View style={TalentStyles.countofemp}>
            <Text style={TalentStyles.count}>Total No. of Talents </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                fontFamily: 'Roboto-Bold',
              }}>
              {talents.length}
            </Text>
          </View>
          <View style={TalentStyles.listwrapper}>
            {/* storing all the list of talents inside a ScrollView */}
            <ScrollView
              style={TalentStyles.listcontainer}
              showsVerticalScrollIndicator={true}>
              {/* talents array mapping the talent based on their index */}
              {talents.map((talent, index) => (
                <View
                  key={index}
                  style={[
                    TalentStyles.listElement,
                    {backgroundColor: '#ffffff'},
                  ]}>
                  {/* passing index value to toggleTalent  */}

                  <View key={index} style={TalentStyles.row}>
                    <FIcon
                      name="user-circle"
                      size={30}
                      color="#486EAF"
                      style={{
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginRight: 10,

                        marginVertical: 5,
                      }}
                    />
                    {/* providing data fetch from the database */}
                    <View style={TalentStyles.listText}>
                      <TouchableOpacity onPress={() => toggleTalent(index)}>
                        <Text style={TalentStyles.name}>{talent.name}</Text>
                        <Text style={TalentStyles.designation}>
                          {talent.designation}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    {/* update icon when pressed calls update modal  */}
                    <View style={TalentStyles.iconContainer}>
                      <TouchableOpacity onPress={openUpdateModal}>
                        <Micon name="account-edit" size={30} color="#486EAF" />
                      </TouchableOpacity>
                    </View>
                    {/* delete icon when pressed calls delete function */}
                    <View style={TalentStyles.iconContainer}>
                      <TouchableOpacity
                        onPress={() => deletefunc(talent.infoId)}>
                        <MaterialIcon name="delete" size={30} color="#486EAF" />
                      </TouchableOpacity>
                    </View>
                  </View>

                  {/* function to render additional details basedon the click */}
                  {renderAdditionalDetails(talent, index)}
                </View>
              ))}
            </ScrollView>
          </View>
          {/* update modal */}
          <Modal
            visible={updateModalVisible}
            animationType="slide"
            transparent={true}>
            <View style={TalentStyles.modalContainer}>
              <View style={TalentStyles.modalContent}>
                <View style={TalentStyles.modalHeader}>
                  <Text style={TalentStyles.headerTextStyle}>
                    Update Talent Info
                  </Text>
                  <TouchableOpacity onPress={closeUpdateModal}>
                    <MaterialIcon
                      name="close"
                      size={30}
                      color="#486EAF"
                      style={TalentStyles.closeIcon}
                    />
                  </TouchableOpacity>
                </View>
                <View style={TalentStyles.modalBody}>
                  <Text style={TalentStyles.inputLabel}>Enter Your Name</Text>
                  <TextInput
                    value={formData ? formData.name : ''}
                    onChangeText={text =>
                      setFormData({...formData, name: text})
                    }
                    placeholder="Full Name"
                    placeholderTextColor={'grey'}
                    style={TalentStyles.textinputstyle}
                  />
                  <Text style={TalentStyles.inputLabel}>Department</Text>
                  <View style={{}}>
                    <Picker
                      selectedValue={formData ? formData.department : ''}
                      onValueChange={text =>
                        setFormData({...formData, department: text})
                      }>
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
                  <Text style={TalentStyles.inputLabel}>
                    Enter your Designation
                  </Text>
                  <TextInput
                    placeholder="Designation"
                    placeholderTextColor={'grey'}
                    value={formData ? formData.designation : ''}
                    onChangeText={text =>
                      setFormData({...formData, designation: text})
                    }
                    style={TalentStyles.textinputstyle}
                  />
                  <Text style={TalentStyles.inputLabel}>
                    Enter Your Date of Joining
                  </Text>
                  <TextInput
                    value={formData ? formData.joiningDate : ''}
                    onChangeText={text =>
                      setFormData({...formData, joiningDate: text})
                    }
                    placeholder="Joining date"
                    placeholderTextColor={'grey'}
                    style={TalentStyles.textinputstyle}
                  />
                  {/* Update button */}
                  <TouchableOpacity onPress={updateTalentInfo}>
                    <View style={TalentStyles.updateButton}>
                      <Text style={TalentStyles.updateButtonText}>Update</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          {/* update modal closes here */}

          {/* main modal container */}
          <View style={TalentStyles.modalbuttoncontainer}>
            <TouchableOpacity onPress={openModal}>
              <View style={TalentStyles.modalbutton}>
                <View style={TalentStyles.iconholder}>
                  <ADIcon name="adduser" size={30} color="#fff" />
                </View>
                <Text style={TalentStyles.modalButtonText}>Create</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* main modal*/}
        <Modal visible={modalcontent} animationType="slide" transparent={true}>
          {/* calling a custom component which has stepper and forms to get input */}
          <Stepper
            formData={formData}
            setFormData={setFormData}
            closeModal={closemodal}
            updateTalent={updateData}
          />
        </Modal>

        <Modal
          visible={modalUpdatecontent}
          animationType="slide"
          transparent={true}>
          {selectedTalent && ( 
            <EditStepper
              closeModal={closemodal}
            />
          )}
        </Modal>
      </View>
    </View>
  );
};

export default Talent;
