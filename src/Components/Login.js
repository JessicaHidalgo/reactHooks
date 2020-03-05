import React, { useState } from "react";
import { GlobalContext } from "./GlobalContextProvider";
import TextField from "@material-ui/core/TextField";


export const LogIn = () => {
  const { username, password } = React.useContext(GlobalContext);

  const [userInput, setUser] = React.useState("");
  const [passwordInput, setPassword] = React.useState("");
  var validate = () => {
    if (username === userInput && password === passwordInput) {
      console.log("Greeted acess");
    }
    console.log("Access not greeted");
  };

  var onChangeTextField = setter => ({ target }) => setter(target.value);
  return (
    <>
   <div>
      <TextField label="User" onChange={onChangeTextField(setUser)} />
      </div>  
      <TextField label="Password" onChange={onChangeTextField(setPassword)} />
      <div>
      <button
        disabled={userInput === "" || passwordInput === ""}
        onClick={validate}
      >
        Submit
      </button>
      </div>
    </>
  );
};
