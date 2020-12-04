/*import React from "react";
import { getUser, removeUserSession } from "./Utils/Common";

function Home(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };
  console.log("aaa");
  return (
    <div>
      Welcome<br />
      <br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Home;
*/
import React, { Component } from "react";
import { getUser, removeUserSession } from "./Utils/Common";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      grant_type: "password",
      username: "",
      password: "",
      scope: "default",
      redirectToReferrer: false
    };
  }

  handleLogout() {
    sessionStorage.removeItem("token");
  }

  render() {
    if (!sessionStorage.getItem("token")) {
      console.log("aaaaaaaaaasdddsafew");
      return <Redirect to={"/"} />;
    }

    return (
      <div>
        <input
          type="button"
          onClick={this.handleLogout.bind(this)}
          value="Logout"
        />
        <p>aaaaaaaaa</p>
      </div>
    );
  }
}

export default Home;
