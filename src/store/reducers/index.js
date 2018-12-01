import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

import campaignReducer from './campaignReducer';
import characterReducer from './characterReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  campaign: campaignReducer,
  character: characterReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
