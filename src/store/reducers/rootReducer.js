import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import logInReducer from "./loginReducer";
import servicesReducer from "./servicesReducer";

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
  // services: servicesReducer
  // isSignIn: logInReducer
});
