import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Checkout from './Checkout';
import Home from './Home';
import React from 'react';
import './App.css';
import Navlinks from './Navlinks';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Navlinks />
            <Checkout />
            <Footer />
          </Route>
          <Route path='/'>
            <Header />
            <Navlinks />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
