import React, { useState } from "react";
import "./Login.css";

export default function Login({ handleSubmit }) {
  const [password, setPassword] = useState();

  const handleChange = (event) => {
    setPassword({ value: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(password);
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={onSubmit}>
        <label>
          <p>Password</p>
          <input type="password" onChange={handleChange} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
