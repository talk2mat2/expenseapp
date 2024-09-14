import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {ExpenseProvider} from './src/context/expenseContext';
import Dashboard from './src/screens/dashboard';
import NewExpenses from './src/screens/newExpenses';
import {colors} from './src/helpers/colors';
import ExpensesList from './src/screens/expensesLiust';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : colors.color100,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ExpenseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name="Dashboard"
              component={Dashboard}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="ExpensesList"
              component={ExpensesList}
            />
            <Stack.Screen name="NewExpenses" component={NewExpenses} />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpenseProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
