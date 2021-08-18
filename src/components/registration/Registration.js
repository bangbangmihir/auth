import React,{useState,useEffect} from "react";
import "./registration.css";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import {validationSchema} from "../../Validation/UserValidate";


const Registration = () => {
    // const [data,setData] = useState([]);


    const [user, setUser] = useState({
      name:"",
      phone:"",
      email:"",
      password:"",
    });
    const onchange =(e) =>{
      setUser({
        ...user,
        [e.target.name]:e.target.value,
      });
    };
    

  useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
  },[user]);

    const onSubmit = async(e) =>{
        e.preventDefault();
        // const newData = {...user,id:new Date().getTime.toString()}
        // console.log(data);
        // setData([...data,newData])
        // localStorage.setItem("data", JSON.stringify(data));
        let formData={
          name:e.target[0].value,
        phone:e.target[1].value,
        email:e.target[2].value,
        password:e.target[3].value,
        };
        const isValid = await validationSchema.isValid(formData);
        console.log(isValid)

        

        alert("Succesfully Registered");
        // setUser({name:"",phone:"",email:"",password:""})
        
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
        <h3>Welcome!!!</h3>
          <p>please MAke your Account!!</p>

        </div>
          
          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Name"  name="name" value={user.name} onChange={onchange} />
            <input type="number" placeholder="Mobile" name="phone" value={user.phone} onChange={onchange} />
            <input type="text" placeholder="E-mail" name="email" value={user.email} onChange={onchange}/>
            <input type="password" placeholder="Password" name="password" value={user.password} onChange={onchange}/>
            <input type="submit" value="Submit" className="btn" />
          </form>
          <p id="p-blw">Have You Account ?<span> <Link to="/login" className="lnk">Login</Link></span></p>
          <p id="p-blw">Want User Email List ?<span> <Link to="/list" className="lnk">List</Link></span></p>
        </div>
      </div>
    </>
  );
};

export default Registration;
