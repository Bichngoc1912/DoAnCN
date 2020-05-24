import React,{Component} from 'react';
import './scss/_sess.scss';
import {BrowserRouter, Switch} from 'react-router-dom';
import Route from './router';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;

