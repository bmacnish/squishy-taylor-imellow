import "./App.css";
import React, { useState } from "react";
import Login from "../Login/Login";

function App() {
  const [token, setToken] = useState();

  const handleSubmit = (password) => {
    setToken(password);
  };

  if (!token || token.value !== "growth") {
    return <Login handleSubmit={handleSubmit} />;
  }

  return (
    <div className="wrapper">
      <h1>Guerilla Gardener's Website</h1>
    </div>
  );
}

export default App;
