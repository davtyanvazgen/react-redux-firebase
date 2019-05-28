import React from "react";
import "./App.css";
import Main from "./components/main";

import firebase from "firebase";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import createReduxStore from "./store/createReduxStore";
import { createFirestoreInstance } from "redux-firestore";

const store = createReduxStore();

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

const App = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Main />
    </ReactReduxFirebaseProvider>
  </Provider>
);

export default App;
