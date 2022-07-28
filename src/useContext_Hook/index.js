import React, { createContext } from "react";
const CounterContext = createContext();
const UseContextHook = () => {
  const count = 42;
  return (
    <CounterContext.Provider value={count}>
      <CounterList />
    </CounterContext.Provider>
  );
};
const CounterList = () => {
  return <Counter />;
};
const Counter = () => {
  return (
    <CounterContext.Consumer>
      {(value) => <h1>{value}</h1>}
    </CounterContext.Consumer>
  );
};
export default UseContextHook;
