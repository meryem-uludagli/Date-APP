import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './tabNavigator';
import FilterScreen from '../screens/filterScreen';
import InfoScreen from '../screens/infoScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={TabNavigator} />

      <Stack.Screen name="FilterScreen" component={FilterScreen} />
      <Stack.Screen name="Info" component={InfoScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
