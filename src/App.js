import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Checkout from './Checkout';
import Home from './Home';
import React, { useEffect } from 'react';
import './App.css';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Navlinks from './Navlinks';
import Footer from './Footer';

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((userauth) => {
      if (userauth) {
        dispatch({
          type: 'SET_LOGIN',
          user: userauth,
        });
      } else {
        dispatch({
          type: 'SET_LOGIN',
          user: null,
        });
      }
    });
    return () => {
      unsubcribe();
    };
  }, [dispatch]);

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
