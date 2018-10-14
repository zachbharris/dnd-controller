import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

import campaignReducer from './campaignReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  campaign: campaignReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
