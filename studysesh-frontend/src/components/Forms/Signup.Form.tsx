import { useState } from "react";

import "../../css/Forms.css/SignupForm.css";

import { SignupFormData } from "../../Models/User.Model";
import { Signup } from "../../utils/api/Signup";

export const SignupForm = () => {
const [formData,setFormData] =  useState<SignupFormData>({
    userName:"toad",
    email:"toad@gmail.com",
    phoneNumber:"6314045493"
})
console.log(import.meta.env)

const submit = async () => {
    console.log(import.meta.env.API_URL)
    try {
    const data = await Signup(formData)
    console.log(data)
    }
    catch(err){
        console.error(err)
    }
}
  return (
    <>
      <div id="container">
        <div id="formContainer">
          <div id="titleContainer">
            <h1 id="titleText">StudySesh</h1>
          </div>
          <div id="signupInfo">
            <input type="text" className="textInput" placeholder="username" />
            <input type="text" className="textInput" placeholder="Password" />
            <input
              type="text"
              className="textInput"
              placeholder="Re-type Password"
            />
            <input type="text" className="textInput" placeholder="Email" />
            <input
              type="tel"
              className="textInput"
              placeholder="phone number"
            />
            <button onClick={submit}><h1>test</h1></button>
          </div>
        </div>
      </div>
    </>
  );
};
