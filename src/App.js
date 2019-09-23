import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Routes from "./utils/Routes";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Navigation} />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
