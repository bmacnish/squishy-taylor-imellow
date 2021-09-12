import "./App.css";
import React, { useState } from "react";
import Login from "../Login/Login";
import Site from "../Site/Site"
import ReactGA from 'react-ga';
const TRACKING_ID = "G-MR8T06P15N"; // YOUR_OWN_TRACKING_ID


const FAKE_PASSWORD = "waratah unveiled";

export default function App() {
  const [token, setToken] = useState();

  const handleSubmit = (password) => {
    setToken(password);
  };

  ReactGA.initialize(TRACKING_ID);

  if (!token || token.value !== FAKE_PASSWORD) {
    return <Login handleSubmit={handleSubmit} />;
  } else {
    return <Site />
  }
}
