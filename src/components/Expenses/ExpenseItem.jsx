import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
// import Card from "../../UI/Card";
const ExpensesItem = (props) => {
  const date = props.date;

  return (
    <div className="Expense-item-container">
      <div className="date-title-container">
        <div className="date-container ">
          <ExpenseDate date={date} />
        </div>
        <div className="title-container">
          <h1>{props.title}</h1>
        </div>
      </div>
      <div className="amount-container">
        <p>₱ {props.amount}</p>
      </div>
    </div>
  );
};
export default ExpensesItem;
