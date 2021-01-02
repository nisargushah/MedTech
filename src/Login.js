import React, { Component } from "react";
import { doFetch, getAuth } from "./RestController";
import { Redirect } from "react-router-dom";

import "./styles.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      grant_type: "password",
      username: "",
      password: "",
      scope: "default",
      redirectToReferrer: false,
      redirectToReferrerAdmin: false
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    if (this.state.username && this.state.password) {
      doFetch("POST","/auth", {}, this.state).then((responseJson)=>{
        if (responseJson) {
          sessionStorage.setItem("token", responseJson['access_token']);
          sessionStorage.setItem("expires_in", responseJson['expires_in']);
          sessionStorage.setItem("token_type", responseJson['token_type']);
          this.setState({ redirectToReferrer: true });
          //this.checkAdmin();
        }
      });
    }
  }

  checkAdmin(){
    doFetch("GET","/users/authorized/"+this.state.username,getAuth()).then((responseJson) => {
      if(responseJson['authorized']){
        //If authorized == 1, redirect to administration
        this.setState({redirectToReferrerAdmin: true});
        sessionStorage.setItem("administrator", 1);
      }else{
        this.setState({ redirectToReferrer: true });
      }
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    //If the redirect is TRUE, go to home
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/Home"} />;
    }

    if (sessionStorage.getItem("token")) {
      return <Redirect to={"/Home"} />;
    }

    if (this.state.redirectToReferrerAdmin) {
      return <Redirect to={"/Admin"} />;
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
