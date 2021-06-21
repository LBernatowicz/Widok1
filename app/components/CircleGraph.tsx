import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';

const size = 128;
const strokeWidth = 15;
const center = size / 2;
const radius = (size - strokeWidth) / 2;
const circumference = radius * 2 * Math.PI;

type Props = {
  complete?: number;
  total?: number;
  titleText?: string;
  titleSubText?: string;
  leftDirection: boolean;
  strokeColor: string;
  bcgColor?: string;
  bankList?: boolean;
};

function calc(x, y) {
  return Math.round((x * 100) / y);
}

const CheckBoxInfo = ({
  complete,
  total,
  titleText,
  titleSubText,
  leftDirection,
  strokeColor,
  bcgColor,
  bankList,
}: Props) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      {leftDirection === true ? (
        <View
          style={[
            styles.leftDirectionContainer,
            {backgroundColor: `${bcgColor}`},
          ]}>
          <View style={styles.bodyContainer}>
            <Svg width={size} height={size}>
              <G rotation="-90" origin={center}>
                <Circle
                  stroke="#d3d3d3"
                  cx={center}
                  cy={center}
                  r={radius}
                  fillOpacity={1}
                  strokeWidth={strokeWidth}
                />
                <Circle
                  stroke={strokeColor}
                  cx={center}
                  cy={center}
                  r={radius}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={
                    -(
                      circumference -
                      (circumference * calc(complete, total)) / 100
                    )
                  }
                  fillOpacity={1}
                />
              </G>
            </Svg>
            <View style={{position: 'absolute'}}>
              <Text style={styles.graphTitleText}>{`${calc(
                complete,
                total,
              )}%`}</Text>
              <Text style={styles.graphSubTitleText}>{`Total:${total}`}</Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>{titleText}</Text>
            <Text style={styles.titleSubText}>{titleSubText}</Text>
            {bankList === true ? (
              <View style={styles.bankContainer}>
                <TouchableOpacity style={styles.bankListContainer}>
                  <Image
                    source={require('../image/arrow.png')}
                    style={{transform: [{scale: 0.8}]}}
                  />
                  <Text style={styles.bankListText}>See the list of banks</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>
      ) : (
        <View
          style={[
            styles.leftDirectionContainer,
            {backgroundColor: `${bcgColor}`},
          ]}>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>{titleText}</Text>
            <Text style={styles.titleSubText}>{titleSubText}</Text>
            {bankList === true ? (
              <View style={styles.bankContainer}>
                <TouchableOpacity style={styles.bankListContainer}>
                  <Image
                    source={require('../image/arrow.png')}
                    style={{transform: [{scale: 0.8}]}}
                  />
                  <Text style={styles.bankListText}>See the list of banks</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
          <View style={styles.bodyContainer}>
            <Svg width={size} height={size}>
              <G rotation="-90" origin={center}>
                <Circle
                  stroke="#d3d3d3"
                  cx={center}
                  cy={center}
                  r={radius}
                  fillOpacity={1}
                  strokeWidth={strokeWidth}
                />
                <Circle
                  stroke={strokeColor}
                  cx={center}
                  cy={center}
                  r={radius}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={
                    -(
                      circumference -
                      (circumference * calc(complete, total)) / 100
                    )
                  }
                  fillOpacity={1}
                />
              </G>
            </Svg>
            <View style={{position: 'absolute'}}>
              <Text style={styles.graphTitleText}>{`${calc(
                complete,
                total,
              )}%`}</Text>
              <Text style={styles.graphSubTitleText}>{`Total:${total}`}</Text>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'space-between',
    borderTopWidth: 2,
    borderColor: '#f5f5f5',
  },
  bodyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  graphTitleText: {
    fontSize: 35,
    fontFamily: 'Roboto-Black',
  },
  graphSubTitleText: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Roboto-Black',
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'Roboto-Black',
    right: 30,
  },
  titleSubText: {
    fontSize: 10,
    top: 20,
    left: 25,
    width: 150,
  },
  leftDirectionContainer: {
    flexDirection: 'row',
    paddingVertical: 30,
    justifyContent: 'center',
    flex: 1,
  },
  textContainer: {
    flexDirection: 'column',
    width: 200,
    paddingHorizontal: 40,
    alignItems: 'flex-end',
  },
  bankContainer: {
    top: 40,
    left: 28,
  },
  bankListContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bankListText: {
    fontSize: 15,
    fontFamily: 'Roboto-Black',
    width: 150,
  },
});
export default CheckBoxInfo;
