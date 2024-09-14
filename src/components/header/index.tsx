import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {HeaderView, TextHeader} from '../../helpers/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleIcons from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../../helpers/colors';
import Icon2 from 'react-native-vector-icons/Entypo';
import {NavigationProp} from '@react-navigation/native';

interface props {
  showBack?: boolean;
  navigation?: NavigationProp<any>;
}
const Header = ({showBack, navigation}: props) => {
  return (
    <HeaderView>
      {showBack ? (
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <View
            style={{
              backgroundColor: colors.color100,
              padding: 6,
              borderRadius: 10,
            }}>
            <Text>
              <Icon2 name="chevron-left" size={30} color={colors.color101} />
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            backgroundColor: colors.color102,
            padding: 6,
            borderRadius: 10,
          }}>
          <Text>
            <SimpleIcons name="user" size={25} color={colors.color100} />;
          </Text>
        </View>
      )}
      <TextHeader>Home</TextHeader>
      <Text>
        <Icon name="bell-badge-outline" size={30} color={colors.color101} />;
      </Text>
    </HeaderView>
  );
};

export default Header;
