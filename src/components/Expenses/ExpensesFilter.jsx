import "./ExpensesFilter.css";
const ExpensesFilter = (props) => {
  const changeHandler = (e) => {
    const yearValue = e.target.value;
    props.selectedYear(yearValue);
  };
  return (
    <div className="filter-container">
      <label>Filter by year: </label>
      <select onChange={changeHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};
export default ExpensesFilter;
