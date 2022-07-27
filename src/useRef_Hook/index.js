import { useEffect, useRef } from "react";
const UseRefHook = () => {
  const divRef = useRef();
  const changeRef = useRef(0);
  useEffect(() => {
    divRef.current.innerText = "Hello World";
  }, []);
  return (
    <>
      <div ref={divRef}></div>
      <h1>{changeRef.current}</h1>
      <button
        onClick={() => {
          changeRef.current = changeRef.current + 1;
          console.log(changeRef);
          //useRef de her degisimde re-render yasanmaz.
        }}
      >
        Increase
      </button>
    </>
  );
};
export default UseRefHook;
