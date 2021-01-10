import './App.css';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// import Team from './components/Team/Team';
// import Membership from './components/Membership/Membership';
// import Events from './components/Events/Events';
// import Contact from './components/Contact/Contact';
// import AboutIOIT from './components/AboutIOIT/AboutIOIT';

function App() {
  return (
    <React.Fragment>
    <div>
      <Router>
        <Navbar />
        {/* <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/acm-ioit-react/About" exact>
              <AboutIOIT />
          </Route>
          <Route path="/acm-ioit-react/Events" exact>
            <Events />
          </Route>
          <Route path="/acm-ioit-react/Membership" exact>
              <Membership />
          </Route>
          <Route path="/acm-ioit-react/Team" exact>
            <Team />
          </Route>
          <Route path="/acm-ioit-react/Contact" exact>
            <Contact />
          </Route>
          <Redirect to = "/acm-ioit-react/" />
        </Switch>*/}
      </Router>
      <Dashboard />
      <Footer />
    </div>
    </React.Fragment>
  );
}

export default App;
