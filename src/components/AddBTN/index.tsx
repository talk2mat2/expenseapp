import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../helpers/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationProp} from '@react-navigation/native';

interface props {
  navigation: NavigationProp<any>;
}
const AddBTN = ({navigation}: props) => {
  return (
    <TouchableOpacity
      onPressIn={() => navigation.navigate('NewExpenses')}
      style={{position: 'absolute', bottom: 30, left: '70%'}}>
      <View
        style={{
          borderRadius: 70,

          height: 70,
          width: 70,

          backgroundColor: colors.color104,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>
          <Icon name="plus-circle" size={40} color={colors.color100} />;
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddBTN;
