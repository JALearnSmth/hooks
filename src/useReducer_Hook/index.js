import { useReducer } from "react";

const UseReducerHook = () => {
  const initialState = {
    count: 0,
  };
  const reducerFn = (prevState, action) => {
    switch (action.type) {
      case "increment":
        return { count: prevState.count + action.payload };
      case "decrement":
        return { count: prevState.count - 1 };
      default:
        return prevState;
    }
  };
  const [state, dispatch] = useReducer(reducerFn, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        Increase
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
      <button onClick={() => dispatch({ type: "nothing" })}>do nothing</button>
      {state.count}
    </div>
  );
};
//Context ile tum app de gecerli ayni redux/toolkit mantikli bir state managment yapila bilir.
export default UseReducerHook;
