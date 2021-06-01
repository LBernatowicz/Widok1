/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Header from '../components/Header';
import {StackNavigationProp} from '@react-navigation/stack';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'NAMES',
    subTitle1: 'Michelle & George Jonhson',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'ENAIL',
    subTitle1: 'michelle.madison@mail.com',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'PHONE NUMBER',
    subTitle1: '+12 345 678 910',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'CITY',
    subTitle1: 'New York',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'COUNTRY/REGION',
    subTitle1: 'United States',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'NOTES',
    subTitle1: "Hi! My name is John. I'm a creative geek",
    subTitle2: 'from San Francisco, CA. I enjoy creating eye...',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'CURRENT STATUS',
    subTitle1: 'New',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'ENVELOPE',
    subTitle1: 'Enveloppe',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'CONSULTANT',
    subTitle1: 'John Doe',
  },
];

const Item = ({title, subTitle1}: any) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text>{subTitle1}</Text>
  </View>
);

interface Props {
  navigation: StackNavigationProp<any>;
}

const View18 = ({navigation}: Props) => {
  const renderItem = ({item}: any) => (
    <Item title={item.title} subTitle1={item.subTitle1} />
  );
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header onPress={() => navigation.goBack()} navigation={navigation} />
      <ScrollView
        scrollEnabled={true}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.bodyContainer}>
          <View style={{width: '100%'}}>
            <Image
              style={styles.logoImageContainer}
              source={require('../image/3-4.png')}
            />
          </View>
          <View style={styles.titleContainer}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 10,
                backgroundColor: 'white',
                height: 33,
                width: '42%',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
              <Image
                style={{transform: [{rotate: '180deg'}]}}
                source={require('../image/arrow.png')}
              />
              <Text style={styles.mainText}>STEP 3/4</Text>
              <View style={{}}>
                <Image
                  style={styles.imageContainer}
                  source={require('../image/arrow.png')}
                />
              </View>
            </View>
            <View style={{backgroundColor: 'white', marginBottom: 20}}>
              <Text>Confirmation of the data</Text>
            </View>
          </View>
          <View style={{alignItems: 'center', width: '100%'}}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.buttonMainContainer}>
            <TouchableOpacity
              onPress={() => console.log('elo')}
              style={styles.buttonContainer}>
              <View>
                <Text style={styles.loginTextContainer}>SAVE CHANGE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  bodyContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginHorizontal: 46,
    marginTop: 20,
  },
  imageContainer: {},
  titleContainer: {
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'Roboto-Black',
  },
  loginTextContainer: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Roboto-Black',
  },
  buttonContainer: {
    backgroundColor: '#232628',
    width: 297,
    height: 47,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonMainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 50,
  },
  logoImageContainer: {},
  contentContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
  },
  checkContainer: {
    position: 'absolute',
  },
  textContainer: {
    color: 'black',
    fontSize: 13,
    fontFamily: 'Roboto-Black',
    marginBottom: 5,
  },
  titleText: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'Roboto-Black',
  },
  subTitleText: {
    color: 'black',
    marginBottom: 5,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Roboto-Black',
  },
  subTitle1: {
    color: 'black',
    fontSize: 15,
  },
});
export default View18;
