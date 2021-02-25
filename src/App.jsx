import React, { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [cTime, setCTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCTime(time);
  };

  setInterval(UpdateTime, 1000);
  return (
    <>
      <h1 className="time">Current Time : {cTime}</h1>
    </>
  );
};
export default App;
