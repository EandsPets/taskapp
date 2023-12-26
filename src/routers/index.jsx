import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DashboardScreen from '../containers/dashboardScreen'
import TaskListScreen from '../containers/taskListScreen'
import SettingScreen from '../containers/settingScreen'
import LoginScreen from '../containers/loginScreen'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="TavRouter" component={TavRouter} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TavRouter = () => (
  <Tab.Navigator>
    <Tab.Screen name="Dashboard" component={DashboardScreen} />
    <Tab.Screen name="TaskList" component={TaskListScreen} />
    <Tab.Screen name="Setting" component={SettingScreen} />
  </Tab.Navigator>
);

export default MainRouter;