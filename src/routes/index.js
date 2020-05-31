import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import List from '../pages/List';
import Edit from '../pages/Edit';

const AppStack = createStackNavigator();

const AppRoute = () => (
  <AppStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#424242'},
      headerTintColor: '#ffffff',
    }}>
    <AppStack.Screen component={List} name="List" />
    <AppStack.Screen component={Edit} name="Edit" />
  </AppStack.Navigator>
);
export default AppRoute;
