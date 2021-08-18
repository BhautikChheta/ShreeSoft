import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={ContactUs} />
      </Switch>
    </Router>
  );
}

export default App;
