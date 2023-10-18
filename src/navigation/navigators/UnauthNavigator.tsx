import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import screenOptions from 'navigation/screenOptions';
import unauthScreens from 'navigation/screens/unauthScreens';
import { RootState } from 'redux/store';
import { LOGIN, WELCOME } from 'utils/route';

const Stack = createStackNavigator();

const UnauthNavigator = () => {
  const { neverSignedIn } = useSelector((state: RootState) => state.nav);

  return (
    <Stack.Navigator
      // implement welcome and login screens
      initialRouteName={neverSignedIn ? WELCOME : LOGIN}
      screenOptions={screenOptions}
    >
      {unauthScreens.map(({ name, component }) => (
        <Stack.Screen name={name} component={component} key={name} />
      ))}
    </Stack.Navigator>
  );
};

export default UnauthNavigator;
