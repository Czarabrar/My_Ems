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
const Talent2 = () => {
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
  const [buttonAnimation] = useState(new Animated.Value(1));
  const [rotationAnimation] = useState(new Animated.Value(0));
  const [selectedTalentId, setSelectedTalentId] = useState('');
  const [modalUpdatecontent, setModalUpdateContent] = useState(false);

  const handleButtonPress = id => {
    // Animate the button scale
    // rotationAnimation.setValue(0);

    Animated.sequence([
      Animated.timing(buttonAnimation, {
        toValue: 0.8,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(buttonAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    // Animate rotation with custom easing
    Animated.timing(rotationAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Open the modal after animations complete
    setTimeout(() => {
      setModalContent(true);
    }, 600);
    setSelectedTalentId(id); // Wait for animations to complete (adjust if needed)
  };

  // Interpolate rotation animation for button
  const buttonRotate = rotationAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const openUpdateModal = talent => {
    setSelectedTalent(talent);
    // console.log(talent, 'abrar');
    // Check if formData is null before setting it
    if (!formData) {
      // Set formData with default values from selectedTalent
      setFormData({
        name: talent.name || '',
        designation: talent.designation || '',
        department: talent.department || '',
        joiningDate: talent.joiningDate || '',
      });
    }

    setModalUpdateContent(true);
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
    setModalUpdateContent(false);
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
        const response = await fetch('http://192.168.175.232:8080/api/talent/info');
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
      await axios.delete(`http://192.168.175.232:8080/api/talent/delete/${id}`);
      //updating the talents array by removing deleted item id.
      setTalents(talents.filter(talent => talent.infoId !== id));
    } catch (error) {
      console.error(error);
    }
  };
  //tried this for updating all the other entities.
  const editTalent = talent => {
    setSelectedTalent(talent);
    openModal();
  };

  //function to style the talent array elements based on the index,(odd,even styling)
  const getRowStyle = index => {
    return index % 2 === 0 ? TalentStyles.evenRow : TalentStyles.oddRow;
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

  //tried applying array of colors to the talent values.
  const itemColors = ['#F9F5F6', '#E3F4F4', '#ECF9FF', '#FEFCF3', '#FFEEEE'];
  
  const handleModalClose = () => {

    closeupdatemodal(); // This should call the closeModal function passed from the parent component
  };
  
  
  const closeupdatemodal = () => {
    setModalUpdateContent(false);
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
                      <TouchableOpacity onPress={() => openUpdateModal(talent)}>
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
          {/* update modal closes here */}

          {/* main modal container */}
          <View style={TalentStyles.modalbuttoncontainer}>
            <Animated.View
              style={{
                transform: [{scale: buttonAnimation}, {rotate: buttonRotate}],
              }}>
              <TouchableOpacity onPress={handleButtonPress}>
                <View style={TalentStyles.modalbutton}>
                  <View style={TalentStyles.iconholder}>
                    <ADIcon name="adduser" size={30} color="#fff" />
                  </View>
                  <Text style={TalentStyles.modalButtonText}>Create</Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
        {/* main modal*/}

        <Modal
          visible={modalUpdatecontent}
          animationType="slide"
          transparent={true}>
          {selectedTalent && ( // Check if selectedTalent is not null
            <EditStepper
              talentId={selectedTalent.talentId}
              closeModal={closeUpdateModal} 
            />
          )}
        </Modal>

        <Modal visible={modalcontent} animationType="slide" transparent={true}>
          {/* calling a custom component which has stepper and forms to get input */}
          <Stepper
            formData={formData}
            setFormData={setFormData}
            closeModal={closemodal}
            updateTalent={updateData}
          />
        </Modal>
      </View>
    </View>
  );
};

export default Talent2;
