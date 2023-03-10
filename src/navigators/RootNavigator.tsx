import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import SubscribeScreen from '../screens/SubscribeScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen
        name="Subscribe"
        component={SubscribeScreen}
        options={{title: 'Subscribe'}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
