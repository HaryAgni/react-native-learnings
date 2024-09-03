import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 300,
    date: new Date("2024-09-01"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 600,
    date: new Date("2024-08-30"),
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

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expensesData) {
    dispatch({ type: "ADD", payload: expensesData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expense) {
    dispatch({ type: "UPDATE", payload: { id, data: expense } });
  }

  const value = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
