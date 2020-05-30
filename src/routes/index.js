import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import List from '../pages/List';
import Edit from '../pages/Edit';

const AppStack = createStackNavigator();

export default () => (
  <AppStack.Navigator>
    <AppStack.Screen component={List} name="List" />
    <AppStack.Screen component={Edit} name="Edit" />
  </AppStack.Navigator>
);
