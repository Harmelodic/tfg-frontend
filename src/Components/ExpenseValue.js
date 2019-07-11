import React from "react";

const ExpenseValue = props => {
  return (
    <div className="form-group ">
      <label htmlFor="Textarea1" className="lead">
        Expense Value
      </label>
      <div>
        <textarea
          name="description"
          value={props.description}
          onChange={props.handleExpenseValue}
          className="form-control"
        />
      </div>
    </div>
  );
};

export default ExpenseValue;
