import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

import campaignReducer from './campaignReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  campaign: campaignReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
