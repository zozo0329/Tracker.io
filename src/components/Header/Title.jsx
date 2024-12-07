import React from "react";
import "./Title.css";
const Title = () => {
  return (
    <div className="title--container">
      <div className="logo">
        <h1>Expense Tracker</h1>
      </div>
      <div className="nav">
        <ul>
          <a href="#/" target="_blank">
            <li>Sample</li>
          </a>
          <a href="/" target="_blank">
            <li>Sample</li>
          </a>
          <a href="/" target="_blank">
            <li>Sample</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Title;
