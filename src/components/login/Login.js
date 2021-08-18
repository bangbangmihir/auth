import React,{useState} from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = (e) =>{
        e.preventDefault();
        let data=JSON.parse(localStorage.getItem("user"));
        console.log(data.name,data.password);
        if((name !== data.name) || (password !== data.password)){
            alert("Wrong Credentials")
            console.log(data);
        }
        else{
            alert("Succesfully LogIn")
        }
    }

  return (
    <>
      <div className="main">
        <div className="left">
          <img
            src={require("../../images/sea.jpg").default}
            alt=""
            className="img-left"
          />
        </div>
        <div className="right">
          <div className="info">
            <h3>Welcome Back!!!</h3>
            <p>please Login To your Account!!</p>
          </div>

          <form onSubmit={onLogin}>
            <input type="text" placeholder="Username" name="name" onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" value="Submit" className="btn" />
          </form>
          <p id="p-blw">Don't have an account yet?<span> <Link to="/" className="lnk">Sign Up</Link></span></p>
          <p id="p-blw">Want User Email List ?<span> <Link to="/list" className="lnk">List</Link></span></p>
          
          
        </div>
      </div>
  
    </>
  );
};

export default Login;
