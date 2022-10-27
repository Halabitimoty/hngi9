import React from "react";
import Links from "./component/Links/Links";
import Profile from "./component/Profile/Profile";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Profile />
      <Links />
    </div>
  );
}
