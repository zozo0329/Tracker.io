import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("es-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="date-container">
      <h2>{month}</h2>
      <h2>{day}</h2>
      <h2>{year}</h2>
    </div>
  );
};
export default ExpenseDate;
