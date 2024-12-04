import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../../UI/Card";
import Filter from "./ExpensesFilter";
import { useState } from "react";
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
          <ExpenseItem
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
      {filteredExpenses.length === 0 ? (
        <p>No Items Found</p>
      ) : (
        filteredExpenses.map((value) => {
          return (
            <ExpenseItem
              key={value.id}
              date={value.date}
              title={value.title}
              amount={value.amount}
            />
          );
        })
      )}
    </Card>
  );
};
export default Expenses;
