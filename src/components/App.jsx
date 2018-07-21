import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore} from 'redux';

import reducers from '../reducers';

import './App.css';

import Home from './home/home.jsx';
import Donate from './donate/donate.jsx';
import Restaurant from './restaurant/restaurant.jsx';

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
            <Route path='/donate' component={Donate} />
            <Route path='/restaurant' component={Restaurant} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
