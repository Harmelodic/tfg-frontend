import React, { Component } from "react";
import DatePicker from "react-datepicker";
import SelectInput from "./SelectInput";
import ExpenseValue from "./ExpenseValue";
import UploadReceipt from "./UploadReceipt";
import "react-datepicker/dist/react-datepicker.css";

const nameOptions = [
  "Select Your Name",
  "Madiha",
  "Joan",
  "Deepa",
  "Ermi",
  "Ismail",
  "Ivina",
  "Zareen",
  "Miles",
  "Kadir",
  "Ahmed",
  "Ahmet",
  "Elamin",
  "Sola",
  "Mohbeen",
  "Mussie",
  "Tayo",
  "Najla",
  "Mohammad",
  "Nina",
  "Samantha",
  "Bart",
  "Matthew",
  "Clement",
  "Abz",
  "Alisina"
];

const classAttended = [
  "Select Your Class",
  "CYF Class",
  "Homework Club",
  "Other"
];
const expenseType = [
  "Select Your Expense",
  "Childcare",
  "Transport",
  "Food",
  "Internet",
  "other"
];

class ExpensesForm extends Component {
  state = {
    startDate: new Date(),
    selectedFile: null
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleSelect = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleUpload = event => {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
  };

  handleClick = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
  };

  render() {
    return (
      <div className="expenses-form-container">
        <div className="expenses-form">
          <h1>Add an expense</h1>
          <div>
            <p className="guideText">
              You must submit up to three receipts per day. Please{" "}
              <em>DO NOT</em> submit multiple expenses if dates are different.
              the only exception can be made if you submitting Oyster or
              contactless card statements. If that's the case, upload the
              statement and highlight in the notes this is cumulative expense.
              Thank You!
            </p>
          </div>
          <div className="selectPart">
            <SelectInput
              name={"studentName"}
              handleSelect={this.handleSelect}
              options={nameOptions}
              selected={this.state.studentName}
              label="Your Name"
            />
            <div>
              <SelectInput
                name={"classAttend"}
                handleSelect={this.handleSelect}
                options={classAttended}
                selected={this.state.classAttend}
                label="Class Type"
              />
            </div>
            <div>
              <div>
                <SelectInput
                  name={"expenseType"}
                  handleSelect={this.handleSelect}
                  options={expenseType}
                  selected={this.state.expenseType}
                  label="Expense Type"
                />
              </div>
              <div>
                <ExpenseValue />
              </div>
              <div>
                <div>
                  <label className="lead">Pick a Date</label>
                </div>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>

              <div>
                <UploadReceipt handleUpload={this.handleUpload} />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default ExpensesForm;
