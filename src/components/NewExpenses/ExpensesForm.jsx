import { useState } from "react";
import "./ExpensesForm.css";
const ExpensesForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (e) => {
    const titleData = e.target.value;
    setEnteredTitle(titleData);
    console.log(enteredTitle, "TITLE");
  };
  const amountChangeHandler = (e) => {
    const amountData = e.target.value;
    setEnteredAmount(amountData);
    console.log(enteredAmount, "AMOUNT");
  };
  const dateChangeHandler = (e) => {
    const dateData = e.target.value;
    setEnteredDate(dateData);
    console.log(enteredDate, "DATE");
  };
  //
  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onUserData(userData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  const closeHandler = () => {
    props.setIsShow(false);
  };
  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <div className="user-input">
          <input
            value={enteredTitle}
            type="text"
            placeholder="Title"
            required
            onChange={titleChangeHandler}
          />
          <input
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            placeholder="Amount"
            required
            onChange={amountChangeHandler}
          />
          <input
            value={enteredDate}
            type="date"
            min="2020-01-01"
            max="2027-12-31"
            required
            onChange={dateChangeHandler}
          />
        </div>
        <div className="user-action">
          <button type="button" onClick={closeHandler}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};
export default ExpensesForm;
