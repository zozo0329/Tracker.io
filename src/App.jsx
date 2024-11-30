import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
function App() {
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
  const objectHandler = (objectData) => {
    console.log(objectData, "APP JSX");
  };

  return (
    <div className="App">
      <div className="form-container">
        <NewExpenses onShit={objectHandler} />
      </div>
      <div className="expenses-container">
        <Expenses dummyExpenses={dummyExpenses} />
      </div>
    </div>
  );
}

export default App;
