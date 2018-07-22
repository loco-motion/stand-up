import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createStore} from 'redux';

import reducers from '../reducers';

import './App.css';

import Home from './home/home.jsx';
import Donate from './donate/donate.jsx';
import Restaurant from './restaurant/restaurant.jsx';
import SignIn from './auth/signin.jsx';
import SignUp from './auth/signup.jsx';
import PrivateRoute from './auth/private-route.jsx';


const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (<Provider store={store}>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/restaurant' component={Restaurant} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Switch>
              <PrivateRoute path='/donate' component={Donate} />
            </Switch>
            <Switch>
              <PrivateRoute path='/restaurants' component={Restaurant} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
