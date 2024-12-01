import "./NewExpenses.css";
import Form from "./ExpensesForm";
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
      <Form onUserData={dataHandler} />
    </div>
  );
};

export default NewExpenses;
