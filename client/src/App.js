import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/layout/Header";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import ContactState from "./context/contact/ContactState";
import "./App.css";

function App() {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Header title="Contact Keeper" icon="fa fa-id-card-o" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
}

export default App;