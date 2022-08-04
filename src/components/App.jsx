import React, { useState } from "react";

export const App = () => {
  const [state, setState] = useState(1);
  return (
    <>
      <div>Hello App {state}</div>
      <button onClick={() => setState((prev) => prev + 1)}>Increase</button>
    </>
  );
};
