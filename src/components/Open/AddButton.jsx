import "./AddButton.css";
const AddButton = (props) => {
  const AddHandler = () => {
    props.setIsShow(true);
  };
  return (
    <div>
      <button onClick={AddHandler} className={`${props.isShow && "isShow"}`}>
        Add Expense
      </button>
      {props.isShow && props.children}
    </div>
  );
};

export default AddButton;
