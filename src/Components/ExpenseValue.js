import React from "react";

const ExpenseValue = props => {
  return (
    <div className="form-group ">
      <label htmlFor="Textarea1" className="lead">
        Expense Value
      </label>
      <div>
        <textarea
          name={props.name}
          value={props.value}
          onChange={props.handleSelect}
          className="form-control"
        />
      </div>
    </div>
  );
};

export default ExpenseValue;
