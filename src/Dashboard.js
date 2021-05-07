import React, { useEffect, useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "./providers/UserProvider";
import { logOut } from "./services/firebase";
import "./Dashboard.css";

export default function Dashboard() {
  const user = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    if (!user) {
      setRedirect("/");
    }
  }, [user]);

  if (redirect != null) {
    <Redirect to={redirect} /> 
  }

  return (  <div className="dashboard">
              <h1 className="dashboard-text">Welcome Home</h1>
              <button className="logout-button" onClick={logOut}>
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
                  alt="google icon"
                />
                <span> logout</span>
              </button>
            </div>);
}