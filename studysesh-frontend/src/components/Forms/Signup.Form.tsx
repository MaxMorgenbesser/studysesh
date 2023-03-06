import { useState } from "react";
import { Link } from "react-router-dom";

import "../../css/Forms.css/SignupForm.css";

import { SignupFormData } from "../../Models/User.Model";
import { Signup } from "../../utils/api/Signup";

export const SignupForm = () => {
  const [error, setError] = useState<string>();
  const [checkPassword, setCheckPassword] = useState<string>();
  const [formData, setFormData] = useState<SignupFormData>({
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const submit = async () => {
    try {
      let missing: boolean = false;
      Object.values(formData).map((value) => {
        if (!value) {
          setError("missing required fields");
          missing = true;
        }
      });

      if (missing) return;

      const data = await Signup(formData);
      setError('')
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div id="container">
        <div id="formContainer">
          <div id="titleContainer">
            <h1 id="titleText">StudySesh</h1>
          </div>
          <div id="signupInfo">
            <input
              type="text"
              className="textInput"
              placeholder="username"
              onChange={(e) =>
                setFormData({ ...formData, userName: e.target.value })
              }
            />
            <input
              type="password"
              className="textInput"
              placeholder="Password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <input
              onChange={(e) => setCheckPassword(e.target.value)}
              type="password"
              className="textInput"
              placeholder="Re-type Password"
            />
            <input
              type="text"
              className="textInput"
              placeholder="Email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              type="tel"
              className="textInput"
              placeholder="phone number"
            />
            <div id="buttonContainer">

              <div>
              <button onClick={submit} className="bottomButton">
                <p className="buttonText">Signup</p>
              </button>
              </div>
              <Link to={'login'}>
              <button className="loginButton">
                <p className="loginText">Login instead</p>
              </button>
              </Link>
            </div>
            {error && <p id='errorText'>{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
};
