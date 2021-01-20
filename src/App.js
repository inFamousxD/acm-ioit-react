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
import About from './components/About/About';

import ScrollToTop from './components/ScrollToTop';

import linker from './components/GlobalVars';

function App() {
  return (
    <React.Fragment>
    <div>
      <Router>
        <Navbar />
        <ScrollToTop>
        <Route path={`${linker}`} exact component={Dashboard} />
        <Switch>
          <Route path={`${linker}Home`} exact component={Dashboard} />
          <Route path={`${linker}Events`} exact component={Events} />
          <Route path={`${linker}Membership`} exact component={Membership} />
          <Route path={`${linker}Team`} exact component={Team} />
          <Route path={`${linker}Contact`} exact component={Contact} />
          <Route path={`${linker}About`} exact component={About} />
        </Switch>
        </ScrollToTop>
      <Footer />
      </Router>
    </div>
    </React.Fragment>
  );
}

export default App;
