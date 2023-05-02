import React, { useState } from "react";
import "./Signup.css";
import { Input } from "@mui/material";
import Button from "@mui/joy/Button";
import { Avatar } from "@mui/material";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = {
      "Project-ID":process.env.REACT_APP_PROJECT_ID,
      "User-Name": username,
      "User-Secret": password,
    };

    console.log(username, password);

    try {
      await axios
        .get("https://api.chatengine.io/chats", { headers: auth })
      
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          window.location.reload();
      
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  
  return (
    <div className="signup__container">
      <div className="signup__card">
        <Avatar variant="solid" className="signup__avatar" />
        <h3>LOGIN NOW TO START</h3>
        <form className="signup__form" action="" onSubmit={handleSubmit}>
          <Input
            placeholder="Email"
            type="email"
            className="email__input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            className="password__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="login__btn" onClick={handleSubmit}>
            Login
          </Button>
        </form>
        {error ? <h4>"Oops! Wrong Credentials"</h4> : ""}
      </div>
    </div>
  );
}

export default Signup;
