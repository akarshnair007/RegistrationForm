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
  const [errors, setErrors] = useState({
    usernameError: "",
    passwordError: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      if (value.length !== 7) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          usernameError: "Username must be 7 characters long.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          usernameError: "",
        }));
      }
      setShow(false);
    }
    // Validate password
    if (name === "password") {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
      if (!passwordRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          passwordError:
            "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 7 characters long.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          passwordError: "",
        }));
      }
    }
    // Update datas state
    setDatas({
      ...datas,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    alert("Registered Successfully");

    if (errors.usernameError || errors.passwordError) {
      return;
    }

    setShow(true);
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
              {errors.usernameError && (
                <p style={{ color: "red", marginTop: "5px" }}>
                  {errors.usernameError}
                </p>
              )}
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
              {errors.passwordError && (
                <p style={{ color: "red", marginTop: "5px" }}>
                  {errors.passwordError}
                </p>
              )}
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
