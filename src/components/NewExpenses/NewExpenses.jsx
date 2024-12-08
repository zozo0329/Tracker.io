import "./NewExpenses.css";
import ExpenseForm from "./ExpensesForm";

const NewExpenses = (props) => {
  const dataHandler = (userObject) => {
    const userDataObject = {
      ...userObject,
      id: Math.random().toString(),
    };
    props.dataFuntion(userDataObject);
  };
  return (
    <div className="new-expenses-container">
      <ExpenseForm setIsShow={props.setIsShow} onUserData={dataHandler} />
    </div>
  );
};

export default NewExpenses;
