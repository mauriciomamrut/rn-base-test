import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import screenOptions from 'navigation/screenOptions';
import authScreens from 'navigation/screens/authScreens';
import { ABOUT_US } from 'utils/route';

const Stack = createStackNavigator();

const AboutUsStack = () => (
  <Stack.Navigator initialRouteName={ABOUT_US}>
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

export default AboutUsStack;
