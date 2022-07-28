import React, { useCallback, useState } from "react";
const CounterButton = React.memo(({ increment }) => {
  console.log("render");
  return <button onClick={increment}>Increment</button>;
});
const UseCallBackHook = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);
  const increment2 = () => setCount((c) => c + 1);
  const increment3 = useCallback(() => {
    setCount((c) => c + value);
  }, [value]);
  return (
    <>
      {count}
      <CounterButton increment={increment} />{" "}
      {/* incerement propsunu ,inceremnt 2 ile degistirirsek her renderi console-da gorecegiz*/}
      <input type={"number"} onChange={(e) => setValue(+e.target.value)} />
      {/* incerement3 de ise ,input degerini onchange ile handle edip ,set yaptigimizdan re-render olucak.Ancak butona bastigimizda re-render olmuycak.*/}
    </>
  );
};

export default UseCallBackHook;
