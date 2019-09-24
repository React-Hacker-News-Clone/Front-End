import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Routes from "./utils/Routes";
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

function App() {
  const [isSignedIn, setIsSignedIn] = useState()
  return (
      <div className="App">
        <Routes />
      </div>
  );
}

export default App;
