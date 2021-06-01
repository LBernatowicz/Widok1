import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import {StatusBar} from 'react-native';

import Header from '../components/Header';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abbfafaf28ba',
    title: 'Adrian Dobrzyńsi',
    subTitle: 'Joe Doe',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd9asdasdassd1aa97f63',
    title: 'Adrian Kobrzyński',
    subTitle: 'Joe Doe',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1dsd45571e29d72',
    title: 'Adrian Baliński',
    subTitle: 'Joe Doe',
  },
  {
    id: 'bd7acbea-c1b1-46ca2-aed5-3aaad53abb28ba',
    title: 'Adrian Kieśliński',
    subTitle: 'Consultant',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aassadsada97f63',
    title: 'Adrian Ficiński',
    subTitle: 'Consultant',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145asdasdas571e29d72',
    title: 'Adrian Saliński',
    subTitle: 'Consultant',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53asdasdabb28ba',
    title: 'Adrian Kaczyński',
    subTitle: 'Consultant',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aaaaad97f63',
    title: 'Adrian Brzeziński',
    subTitle: 'Consultant',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145assd571e29d72',
    title: 'Adrian Goldszmit',
    subTitle: 'Consultant',
  },
  {
    id: '58694a0f-3da1-471fasd-bd96-145571e29d72',
    title: 'Adrian Piast',
    subTitle: 'Consultant',
  },
];

const Item = ({title, subTitle}: any) => (
  <View>
    <View style={styles.breakContainer} />
    <View style={styles.cafelContainer}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'flex-start',
          left: 50,
          flex: 4 / 5,
        }}>
        <Text style={styles.mainTilte}>{title}</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'flex-start',
          rght: 10,
          flex: 1 / 5,
        }}>
        <Text style={styles.subTilte}>{subTitle}</Text>
      </View>
    </View>
    <View style={styles.breakContainer} />
  </View>
);

const View20 = () => {
  const renderItem = ({item}) => (
    <Item title={item.title} subTitle={item.subTitle} />
  );
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header />
      <ScrollView
        scrollEnabled={true}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.bodyContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.mainText}>WIN CASES</Text>
          </View>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTextContainer}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>
          <View>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
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
    backgroundColor: '#FAFAFA',
    flex: 1,
  },
  bodyContainer: {
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 40,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 60,
  },
  subTitleContainer: {
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    marginBottom: 20,
  },
  mainText: {
    fontSize: 20,
    fontFamily: 'Roboto-Black',
  },
  subTextContainer: {
    textAlign: 'center',
  },
  cafelContainer: {
    width: '100%',
    backgroundColor: 'white',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  breakContainer: {
    width: '100%',
    backgroundColor: '#FAFAFA',
    height: 6,
  },
  mainTilte: {
    fontSize: 17,
    fontFamily: 'Roboto-Black',
  },
  subTilte: {
    fontSize: 11,
  },
  contentContainer: {
    alignItems: 'center',
    width: '100%',
  },
});
export default View20;
