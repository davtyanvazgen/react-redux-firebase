import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase/app";
import "firebase/app";
import "firebase/firestore";

const fbConfig = {
  apiKey: "AIzaSyBJiRNNAgmcIzNxeT9Maue06RlcCJ9mfmA",
  authDomain: "unicus-nts.firebaseapp.com",
  databaseURL: "https://unicus-nts.firebaseio.com",
  projectId: "unicus-nts",
  storageBucket: "unicus-nts.appspot.com",
  messagingSenderId: "670304000542",
  appId: "1:670304000542:web:22bdccbefac33eca"
};

firebase.initializeApp(fbConfig);
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
