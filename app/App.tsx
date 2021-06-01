/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeView from './screens/Home-view';
import LoginView from './screens/Login-view';
import InputTextComponent from '../app/components/InputTextComponent';
import CheckBoxInfo from '../app/components/CheckBoxInfo';
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

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={null} initialRouteName="View21">
        <Stack.Screen component={View21} name="View21" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
