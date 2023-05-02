import React from "react";
import { ChatEngine } from "react-chat-engine";
import Signup from "./components/Signup";
import "./App.css"
function App() {

  const handleClick=()=>{
    
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        window.location.reload();

  }

  if(!localStorage.getItem("username")){
return <Signup/>
  }


  return (
    <>
      <div className="navbar">
        <h2>𝑀𝑒𝑠𝑠𝑒𝑛𝑔𝑒𝑟</h2>
        <button onClick={handleClick}>Logout</button>
      </div>
   
        <ChatEngine
          height="90vh"
          projectID={process.env.REACT_APP_PROJECT_ID}
          userName={localStorage.getItem("username")}
          userSecret={localStorage.getItem("password")}
        />
    
    </>
  );
}

export default App;
