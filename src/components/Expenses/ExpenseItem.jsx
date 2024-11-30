import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
// import Card from "../../UI/Card";
import { useState } from "react";
const ExpensesItem = (props) => {
  const date = props.date;
  const [title, setTitle] = useState("");
  const clickHandler = () => {
    setTitle("Paid!");
    console.log(title);
  };
  return (
    <div onClick={clickHandler} className="Expense-item-container">
      <div className="date-container ">
        <ExpenseDate date={date} />
      </div>
      <div className="title-container">
        <h1>{props.title}</h1>
        <h1>{title}</h1>
      </div>
      <div className="amount-container">
        <p>${props.amount}</p>
      </div>
    </div>
  );
};
export default ExpensesItem;
