import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/bubbles" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
