import React, { useMemo, useState } from "react";
function expensiveFn(num1, num2) {
  let result = 0;
  console.log("function rendered");
  for (let i = 0; i < 200; i++) {
    for (let j = 0; j < 300; j++) {
      for (let c = 0; c < 200; c++) {
        result += num1 + num2;
      }
    }
  }
  return result;
}
const UseMemoHook = () => {
  const [n1, sN1] = useState(0);
  const [n2, sN2] = useState(0);
  // const sum = expensiveFn(+n1 + n2); boyle olursa cok fazla render oluyor ,yoruyor.
  const sum = useMemo(() => {
    return expensiveFn(+n1, +n2);
  }, [n1, n2]); //Bu sekilde yaparsan mesele contextde bir buton gorev yaptiginda expensiveFn render olmaz.Cunki sadece n1,n2 e bagli;Eger tum komponentin bagimsiz olmasini istiyorsan UseMemoHook React.memo() icersinde tanimlanacak ve fonksiyana giren degerlere bagli olucakti,
  console.log("I'm rendered");
  return (
    <>
      <input
        type={"number"}
        placeholder="Enter number"
        value={n1}
        onChange={(e) => sN1(e.target.value)}
      />
      <input
        type={"number"}
        value={n2}
        placeholder="Enter number"
        onChange={(e) => sN2(e.target.value)}
      />
      {sum}
    </>
  );
};

export default UseMemoHook;
