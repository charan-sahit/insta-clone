import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from './components/header';
import HomeScreen from './screens/HomeScreen';
import Search from './screens/Search';
import Reels from './screens/Reels';
import Profile from './screens/Profile';
import Activity from './screens/Activity';
import StoryView from './components/storyView';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionic from 'react-native-vector-icons/Ionicons';
import FriendProfile from './components/FriendProfile';
import EditProfile from './components/EditProfile';
/* const App = () => {


  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomTabScreen = () => (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50
        },
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if(route.name === 'Home'){
            iconName = focused ? 'home-sharp' : 'home-outline';
            size = focused ? size +8: size +2;
          }else if(route.name === 'Search'){
            iconName = focused ? 'search' : 'search';
            
          }
          return <Ionic name={iconName} size={size} color={color} />
        }
      })}

    >
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  )


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )

} */

const App = () => {
  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 50,
          },

          tabBarIcon: ({focused, size, colour}) => {
            let iconName;
             if (route.name === 'Search') {
              iconName = focused ? 'search' : 'ios-search-outline';
            }
            else  if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              
            } 
            else if (route.name === 'Reels') {
              iconName = focused
                ? 'caret-forward-circle'
                : 'caret-forward-circle-outline';
            } else if (route.name === 'Activity') {
              iconName = focused ? 'ios-heart' : 'ios-heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
              size = focused ? size + 8 : size ;
            }

            return <Ionic name={iconName} size={size} color={colour} />;
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
        
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} 
          options={{ headerTitle: <Header /> }}
        />
        <Stack.Screen name="StoryView" component={StoryView} />
        <Stack.Screen name="FriendProfile" component={FriendProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; 










/* return (
  <SafeAreaView >
   
    <HomeScreen />  
  </SafeAreaView>
) */