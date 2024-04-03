import "./App.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const App = () => {
  const [datas, setDatas] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setDatas({
      ...datas,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }

    // console.log(datas.username);
    // console.log(datas.email);
    // console.log(datas.password);
  };

  return (
    <>
      <div id="main">
        <div className="sub">
          <div className="left">
            <div className="top">
              <h1>
                Welcome,{" "}
                <span className="data_heading">
                  {show ? datas.username : "Username"}
                </span>
              </h1>
            </div>
            <div className="bottom">
              <h3>
                Your emailID:{" "}
                <span className="data">
                  {show ? datas.email : "User Email"}
                </span>
              </h3>
              <h3>
                Your Password:{" "}
                <span className="data">
                  {show ? datas.password : "User Password"}
                </span>
              </h3>
            </div>
          </div>
          <div className="right">
            <form>
              <div className="heading">
                <h1>Registration Form</h1>
              </div>

              <TextField
                id="outlined-basic"
                label="Email "
                value={datas.email}
                name="email"
                type="email"
                autoComplete="off"
                variant="outlined"
                style={{
                  marginTop: "10px",
                  width: "100%",
                }}
                onChange={(e) => changeHandler(e)}
              />
              <br />
              <TextField
                id="outlined-basic"
                label="Username"
                value={datas.username}
                type="text"
                name="username"
                autoComplete="off"
                variant="outlined"
                style={{
                  marginTop: "10px",
                  width: "100%",
                }}
                onChange={(e) => changeHandler(e)}
              />
              <br />
              <TextField
                id="outlined-basic"
                label="Password"
                autoComplete="off"
                name="password"
                type="password"
                value={datas.password}
                variant="outlined"
                style={{
                  marginTop: "10px",
                  width: "100%",
                }}
                onChange={(e) => changeHandler(e)}
              />
              <div
                className="select"
                style={{
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                <Button
                  style={{
                    width: "50%",
                    backgroundColor: "#664504", // Dark brown background color
                    color: "#fff", // White text color
                    borderRadius: "10px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    border: "2px solid #664504", // Dark brown border
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", // Shadow effect
                  }}
                  variant="contained"
                  onClick={submitHandler} // Add this line
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
