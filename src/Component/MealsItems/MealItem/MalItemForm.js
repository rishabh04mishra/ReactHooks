import { useRef } from "react";
import Input from "../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;
    if (
      enteredAmountNum < 1 ||
      enteredAmount.trim().length === 0 ||
      enteredAmountNum > 5
    ) {
      return;
    }

    props.onAddtoCart(enteredAmountNum);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        nput={{
          type: 'number',
          id: 'amount' + props.id,
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button className={classes.button}>+Add</button>
    </form>
  );
};

export default MealItemForm;
