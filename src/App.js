import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Team from './components/Team/Team';
import Membership from './components/Membership/Membership';
import Events from './components/Events/Events';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <React.Fragment>
    <div>
      <Router>
        <Navbar />
        <Route path="/" exact component={Dashboard} />
        <Switch>
          <Route path="/Home" exact component={Dashboard} />
          <Route path="/Events" exact component={Events} />
          <Route path="/Membership" exact component={Membership} />
          <Route path="/Team" exact component={Team} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
      <Footer />
      </Router>
    </div>
    </React.Fragment>
  );
}

export default App;
