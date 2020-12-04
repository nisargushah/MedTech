import React, { Component } from "react";
//import { getUser, removeUserSession } from "./Utils/Common";
import { Redirect } from "react-router-dom";
import { getFacilities, getAllPatients } from "./RestController";
import PatientList from "./components/PatientList";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      //add states here
      redirectToReferrer: false
    };
  }

  handleLogout() {
    sessionStorage.removeItem("token");
    this.setState({ redirectToReferrer: true });
    console.log(this.state.redirectToReferrer);
  }

  handleGetAllFacilities() {
    getFacilities().then((result) => {
      let responseJson = result;
    });
  }
  handleGetAllPatients() {
    getAllPatients().then((result) => {
      let responseJson = result;
    });
  }

  render() {
    /*
    //BROKEN
    if (sessionStorage.getItem("token") == null) {
      console.log("logout");
      return <Redirect to={"/"} />;
    }*/
    if (this.state.redirectToReferrer == true) {
      console.log("Redirect working");
      return <Redirect to={"/Login"} />;
    }

    return (
      <div>
        {/*=========== 
        TOP HEADER DIV 
          Dashboard for login and misc buttons
        ===========*/}
        <div className="header">
          <input
            type="button"
            onClick={this.handleLogout.bind(this)}
            value="Logout"
          />

          <input
            type="button"
            onClick={this.handleGetAllFacilities.bind(this)}
            value="Get All Facilities"
          />

          <input
            type="button"
            onClick={this.handleGetAllPatients.bind(this)}
            value="Get All Patients"
          />
          <input
            type="button"
            //onClick={this.handleGetAllFacilities.bind(this)}
            value="Placeholder"
          />
          <input
            type="button"
            //onClick={this.handleGetAllFacilities.bind(this)}
            value="Placeholder"
          />
          <input
            type="button"
            //onClick={this.handleGetAllFacilities.bind(this)}
            value="Placeholder"
          />
          <input
            type="button"
            //onClick={this.handleGetAllFacilities.bind(this)}
            value="Placeholder"
          />
          <p>Home page, you should see this when logged in</p>
        </div>

        {/*=========== 
        MIDDLE BODY DIV 
          Includes patients list and indexer "wiki-style table of contents"
        ===========*/}
        
        <PatientList />
      </div>
    );
  }
}

export default Home;
