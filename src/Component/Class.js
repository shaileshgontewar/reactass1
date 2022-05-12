import React, { Component } from "react";
import "./Style.css";

export default class ClassComponent extends Component {
  render() {
    return (
      <div className="classBox">
        <h3>This is created using class Component</h3>
        <p>This is done using External CSS</p>
        <p style={{ color: "red", fontSize: "1.5rem" }}>
          This is done using Internal CSS
        </p>
      </div>
    );
  }
}
