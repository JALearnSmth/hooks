import React from "react";
import ReactDOM from "react-dom/client";
import UseCallBackHook from "./useCallBack_Hook";
import UseRefHook from "./useRef_Hook";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1 style={{ color: "#ed2939" }}>Header:useRef</h1>
    <hr />
    <UseRefHook />
    <h1 style={{ color: "#ed2939" }}>Header:useCallback</h1>
    <hr />
    <UseCallBackHook />
  </React.StrictMode>
);
