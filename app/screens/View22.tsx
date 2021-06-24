/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal,
  FlatList,
} from 'react-native';
import {StatusBar} from 'react-native';
// @ts-ignore
import Pie from 'react-native-pie';
// @ts-ignore
import CalendarPicker from 'react-native-calendar-picker';

import Header from '../components/Header';
import CircleGraph from '../components/CircleGraph';

import {StackNavigationProp} from '@react-navigation/stack';
const {width} = Dimensions.get('window');

const DATA = [
  {
    id: '1',
    complete: 23,
    total: 100,
    titleText: 'WIN CASES',
    titleSubText:
      'Lorem ipsum dolor si amet, consectetur adipisicing elit, sed do eiusmod',
    leftDirection: true,
    strokeColor: 'red',
    bcgColor: 'white',
    bankList: false,
  },
  {
    id: '2',
    complete: 33,
    total: 55,
    titleText: 'WIN CASES',
    titleSubText:
      'Lorem ipsum dolor si amet, consectetur adipisicing elit, sed do eiusmod',
    leftDirection: false,
    strokeColor: 'blue',
    bcgColor: '#f5f5f5',
    bankList: false,
  },
  {
    id: '3',
    complete: 74,
    total: 132,
    titleText: 'WIN CASES',
    titleSubText:
      'Lorem ipsum dolor si amet, consectetur adipisicing elit, sed do eiusmod',
    leftDirection: true,
    strokeColor: 'purple',
    bcgColor: 'white',
    bankList: false,
  },
  {
    id: '4',
    complete: 93,
    total: 100,
    titleText: 'WIN CASES',
    titleSubText:
      'Lorem ipsum dolor si amet, consectetur adipisicing elit, sed do eiusmod',
    leftDirection: true,
    strokeColor: '#66cdaa',
    bcgColor: '#f5f5f5',
    bankList: false,
  },
  {
    id: '5',
    complete: 66,
    total: 77,
    titleText: 'WIN CASES',
    titleSubText:
      'Lorem ipsum dolor si amet, consectetur adipisicing elit, sed do eiusmod',
    leftDirection: true,
    strokeColor: '#daa520',
    bcgColor: 'white',
    bankList: true,
  },
  {
    id: '6',
    complete: 87,
    total: 100,
    titleText: 'WIN CASES',
    titleSubText:
      'Lorem ipsum dolor si amet, consectetur adipisicing elit, sed do eiusmod',
    leftDirection: true,
    strokeColor: '#6495ed',
    bcgColor: '#f5f5f5',
    bankList: false,
  },
  {
    id: '7',
    complete: 43,
    total: 150,
    titleText: 'WIN CASES',
    titleSubText:
      'Lorem ipsum dolor si amet, consectetur adipisicing elit, sed do eiusmod',
    leftDirection: true,
    strokeColor: '#7fffd4',
    bcgColor: 'white',
    bankList: false,
  },
  {
    id: '8',
    complete: 32,
    total: 185,
    titleText: 'WIN CASES',
    titleSubText:
      'Lorem ipsum dolor si amet, consectetur adipisicing elit, sed do eiusmod',
    leftDirection: true,
    strokeColor: '#deb887',
    bcgColor: '#f5f5f5',
    bankList: true,
  },
];
interface Props {
  navigation: StackNavigationProp<any>;
}

