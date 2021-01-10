import './App.css';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
<<<<<<< HEAD
import Team from './components/Team/Team';
import Membership from './components/Membership/Membership';
import Events from './components/Events/Events';
import Contact from './components/Contact/Contact';
import AboutIOIT from './components/AboutIOIT/AboutIOIT';
=======
// import Team from './components/Dashboard/Team/Team';
// import Membership from './components/Dashboard/Membership/Membership';
// import Events from './components/Dashboard/Events/Events';
// import Contact from './components/Dashboard/Contact/Contact';
// import AboutIOIT from './components/Dashboard/AboutIOIT/AboutIOIT';
>>>>>>> 19ef75555a6bff4a794f71a6455967d6734470d8

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
<<<<<<< HEAD
          <Redirect to = "/acm-ioit-react/" />
        </Switch>
=======
          <Redirect to = "/" />
        </Switch> */}
>>>>>>> 19ef75555a6bff4a794f71a6455967d6734470d8
      </Router>
      <Dashboard />
      <Footer />
    </div>
    </React.Fragment>
  );
}

export default App;
