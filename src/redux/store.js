import { compose, createStore } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import firebase from 'firebase'

import rootReducer from "./reducers"

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCYa4o0GD2nz4Aa1VPRBIt1cWxe69_Zhqo",
  authDomain: "dnd-controller.firebaseapp.com",
  databaseURL: "https://dnd-controller.firebaseio.com",
  projectId: "dnd-controller",
  storageBucket: "dnd-controller.appspot.com",
  messagingSenderId: "1098151045458"
}
firebase.initializeApp(firebaseConfig)

// react-redux-firebase options
const config = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: false, // enable/disable Firebase's database logging
}

// Add redux Firebase to compose
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, config),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)

// Create store with reducers and initial state
const store = createStoreWithFirebase(rootReducer);

export default store;