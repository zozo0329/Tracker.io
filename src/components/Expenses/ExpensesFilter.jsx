import "./ExpensesFilter.css";
const ExpensesFilter = (props) => {
  const changeHandler = (e) => {
    console.log(e.target.value, "FILTER");
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className="filter-container">
      <label>Filter by year: </label>
      <select value={props.defaultFilterValue} onChange={changeHandler}>
        <option value="ALL">ALL</option>
        <option value="2027">2027</option>
        <option value="2026">2026</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  );
};
export default ExpensesFilter;
