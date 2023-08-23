import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SigninScreen from '../screens/SigninScreen'
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmail from '../screens/ConfirmEmail';
import Forgotpassword from '../screens/Forgotpassword';
import Resetpassword from '../screens/Resetpassword';
import Home from '../screens/Home';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signin" component={SigninScreen}/>
        <Stack.Screen name="signup" component={SignUpScreen}/>
        <Stack.Screen name="confirm" component={ConfirmEmail}/>
        <Stack.Screen name="forgotton" component={Forgotpassword}/>
        <Stack.Screen name="reset" component={Resetpassword}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;