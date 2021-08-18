import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const List = () => {
  const [email, setEmail] = useState();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      console.log(data.email);
      setEmail(data.email);
    } else {
      return [];
    }
  }, []);

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
        <div className="right">
        <div className="info">
        <h3>Welcome!!!</h3>
          <p>please MAke your Account!!</p>

        </div>
          
          <form >
            <input type="text"  value={email} onChange={onchange} />
          </form>
          <p id="p-blw">Have You Account ?<span> <Link to="/login" className="lnk">Login</Link></span></p>
          <p id="p-blw">Want User Email List ?<span> <Link to="/" className="lnk">Register</Link></span></p>
        </div>
        </div>
      </div>
    </>
  );
};

export default List;
