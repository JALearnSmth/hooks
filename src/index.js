import React from "react";
import ReactDOM from "react-dom/client";
import UseCallBackHook from "./useCallBack_Hook";
import UseContextHook from "./useContext_Hook";
import UseMemoHook from "./useMemo_Hook";
import UseRefHook from "./useRef_Hook";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1 style={{ color: "#dd2939" }}>Header:useRef</h1>
    <UseRefHook />
    <hr />
    <h1 style={{ color: "#ff7939" }}>Header:useCallback</h1>
    <UseCallBackHook />
    <hr />
    <h1 style={{ color: "#000" }}>Header:useMemo</h1>
    <UseMemoHook />
    <hr />
    <h1 style={{ color: "#012345" }}>Header:useContext</h1>
    <UseContextHook />
    <hr />
    <h1 style={{ color: "#987654" }}>Header:useMemo</h1>
    <UseMemoHook />
    <hr />
  </React.StrictMode>
);
