import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

type Props = {
  title?: string;
  text1?: string;
  text2?: string;
};

const CheckBoxInfo = ({title, text1, text2}: Props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
        <Text style={styles.mainText}>{`${title}:`}</Text>
        <View style={styles.subBodyContainer}>
          <View style={styles.checkBoxContainer}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
          </View>
          <View>
            <Text>{text1}</Text>
            <Text>{text2}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: 'red',
  },
  bodyContainer: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '110%',
    padding: 10,
  },
  mainText: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Roboto-Black',
    marginVertical: 10,
  },
  checkBoxContainer: {
    marginRight: 20,
  },
  subBodyContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '90%',
    left: 15,
  },
  checkbox: {},
});
export default CheckBoxInfo;
