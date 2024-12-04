import React from "react";
import "./ExpenseList.css";
import ExpensesItem from "./ExpenseItem";
const ExpenseList = (props) => {
  return (
    <div className="expense-list-container">
      {props.filteredExp.length === 0 ? (
        <h2>No Expense Found</h2>
      ) : (
        props.filteredExp.map((value) => {
          return (
            <ExpensesItem
              key={value.id}
              date={value.date}
              title={value.title}
              amount={value.amount}
            />
          );
        })
      )}
    </div>
  );
};

export default ExpenseList;
