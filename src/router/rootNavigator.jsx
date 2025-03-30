import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './tabNavigator';
import FilterScreen from '../screens/filterScreen';
import InfoScreen from '../screens/infoScreen';
import {TABNAVIGATOR} from '../utils/Routes';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={TABNAVIGATOR.TABNAVIGATOR} component={TabNavigator} />
      <Stack.Screen name={TABNAVIGATOR.FILTER} component={FilterScreen} />
      <Stack.Screen name={TABNAVIGATOR.INFO} component={InfoScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
