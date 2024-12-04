import "./Expenses.css";
import Card from "../../UI/Card";
import Filter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
const Expenses = (props) => {
  const objectValue = props.item;
  const [filteredYear, setFilteredYear] = useState("2024");
  const dataHandler = (filterValue) => {
    setFilteredYear(filterValue);
  };
  const filteredExpenses = objectValue.filter((expense) => {
    if (filteredYear === "ALL") {
      return objectValue.map((value) => {
        return (
          <ExpenseList
            key={value.id}
            date={value.date}
            title={value.title}
            amount={value.amount}
          />
        );
      });
    }
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expense-item-container">
      <Filter defaultFilterValue={filteredYear} onChangeFilter={dataHandler} />
      <ExpenseList filteredExp={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
