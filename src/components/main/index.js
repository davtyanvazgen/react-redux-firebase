import React, { Component } from "react";
import Header from "../header";
import About from "../about";
import News from "../news";
import Home from "../home";
import SignIn from "../signin";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { firebaseConnect, firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Main extends Component {
  componentDidMount() {
    console.log("did", this.props);
  }
  render() {
    console.log("render:", this.props);
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
            <Route path="/projects" component={() => <h1>projects</h1>} />
            {/* <Route
              path="/"
              component={() => <Home services={this.props.services} />}
            /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default compose(
  firestoreConnect(),
  connect(state => ({
    services: state
  }))
)(Main);
