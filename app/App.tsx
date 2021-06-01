/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeView from './screens/Home-view';
import LoginView from './screens/Login-view';
import View7 from './screens/View7';
import View8 from './screens/View8';
import View9 from './screens/View9';
import View11 from './screens/View11';
import View13 from './screens/View13';
import View15 from './screens/View15';
import View17 from './screens/View17';
import View18 from './screens/View18';
import View19 from './screens/View19';
import View20 from './screens/View20';
import View21 from './screens/View21';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'} initialRouteName="LoginView">
        <Stack.Screen component={LoginView} name="LoginView" />
        <Stack.Screen component={HomeView} name="HomeView" />
        <Stack.Screen component={View7} name="View7" />
        <Stack.Screen component={View8} name="View8" />
        <Stack.Screen component={View9} name="View9" />
        <Stack.Screen component={View11} name="View11" />
        <Stack.Screen component={View13} name="View13" />
        <Stack.Screen component={View15} name="View15" />
        <Stack.Screen component={View17} name="View17" />
        <Stack.Screen component={View18} name="View18" />
        <Stack.Screen component={View19} name="View19" />
        <Stack.Screen component={View20} name="View20" />
        <Stack.Screen component={View21} name="View21" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
