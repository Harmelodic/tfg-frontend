import React, { Component } from "react";
import ExpensesForm from "./Components/ExpensesForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <ExpensesForm />
      </div>
    );
  }
}

export default App;
