import React, {useContext} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import Header from '../components/header';
import {StyledView, SubText, TextHeader} from '../helpers/styles';
import CardView from '../components/cardView';
import Status from '../components/status';
import Icon from 'react-native-vector-icons/Entypo';
import {colors} from '../helpers/colors';
import ExpenseCard from '../components/expenseCard';
import {ExpenseContext} from '../context/expenseContext';
import {ScrollView} from 'react-native-gesture-handler';
import {Text} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {Dimensions} from 'react-native';

interface props {
  navigation: NavigationProp<any>;
}
const windowHeight = Dimensions.get('window').height;
const ExpensesList = ({navigation}: props) => {
  const {expenses} = useContext(ExpenseContext);
  const totalAmount = expenses?.reduce(
    (total, expense) => total + expense.amount,
    0,
  );
  return (
    <StyledView>
      <Header navigation={navigation} showBack />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 10,
        }}>
        <Status title="Income" bgColor={colors.color104} />
        <Status title="Expense" bgColor={colors.color105} sum={totalAmount} />
      </View>
      <View
        style={{
          paddingHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TextHeader>Expenses</TextHeader>
      </View>
      <View style={{height: windowHeight / 1.3,marginTop:'auto'}}>
        <FlatList
          data={expenses}
          renderItem={({item}) => <ExpenseCard item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </StyledView>
  );
};

export default ExpensesList;
