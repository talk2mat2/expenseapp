import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Card from '../cards';
import {SubText, StyledText} from '../../helpers/styles';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const CardView = () => {
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', top: 100, zIndex: 3, left: '33%'}}>
        <SubText>Total Valance</SubText>
      </View>
      <View style={{position: 'absolute', top: 130, zIndex: 3, left: '33%'}}>
        <StyledText fontSize={30}>$98,657,00</StyledText>
      </View>
      <View style={{position: 'absolute', top: '8%', zIndex: 3, left: '90%'}}>
        <SubText>---</SubText>
      </View>
      <Card />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 200,
    paddingHorizontal: 15,
    alignSelf:"center",
    width: windowWidth,
    position: 'relative',
  },
});
export default CardView;
