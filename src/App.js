import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchPage from './SearchPage';


function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path='/Search'>
            <SearchPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
      {/**HOME */}
      {/**header */}
      {/**banner */}
      {/**search */}
      {/**cart */}
      {/**footer */}
      {/**search page */}

    </div>
  );
}

export default App;
