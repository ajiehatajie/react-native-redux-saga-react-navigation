
import React, { Component } from 'react'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import HomeScreen from '../screen/HomeScreen'
import LoginScreen from '../screen/LoginScreen'
import LoadingScreen from '../screen/LoadingScreen'
import DashboardScreen from '../screen/DashboardScreen';
 
const AppStack = createStackNavigator({ Home: HomeScreen,Dashboard: DashboardScreen });
const AuthStack = createStackNavigator({ SignIn: LoginScreen });

export default createSwitchNavigator(
  {
    AuthLoading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
