import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../../UI/Card";
import Filter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {
  // const objectValue = props.dummyExpenses;
  const [filteredYear, setFilteredYear] = useState("2024");
  const dataHandler = (filterValue) => {
    setFilteredYear(filterValue);
  };

  return (
    <Card className="expense-item-container">
      <Filter defaultFilterValue={filteredYear} onChangeFilter={dataHandler} />
      <ExpenseItem
        date={props.dummyExpenses[0].date}
        title={props.dummyExpenses[0].title}
        amount={props.dummyExpenses[0].amount}
      />
      <ExpenseItem
        date={props.dummyExpenses[1].date}
        title={props.dummyExpenses[1].title}
        amount={props.dummyExpenses[1].amount}
      />
      <ExpenseItem
        date={props.dummyExpenses[2].date}
        title={props.dummyExpenses[2].title}
        amount={props.dummyExpenses[2].amount}
      />
      {/* {objectValue.map((value, i) => {
        return (
          <ExpenseItem
            key={i}
            date={value.date}
            title={value.title}
            amount={value.amount}
          />
        );
      })} */}
    </Card>
  );
};
export default Expenses;
