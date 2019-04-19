import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {

  componentDidMount() {
    console.ignoredYellowBox = ['Setting a timer'];
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyD4wuFEhJ34tqrs-xo9--Vg6BTXqWLadbc",
        authDomain: "bolaogot-276f8.firebaseapp.com",
        databaseURL: "https://bolaogot-276f8.firebaseio.com",
        projectId: "bolaogot-276f8",
        storageBucket: "bolaogot-276f8.appspot.com",
        messagingSenderId: "923130831542"
      });
    }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
