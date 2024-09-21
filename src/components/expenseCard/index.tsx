import React from 'react';
import {
  ExpenseCardView,
  StyledText,
  SubText,
  TextHeader,
} from '../../helpers/styles';
import {colors} from '../../helpers/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, TouchableOpacity, View} from 'react-native';
import {IEspenses} from '../../types/expenses';

const ExpenseCard = ({item}: {item: IEspenses}) => {
  return (
    <TouchableOpacity>
      <ExpenseCardView bgColor={colors.color107}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '50%',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              borderRadius: 40,
              minHeight:40,
              backgroundColor: colors.color100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>
              <Icon name="cash" size={30} color={colors.color101} />;
            </Text>
          </View>
          <View style={{width: '100%', paddingLeft: 20}}>
            <TextHeader>{item.category}</TextHeader>
            <SubText>{item.description}</SubText>
          </View>
        </View>
        <View>
          <StyledText color={colors.color108} fontSize={15}>
            {item.amount}
          </StyledText>
          <SubText>{item.id}</SubText>
        </View>
      </ExpenseCardView>
    </TouchableOpacity>
  );
};

export default ExpenseCard;
