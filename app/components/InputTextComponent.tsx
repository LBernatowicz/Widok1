import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';

type Props = {
  title?: string;
  subTitle?: string;
  placeHolder?: string;
};

const InputTextComponent = ({title, subTitle, placeHolder}: Props) => {
  const [text, onChangeText] = useState(null);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.textContainer}>{title}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.loginInputContainer}
          onChangeText={onChangeText}
          value={text}
          placeholder={placeHolder}
        />
      </View>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTextContainer}>{subTitle}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
 
  },
  titleContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    left: 20,
    paddingVertical: 5,
  },
  subTitleContainer: {
    alignItems: 'flex-end',
    right: 70,
  },
  inputContainer: {
    alignSelf: 'center',
  },
  loginInputContainer: {
    width: 308,
    height: 47,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#dcdcdc',
  },
  subTextContainer: {
    color: 'black',
    fontSize: 11,
  },
  textContainer: {
    color: 'black',
    fontFamily: 'Roboto-Black',
    fontSize: 11,
  },
});
export default InputTextComponent;
