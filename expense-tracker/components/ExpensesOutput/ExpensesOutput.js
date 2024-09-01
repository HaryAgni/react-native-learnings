import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 300,
    date: new Date("2024-01-17"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 600,
    date: new Date("2024-02-17"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 90,
    date: new Date("2024-02-17"),
  },
  {
    id: "e4",
    description: "Book",
    amount: 800,
    date: new Date("2024-02-17"),
  },
  {
    id: "e5",
    description: "Chips",
    amount: 20,
    date: new Date("2024-02-17"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 300,
    date: new Date("2024-02-17"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 600,
    date: new Date("2024-02-17"),
  },
  {
    id: "e8",
    description: "Some bananas",
    amount: 90,
    date: new Date("2024-02-17"),
  },
  {
    id: "e9",
    description: "Book",
    amount: 800,
    date: new Date("2024-02-17"),
  },
  {
    id: "e10",
    description: "Chips",
    amount: 20,
    date: new Date("2024-02-17"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
});
