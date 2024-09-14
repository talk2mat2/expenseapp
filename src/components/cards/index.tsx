import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Card = () => {
  return (
    <View>
      <Image
        resizeMode="stretch"
        style={styles.card}
        source={require('../../assets/cardDark.png')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    height: "100%",
    width: '100%',
    borderRadius:20
  },
});
export default Card;
