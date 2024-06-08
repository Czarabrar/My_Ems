import {StyleSheet} from 'react-native';
const TalentStyles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  headerBackground:{
backgroundColor:'#486EAF',
  },

  headerContainer: {
    width: '100%',
    height: 80,
    paddingTop:10,
    flexDirection: 'row',
    // borderBottomWidth:0.3,
    borderBottomColor: 'grey',
    backgroundColor: '#fff',
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    backgroundColor:'#EAEAEA'
  },
  countofemp:{
    width:'78%',
    borderWidth:1,
    borderColor:'#486EAF',
    backgroundColor:'#fff',
    marginBottom:10,
    paddingVertical:10,
    marginLeft:47,
    // marginRight:20,
    borderRadius:30,
    flexDirection:'row',
    justifyContent:'space-around'
  },

  iconContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  iconstyle: {
    marginLeft: 30,
  },
  filtercontainer: {
    flex: 1,
    justifyContent: 'center',
  },
  filerOutline: {},
  filterButtonwrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  availabilityButtonwrapper: {
    flexDirection: 'row',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#486EAF',
    backgroundColor:'#fff',
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 5,
  },
  availabilityButton: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#486EAF',
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: '#486EAF',
    color: '#fff',
  },
  filtertext: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#486EAF',
  },
  availabilityText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#fff',
  },
  availableContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  searchBoxContainer: {
    width: '100%',
    paddingVertical:15,
    backgroundColor:'#fff',
    justifyContent: 'center',
    backgroundColor:'#EAEAEA'
  },
  searchboxWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 20,
    paddingLeft: 38,
    paddingRight: 30,
  },
  searchBox: {
    width: '75%',
    borderTopWidth:1,
    borderLeftWidth:1,
    borderBottomWidth:1,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderColor: '#486EAF',
    
    backgroundColor:'#fff',
    paddingLeft:20
  },
  searchIcon: {
    width: 45,
    height: 51,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth:1,
    borderRightWidth:1,
    borderBottomWidth:1,
    borderColor:'#486EAF',
    backgroundColor:'#ffffff',
    // backgroundColor: '#486EAF',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  searchIconstyle: {
    color: '#486EAF',
    paddingRight:15
  },
  searchInputBox: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 0,
    color: '#000',
    fontFamily: 'Roboto-Regular',
    borderTopLeftRadius:30,
    borderBottomLeftRadius:30
  },
  bodyContainer: {
    width: '100%',
    height: '100%',
    // paddingTop:5,
    paddingHorizontal:10,
    backgroundColor:'#EAEAEA'
    
  },
  listcontainer: {
    width: '100%',
    height: '68%',
    paddingTop:10,
    flexGrow: 0,
    backgroundColor:'#EAEAEA',
    
  },
  listwrapper:{
    paddingTop:10,
    height:'97%',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    paddingHorizontal:10,
    
  },
  modalbuttoncontainer: {
    position: 'absolute',
    // left:130,
    right:30,
    bottom: 35,
    alignItems:'flex-end',
    width:'30%',
    height: '35%',

  },
  modalbutton: {
    width: 120,
    flexDirection:'row',
    height: 60,
    borderRadius: 35,
    backgroundColor: '#486EAF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconholder: {
    flexDirection:'row'
  },
  modaldiv: {
    width: '100%',
    height: '100%',
    borderRadius:10
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    paddingHorizontal:5,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#F3F3F3'
  },
  headerText: {},
  headerTextStyle: {
    textAlign: 'center',
    paddingLeft: 10,
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    color: '#3F3F3F',
  },

  closeIcon: {},
  modalLabel: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  closeIconStyle:{
    height:40,
    width:40,
    resizeMode:'contain',
    
  },
  modalLabelText: {
    fontSize: 13,
    color: '#002',
    fontFamily: 'Roboto-Regular',
    marginRight: 5,
  },
  highlightText: {
    fontSize: 16,
    color: '#486EAF',
    fontFamily: 'Roboto-Regular',
  },
  modalContent: {
    width: '100%',
    height: '86%',
    backgroundColor:'#F3F3F3',
    marginTop: '26%',
    borderWidth:2,
    borderColor:'#486EAF',
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    borderBottomLeftRadius:40,
    borderBottomRightRadius:40,
    paddingHorizontal: 10,
    paddingVertical: 10,
    elevation:5,
  },

  
  // bgcircle:{
  //   width:200,
  //   height:250,
  //   top:0,
  //   resizeMode:'cover',
  //   // flex:1,
  // },
  ModalheaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    flex: 2,
  },
  headerTextstyle: {
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    color: '#3F3F3F',
  },
  headericon: {},
  headericonstyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 8,
  },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 35,
    height: 35,
    borderRadius: 17,
    // backgroundColor: '#486EAF',
    // borderWidth: 2,
    // padding:10,
    paddingVertical:15,
    paddingHorizontal:15,
    borderWidth:1.5,
    borderColor: '#486EAF',
    marginHorizontal: 0,
    justifyContent:'center',
    alignItems:'center',
  },
  activeCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#486EAF',
    justifyContent:'center',
    alignItems:'center',
  },
  logoImage: {
    width: 27,
    height: 27,
    resizeMode: 'contain',
    alignItems:'center',
    justifyContent:'center',
    tintColor:'#486EAF'
  },
  activeLogo: {
    width:37,
    height:37,
    tintColor: '#fff', // Active logo color
  },
  line: {
    flex: 1,
    height: 3,
    backgroundColor: '#486EAF',
    // marginHorizontal: 5,
  },
  modalPage: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    padding: 20,
    borderBottomLeftRadius:40,
    borderBottomRightRadius:40,
    borderTopLeftRadius:40,
    borderTopRightRadius:40
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems:'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginVertical: 10,
    // marginHorizontal: 20,
    backgroundColor: '#F3F3F3',
    borderBottomLeftRadius:40,
    borderBottomRightRadius:40,
    
  },
  modalLeftButton: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#486EAF',
    marginRight: 50,
    width: 120,
  },
  startbutton:{
    // marginLeft:60,
    backgroundColor:'#486EAF',
    width:'100%',
    paddingHorizontal:100,
    paddingVertical:10,
    borderRadius:6,
    // marginRight:-100
    marginTop:10,
  },
  modalRightButton: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#486EAF',
    marginLeft: 50,
    width: 120,
    
  },
  modalButtonText: {
    fontFamily: 'Roboto-Medium',
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  modalSubmitButton: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#486EAF',
    marginLeft: 50,
    width: 120,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
     marginTop: -15,
  },
  stepContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F3F3F3',
  },
  formContainer: {
    flexGrow: 0,
    padding: 15,
    paddingBottom: 30,
    // borderWidth: 1
  },
  textinputstyle: {
    // borderBottomWidth: 0.6,
    // borderWidth:0.5,
    elevation:4,
    backgroundColor:'#fff',
    color:'#000',
    alignItems:'center',
    borderRadius:20,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    paddingLeft:15,
    paddingBottom: 12,
    marginBottom: 20,
    marginTop:5,
  },
  calendarInput:{
    elevation:4,
    backgroundColor:'#fff',
    color:'#000',
    borderRadius:20,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    paddingLeft:15,
    paddingBottom: 12,
    marginBottom: 20,
    marginTop:5,
    flexDirection:'row',
    
  },
  calenderText:{
    paddingTop:7,
    fontFamily:'Roboto-Bold',
    fontSize:16
  },
  inputLabel: {
    fontFamily: 'Roboto-Bold',
    marginTop: 10,
    marginBottom:3,
    color: '#003951',
    fontSize: 14,
    marginLeft:5,
  },
  pickerBoxStyle:{
    borderWidth:0.8,
    borderColor:'#486EAF',
    borderRadius:40,
    marginBottom:10
    
  },
  stepLabel: {
    color: 'black',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
  },
  stepuserimagecontainer: {
    alignItems: 'center',
  },
  userimgstyles: {
    width: 100,
    height: 100,
  },
  pickerelement: {
    color: '#000',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'right',
    width: '100%',
    padding: 10,
  },
  row2: {
    alignItems: 'right',
    width: '100%',
    padding: 10,
  },
  oddRow: {
    backgroundColor: '#fff',
  },
  evenRow: {
    backgroundColor: '#f0f0f0',
  },
  name: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: '#044',
    paddingTop:7,
  },
  designation: {
    fontSize: 13,
    color: '#555',
    paddingBottom:8,
  },
  count: {
    marginBottom: 5,
    marginLeft: 5,
    fontFamily: 'Roboto-Bold',
    fontSize:15,
  },

  listElement: {
    // height:70,
    paddingHorizontal:10,
    borderRadius:5,
    marginBottom:5,
    elevation:3,
    marginHorizontal:8,
  },
  listElementbottom: {
    // height:70,
    paddingLeft:15,
    borderRadius:5,
    marginBottom:5,
    backgroundColor:'#fff'
  },
  additional:{
    fontFamily:'Roboto-Medium',
    fontSize:15,
    paddingLeft:30,
  },
  listText: {
    width: '70%',
  },
  additionalDetails: {
    alignItems: 'right',
    width: '100%',
    // padding: 10,m
    marginTop:5,
    paddingBottom:5,
  },
  updateButton: {
    backgroundColor: '#486EAF',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  updateButtonText: {
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
});
export default TalentStyles;
