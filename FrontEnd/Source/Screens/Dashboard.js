import {View, Text, TouchableOpacity, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Dashboard = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontFamily: 'Roboto-Bold',
          color: '#f3f',
          fontSize: 20,
          textAlign: 'center',
        }}>
        This is Dashboard
      </Text>
    </View>
  );
};

export default Dashboard;
