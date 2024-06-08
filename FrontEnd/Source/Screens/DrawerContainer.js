import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import Talent from './Talent';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Talent2 from './Talent2';

const DrawerContainer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Talents"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerLeft: () => null,
          headerTintColor: '#fff',
        }}>
        <Drawer.Screen
          name="Executive Dashboard"
          component={Dashboard}
          options={{
            headerStyle: {
              backgroundColor: '#486EAF',
              height: 100,
            },
            headerTintColor: '#fff',
            headerTitle: () => null,
            headerRight: () => <TalentsHeader />,
            headerLeft: () => <Lefticon />,
          }}
        />
        <Drawer.Screen
          name="Executivet"
          component={Talent2}
          options={{
            headerStyle: {
              backgroundColor: '#486EAF',
              height: 100,
            },
            headerTintColor: '#fff',
            headerTitle: () => null,
            headerRight: () => <TalentsHeader />,
            headerLeft: () => <Lefticon />,
          }}
        />
        <Drawer.Screen
          name="Talents"
          component={Talent}
          options={{
            headerStyle: {
              backgroundColor: '#486EAF',
              height: 100,
            },
            headerTintColor: '#fff',
            headerTitle: () => null,
            headerRight: () => <TalentsHeader />,
            headerLeft: () => <Lefticon />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const TalentsHeader = () => {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <TouchableOpacity onPress={openDrawer}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          marginBottom: 10,
          marginRight: 25,
        }}>
        <Text
          style={{color: '#fff', fontSize: 28, fontFamily: 'Roboto-Medium'}}>
          Talents
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Lefticon = () => {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <TouchableOpacity onPress={openDrawer}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          marginLeft: 35,
          marginBottom: 10,
        }}>
        <Octicons name="three-bars" size={30} color="#fff" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default DrawerContainer;
