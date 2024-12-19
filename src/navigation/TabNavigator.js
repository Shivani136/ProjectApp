import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductList from '../screens/ProductList';
import AddProduct from '../screens/AddProduct';
import Home from '../screens/Home';
import MyProfile from '../screens/MyProfile';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
    initialRouteName='Products'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;

          // Set images for each tab
          if (route.name === 'Home') {
            iconSource = focused
              ? require('../Assests/image/home.png') // Active home image
              : require('../Assests/image/home.png'); // Inactive home image
          } else if (route.name === 'Products') {
            iconSource = focused
              ? require('../Assests/image/grid.png') // Active product list image
              : require('../Assests/image/grid.png'); // Inactive product list image
          } else if (route.name === 'Profile') {
            iconSource = focused
              ? require('../Assests/image/person-add.png') // Active profile image
              : require('../Assests/image/person-add.png'); // Inactive profile image
          }

          return <Image source={iconSource} style={styles.tabIcon} />;
        },
        tabBarActiveTintColor: '#4CAF50', // Active tab color
        tabBarInactiveTintColor: 'gray',  // Inactive tab color
        tabBarStyle: {
          backgroundColor: '#FFFFFF', // Background color of tab bar
          height: 60, // Adjust tab height
          paddingBottom: 10,
        },
        headerShown: false, // Remove screen header
      })}
    >
      {/* <Tab.Screen name="Home" component={Home} /> */}
      <Tab.Screen name="Home" component={AddProduct} />
      <Tab.Screen name="Products" component={ProductList} />
      <Tab.Screen name="Profile" component={MyProfile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 25, // Adjust size of tab icon
    height: 25,
    resizeMode: 'contain', // Maintain aspect ratio
  },
});
