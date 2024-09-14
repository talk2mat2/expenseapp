import React, {useContext} from 'react';
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
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
import AddBTN from '../components/AddBTN';
import {retrieveExpensesFromBlockchain} from '../helpers/web3.';
interface INewExpenses {
  navigation: NavigationProp<any>;
}
const Dashboard = ({navigation}: INewExpenses) => {
  const {expenses, addExpense, setExpenses} = useContext(ExpenseContext);
  const [loading, setLoading] = React.useState(true);
  const totalAmount = expenses?.reduce(
    (total, expense) => total + expense.amount,
    0,
  );

  const refetch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  React.useEffect(() => {
    //simulate retrival of expenses data
    retrieveExpensesFromBlockchain().then(res => {
      setLoading(false);
      setExpenses!(res);
    });
  }, []);

  return (
    <StyledView>
      <Header showBack={false} />
      <View style={{marginTop: 15}}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={{height: 250}}
          horizontal>
          <CardView />
          <CardView />
        </ScrollView>
      </View>
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
        <TextHeader>Expenxes</TextHeader>
        <TouchableOpacity
          onPress={() => navigation.navigate('ExpensesList')}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <SubText fontSize={16}>View All</SubText>
          <Text>
            <Icon name="chevron-right" size={30} color={colors.color101} />
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        refreshing={loading}
        onRefresh={refetch}
        data={expenses}
        renderItem={({item}) => <ExpenseCard item={item} />}
        keyExtractor={item => item.id}
      />

      <AddBTN navigation={navigation} />
    </StyledView>
  );
};

export default Dashboard;
