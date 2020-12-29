import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Team from './components/Dashboard/Team/Team';
import Membership from './components/Dashboard/Membership/Membership';
import Events from './components/Dashboard/Events/Events';
import Contact from './components/Dashboard/Contact/Contact';
import AboutIOIT from './components/Dashboard/AboutIOIT/AboutIOIT';

function App() {
  return (
    <React.Fragment>
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="acm-ioit-react/" exact>
            <Dashboard />
          </Route>
          <Route path="/About" exact>
            <AboutIOIT />
          </Route>
          <Route path="/Events" exact>
            <Events />
          </Route>
          <Route path="/Membership" exact>
            <Membership />
          </Route>
          <Route path="/Team" exact>
            <Team />
          </Route>
          <Route path="/Contact" exact>
            <Contact />
          </Route>
          <Redirect to = "acm-ioit-react/" />
        </Switch>
      </Router>
      <Footer />
    </div>
    </React.Fragment>
  );
}

export default App;
