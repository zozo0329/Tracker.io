import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
const dummyExpenses = [
  {
    title: "Car Insurance",
    amount: 2000.0,
    date: new Date(2024, 2, 10),
  },
  {
    title: "Toilet Paper",
    amount: 25.55,
    date: new Date(2023, 4, 11),
  },
  {
    title: "Groceries",
    amount: 2500.24,
    date: new Date(2023, 4, 5),
  },
  {
    title: "Book",
    amount: 500,
    date: new Date(2024, 1, 1),
  },
];
function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);
  const objectHandler = (objectContainer) => {
    // REVIEW THIS PART
    setExpenses((prevExpense) => {
      return [objectContainer, ...prevExpense];
    });
  };

  return (
    <div className="App">
      <div className="form-container">
        <NewExpenses dataFuntion={objectHandler} />
      </div>
      <div className="expenses-container">
        <Expenses item={expenses} />
      </div>
    </div>
  );
}

export default App;
