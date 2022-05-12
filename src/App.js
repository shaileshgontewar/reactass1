import "./App.css";
import "./Component/Style.css";
import FunctionalComponent from "./Component/Function";
import ClassComponent from "./Component/Class";
import { useState } from "react";

function App() {
  const [flex1, setName1] = useState(false);
  const [flex2, setName2] = useState(false);
  return (
    <div className="container">
      <header>
        <h1>Styling using Functional And Class Component</h1>
      </header>
      <div className="btn">
        <box1>
          <button
            onClick={() => {
              flex1 ? setName1(false) : setName1(true);
            }}
          >
            To See Styling in function component
          </button>
          {flex1 && <FunctionalComponent />}
        </box1>
        <box2>
          <button
            onClick={() => {
              flex2 ? setName2(false) : setName2(true);
            }}
          >
            To See Styling in Class component
          </button>
          {flex2 && <ClassComponent />}
        </box2>
      </div>
    </div>
  );
}

export default App;
