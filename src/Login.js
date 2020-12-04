/*import { PostAuth } from "./RestController";

import React, { useState } from "react";
import axios from "axios";
import { setUserSession } from "./Utils/Common";

function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);

  const headers = {
    "Content-Type": "application/json"
  };
  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post(
        "https://mlp9791.uta.cloud/openemr/apis/api/auth",
        {
          grant_type: "password",
          username: username.value,
          password: password.value
        },
        { headers: headers }
      )
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        props.history.push("/Home");
      })
      .catch((error) => {
        setLoading(false);
        //if (error.response.status === 401) setError(error.response.data.message);
        //else
        setError("Something went wrong. Please try again later.");
      });
  };

  return (
    <div>
      Login
      <br />
      <br />
      <div>
        Username
        <br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password
        <br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && (
        <>
          <small style={{ color: "red" }}>{error}</small>
          <br />
        </>
      )}
      <br />
      <input
        type="button"
        value={loading ? "Loading..." : "Login"}
        onClick={handleLogin}
        disabled={loading}
      />
      <br />
    </div>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange
  };
};

export default Login;*/

import React, { Component } from "react";
import { PostAuth } from "./RestController";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      grant_type: "password",
      username: "",
      password: "",
      scope: "default",
      redirectToReferrer: false
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    if (this.state.username && this.state.password) {
      //if username password exists
      PostAuth("login", this.state).then((result) => {
        let responseJson = result;

        //Store session data for user upon login
        if (responseJson) {
          //console.log(responseJson['access_token']);
          sessionStorage.setItem("token", JSON.stringify(responseJson));
          this.setState({ redirectToReferrer: true });
          //Redirects to pages. In this case, go to homepage on successful login, see render comments
        }
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    //If the redirect is TRUE, go to home
    if (this.state.redirectToReferrer) {
      console.log("aaaaaaa");
      return <Redirect to={"/Home"} />;
    }

    if (sessionStorage.getItem("token")) {
      console.log("getItem(token)" + sessionStorage.getItem("token"));
      return <Redirect to={"/Home"} />;
    }

    return (
      <div className="row" id="Body">
        <div className="medium-5 columns left">
          <h4>Login</h4>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.onChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.onChange}
          />
          <input
            type="submit"
            className="button success"
            value="Login"
            onClick={this.login}
          />
        </div>
      </div>
    );
  }
}

export default Login;
