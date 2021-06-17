/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {StatusBar} from 'react-native';

import Header from '../components/Header';

import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<any>;
}

const View17 = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header onPress={() => navigation.goBack()} navigation={navigation} />
      <ScrollView
        scrollEnabled={true}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.calenderContainer}>
          <TouchableOpacity>
            <View style={styles.buttonCalender}>
              <Text style={styles.terminationText}>FROM</Text>
              <Text style={styles.dataText}>7/7/2020</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.buttonCalender}>
              <Text style={styles.terminationText}>TO</Text>
              <Text style={styles.dataText}>10/10/2021</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text>dasd</Text>
      </ScrollView>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    width: '100%',
  },
  calenderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonCalender: {
    borderWidth: 2,
    borderColor: '#dcdcdc',
    width: 160,
    marginHorizontal: 5,
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataText: {
    paddingHorizontal: 2,
    fontSize: 15,
    fontFamily: 'Roboto-Black',
  },
  terminationText: {
    paddingHorizontal: 2,
    fontSize: 7,
    fontFamily: 'Roboto-Black',
    bottom: 5,
    right: 10,
  },
});
export default View17;
