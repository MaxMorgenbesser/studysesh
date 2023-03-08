import { useState } from "react";
import "../../css/Forms.css/LoginForm.css";
import { Login } from "../../utils/api/Login";

const LoginForm = () => {
  const [username,setUsername] = useState<string>()
  const [password,setPassword] = useState<string>()
  const [error,setError] = useState<string>()
  const submit = async() => {
    try {
      if (!username || !password){
        setError('username and password are both required')
        return
      }

      const response = await Login({username:username,password:password})
      console.log(response.data)
      setError('')
    }
catch(err){
  console.error(err)
}
  }



  return (
    <>
      <div id="container">
        <div id="formContainer"> 
            <input type="text" className="textInput" placeholder="username"
            onChange={e=>setUsername(e.target.value)}
            />
            <input type="text" className="textInput" placeholder="password" 
                onChange={e=>setPassword(e.target.value)}
            />
            <button onClick={submit}><h3>submit</h3></button>
            {error && <h3>{error}</h3>}
        </div>
      </div>
    </>
  );
};

export default LoginForm;
