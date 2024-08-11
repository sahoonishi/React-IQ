import React, { useState } from "react";
import OtpBox from "./OtpBox";

const InputBox = () => {
  const [first, setfirst] = useState("");
  const [firstt, setfirstt] = useState(false);

  const onSubmithandler = (e) => {
    e.preventDefault();
    const regex = /^[0-9]/;
    if (first.length < 10 && regex.test(first)){
      alert("Please enter");
      return;
    } 

    setfirstt(true);
  };
  const handleNumber = (event) => {
    setfirst(event.target.value);
  };
  const onotpSubmit = (otp) => {
    console.log("success" , otp);
    
  };
  return (
    <div className="App">
      {!firstt ? (
        <form action="" onSubmit={onSubmithandler}>
          <input
            type="text"
            value={first}
            onChange={handleNumber}
            placeholder="enter number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <OtpBox length={4} onotpSubmit={onotpSubmit}/>
        </>
      )}
    </div>
  );
};

export default InputBox;
