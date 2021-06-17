import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

const barDotDimension = 20;

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

const View15_3 = () => {
  const renderItem = ({item}: any) => (
    <Item title={item.title} subTitle1={item.subTitle1} />
  );
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainStatsContainer}>
        <View style={styles.statusBarContainer}>
          <View style={styles.statusDotContainer}>
            <View style={styles.statusBarDot} />
          </View>
          <View style={styles.line} />
          <View style={styles.statusDotContainer}>
            <View style={styles.statusBarDot} />
          </View>
          <View style={styles.line} />
          <View style={styles.statusDotContainer}>
            <View style={styles.statusBarDotHalf} />
          </View>
          <View style={styles.line} />
          <View style={styles.statusDotContainer}>
            <View style={styles.statusBarDotQuart} />
          </View>
        </View>
      </View>
      <View style={styles.textStatusContainer}>
        <View>
          <Text style={styles.textStatusBar}>Info</Text>
        </View>
        <View style={{left: 18}}>
          <Text style={styles.textStatusBar}>Budget</Text>
        </View>
        <View style={{left: 25}}>
          <Text style={styles.textStatusBar}>Checkout</Text>
        </View>
        <View style={{left: 18}}>
          <Text style={styles.textStatusBar}>Completed</Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.titleContainer}>
          <TouchableOpacity>
            <View style={{}}>
              <Image
                style={{transform: [{rotate: '180deg'}]}}
                source={require('../image/arrow.png')}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.mainTitleContainer}>
            <Text style={styles.mainText}>STEP 3/4</Text>
          </View>
          <TouchableOpacity>
            <View style={{}}>
              <Image
                style={styles.imageContainer}
                source={require('../image/arrow.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.subTitleContainer}>
          <Text>Confirm of the data</Text>
        </View>
      </View>
      <View style={{alignItems: 'center', width: '100%'}}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBarDot: {
    backgroundColor: 'black',
    height: barDotDimension,
    width: barDotDimension,
    borderRadius: barDotDimension / 2,
  },
  statusBarDotHalf: {
    borderWidth: 6,
    height: barDotDimension,
    width: barDotDimension,
    borderRadius: barDotDimension / 2,
  },
  statusBarDotQuart: {
    borderWidth: 2,
    height: barDotDimension,
    width: barDotDimension,
    borderRadius: barDotDimension / 2,
  },
  statusDotContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: barDotDimension,
  },
  statusBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
  },
  textStatusBar: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Roboto-Black',
    paddingTop: 5,
  },
  textStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  mainStatsContainer: {
    alignItems: 'center',
  },
  mainText: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'Roboto-Black',
    paddingHorizontal: 20,
  },
  bodyContainer: {
    marginTop: 20,
  },
  mainTitleContainer: {},
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subTitleContainer: {
    marginTop: 10,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {},
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
export default View15_3;
