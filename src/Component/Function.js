import React from "react";
import "./Style.css";
const FunctionalComponent = () => {
  return (
    <div className="Function">
      <h3>This is created using Functionl Component</h3>
      <p>This is done using external CSS</p>
      <p style={{ color: "white", fontSize: "1.5rem" }}>
        This is done using internal CSS
      </p>
    </div>
  );
};
export default FunctionalComponent;
