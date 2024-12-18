import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import Header from "./components/Header/Header";
import AddButton from "./components/Open/AddButton";
// const dummyExpenses = [
//   {
//     title: "Car Insurance",
//     amount: 2000.0,
//     date: new Date(2024, 2, 10),
//   },
//   {
//     title: "Toilet Paper",
//     amount: 25.55,
//     date: new Date(2023, 4, 11),
//   },
//   {
//     title: "Groceries",
//     amount: 2500.24,
//     date: new Date(2023, 4, 5),
//   },
//   {
//     title: "Book",
//     amount: 500,
//     date: new Date(2024, 1, 1),
//   },
// ];
function App() {
  const [expenses, setExpenses] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const objectHandler = (objectContainer) => {
    // REVIEW THIS PART
    setExpenses((prevExpense) => {
      return [objectContainer, ...prevExpense];
    });
  };

  return (
    <div className="App">
      <div className="header-container">
        <Header />
      </div>
      <div className="form-container">
        <AddButton isShow={isShow} setIsShow={setIsShow}>
          <NewExpenses dataFuntion={objectHandler} setIsShow={setIsShow} />
        </AddButton>
      </div>
      <div className="expenses-container">
        <Expenses item={expenses} />
      </div>
    </div>
  );
}

export default App;