const View22 = ({navigation}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity style={styles.graphContainer}>
        <CircleGraph
          complete={item.complete}
          total={item.total}
          titleText={item.titleText}
          titleSubText={item.titleSubText}
          leftDirection={item.leftDirection}
          strokeColor={item.strokeColor}
          bcgColor={item.bcgColor}
          bankList={item.bankList}
        />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header onPress={() => navigation.goBack()} navigation={navigation} />
      <ScrollView>
        <FlatList
          ListHeaderComponentStyle={styles.contentContainer}
          ListHeaderComponent={
            <>
              <View style={styles.centeredView}>
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <View style={styles.calendarContainer}>
                        <Text style={styles.calendarText}>Calendar</Text>
                      </View>
                      <View style={styles.calender}>
                        <CalendarPicker onDateChange={null} width={290} />
                      </View>
                      <View style={styles.calenderButtonContainer}>
                        <TouchableOpacity
                          onPress={() => setModalVisible(!modalVisible)}>
                          <View style={styles.buttonSave}>
                            <Text style={styles.saveButtonText}>SAVE</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => setModalVisible(!modalVisible)}>
                          <View style={styles.buttonBack}>
                            <Text style={styles.backButtonText}>BACK</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
              <View style={styles.calenderContainer}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
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
              <View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 30,
                  }}>
                  <Pie
                    radius={110}
                    innerRadius={75}
                    sections={[
                      {
                        percentage: 40,
                        color: '#008b8b',
                      },
                      {
                        percentage: 9,
                        color: '#ff8c00',
                      },
                      {
                        percentage: 25,
                        color: '#cd5c5c',
                      },
                      {
                        percentage: 8,
                        color: '#4169e1',
                      },
                      {
                        percentage: 18,
                        color: '#800080',
                      },
                    ]}
                    dividerSize={0}
                    strokeCap={'butt'}
                  />
                  <View style={styles.gauge}>
                    <Text style={styles.gaugeTitleText}>50 CASES</Text>
                    <Text style={styles.gaugeText}>Total</Text>
                  </View>
                </View>
              </View>
              <View style={styles.statesConteiner}>
                <View style={styles.statesTextConteiner}>
                  <Text style={styles.statusText2}>CALCUL D'ENVELOPPE:</Text>
                  <Text style={styles.statusText1}>25 cases</Text>
                </View>
                <View style={styles.statesTextConteiner}>
                  <Text style={styles.statusText2}>COMPROMIS PREVU:</Text>
                  <Text style={styles.statusText1}>15 cases</Text>
                </View>
                <View style={styles.statesTextConteiner}>
                  <Text style={styles.statusText2}>COMPROMIS CIGNE:</Text>
                  <Text style={styles.statusText1}>10 cases</Text>
                </View>
              </View>
            </>
          }
          data={DATA}
          scrollEnabled={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
      <View />
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    width: width,
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
    marginHorizontal: 10,
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataText: {
    fontSize: 15,
    fontFamily: 'Roboto-Black',
    backgroundColor: 'transparent',
  },
  terminationText: {
    paddingHorizontal: 2,
    fontSize: 7,
    fontFamily: 'Roboto-Black',
    bottom: 5,
    right: 10,
  },
  gauge: {
    position: 'absolute',
    width: 120,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#dcdcdc',
    fontSize: 15,
  },
  gaugeTitleText: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontFamily: 'Roboto-Black',
  },
  statesConteiner: {
    right: 30,
  },
  statesTextConteiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  statusText2: {
    fontSize: 12,
    fontFamily: 'Roboto-Black',
    width: 160,
    textAlign: 'right',
  },
  statusText1: {
    fontSize: 18,
    fontFamily: 'Roboto-Black',
    backgroundColor: 'transparent',
    textAlign: 'right',
    width: 80,
  },
  graphContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modalView: {
    marginTop: 56,
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 30,
    borderTopWidth: 0,
  },
  buttonBack: {
    width: 110,
    height: 40,
    borderWidth: 2,
    borderColor: '#dcdcdc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonSave: {
    width: 110,
    height: 40,
    borderWidth: 2,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  saveButtonText: {
    fontSize: 12,
    fontFamily: 'Roboto-Black',
    color: 'white',
  },
  backButtonText: {
    fontSize: 12,
    fontFamily: 'Roboto-Black',
    color: 'black',
  },
  calenderButtonContainer: {
    flexDirection: 'row',
  },
  calendarContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  calendarText: {
    fontSize: 20,
    fontFamily: 'Roboto-Black',
  },
  calender: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: 200,
  },
});
export default View22;
