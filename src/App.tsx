import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EducationPage from './components/EducationPage'
import LandingPage from './components/LandingPage'

function App() {
  return (
    <div className="App">
      <Router>
          <div>
          <Switch>
                <Route exact path='/' component={LandingPage}/>
                <Route exact path='/profile' component={EducationPage}/>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
