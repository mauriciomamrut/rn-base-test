import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import screenOptions from 'navigation/screenOptions';
import authScreens from 'navigation/screens/authScreens';
import { USEFUL_COMPONENTS } from 'utils/route';

const Stack = createStackNavigator();

const UsefulComponentsStack = () => (
  <Stack.Navigator initialRouteName={USEFUL_COMPONENTS}>
    {authScreens.map(({ name, component: Component, options }) => (
      <Stack.Screen
        name={name}
        key={name}
        options={{
          ...screenOptions,
          ...(options || {}),
        }}
      >
        {props => <Component {...props} />}
      </Stack.Screen>
    ))}
  </Stack.Navigator>
);

export default UsefulComponentsStack;
