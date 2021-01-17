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

function App() {
  return (
    <React.Fragment>
    <div>
      <Router>
        <Navbar />
        <ScrollToTop>
        <Route path="/acm-ioit-react/" exact component={Dashboard} />
        <Switch>
          <Route path="/acm-ioit-react/Home" exact component={Dashboard} />
          <Route path="/acm-ioit-react/Events" exact component={Events} />
          <Route path="/acm-ioit-react/Membership" exact component={Membership} />
          <Route path="/acm-ioit-react/Team" exact component={Team} />
          <Route path="/acm-ioit-react/Contact" exact component={Contact} />
          <Route path="/acm-ioit-react/About" exact component={About} />
        </Switch>
        </ScrollToTop>
      <Footer />
      </Router>
    </div>
    </React.Fragment>
  );
}

export default App;
