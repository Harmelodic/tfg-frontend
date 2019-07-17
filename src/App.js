import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cyf_brand from './cyf_brand.png';
import cap_logo from './Cap Logo.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ChartPie from './Components/ChartPie';
import ChartBar from './Components/ChartBar';
import ExpensesForm from "./Components/ExpensesForm";

function Index() {
    return (
        <div className="App-body">
            <h2>Home</h2>
            <p>
                Welcome to the TFG Platform
            </p>
            <div className="images">
                <p> In partnership with </p>
                <img src={cyf_brand} alt="cyf_brand" />
                <img src={cap_logo} alt="cap_logo" />
            </div>
        </div>
    )
}

function Expenses() {
    return (
        <div className="App-body">
            <h2>Expenses</h2>
            <ExpensesForm />
        </div>
    )
}

function Visualisations() {
    return (
        <div className="App-body">
            <h2>Visualisations</h2>
            <div className="chartComponents" style={{display:"block"}}>
                <ChartPie description="Pie Chart 1"/>
                <ChartBar description="Bar Chart 1"/>
                <ChartPie description="Pie Chart 2"/>
                <ChartBar description="Bar Chart 2"/>
            </div>
        </div>
    )
}

class App extends Component {
  render() {
      return (
        <div className="App">
          <Router>
              <header id="header-bar">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Expenses/">Expenses</Link></li>
                        <li><Link to="/Visuals/">Visuals</Link></li>
                    </ul>
                </nav>

                <Route path="/" exact component = {Index} />
                <Route path="/Expenses/" component = {Expenses} />
                <Route path="/Visuals/" component = {Visualisations} />
              </header>
          </Router>
        </div>
      );
  }
}

export default App;
