import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ChooseTheme from './screens/ChooseTheme';
import ChooseLanguage from './screens/ChooseLanguage';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Dashboard from './screens/Dashboard';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="ChooseTheme"
          component={ChooseTheme}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="ChooseLanguage"
          component={ChooseLanguage}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUp}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Dashboard"
          component={Dashboard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
