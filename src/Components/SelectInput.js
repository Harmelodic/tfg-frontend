import React from "react";

const SelectableForm = props => {
  return (
    <div className="form-group ">
      <label htmlFor={props.name} className="lead">
        {props.label}
      </label>
      <select
        name={props.name}
        className="form-control"
        onChange={props.handleSelect}
        value={props.selected}
      >
        {props.options &&
          props.options.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
      </select>
    </div>
  );
};

export default SelectableForm;
