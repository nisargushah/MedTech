import React, { Component } from "react";
//import { getUser, removeUserSession } from "./Utils/Common";
import { Redirect } from "react-router-dom";

import PatientList from "./components/PatientList";
import EncounterList from "./components/EncounterList";
import ComponentExample from "./components/ComponentExample";
import Vital from "./components/Vital";
import Soap from "./components/Soap";
import MedicalProblem from "./components/MedicalProblem";
import Allergy from "./components/Allergy";
import Medication from "./components/Medication";
import Surgery from "./components/Surgery";
import DentalIssue from "./components/DentalIssue";
import Appointment from "./components/Appointment";
import Insurance from "./components/Insurance";


import "./styles.css";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      //add states here
      test: "1",
      openEncounters: false,
      redirectToReferrer: false
    };
  }

  handleLogout() {
    sessionStorage.removeItem("token");
    this.setState({ redirectToReferrer: true });
  }

  myCallback = (dataFromChild) => {
    this.setState({ test: dataFromChild.test });
    console.log(this.state.test);
  };

  setOpenEncounters = (dataFromChild) => {
    this.setState({ openEncounters: dataFromChild });
    console.log(this.state);
  };

  render() {
    /*
    //BROKEN
    if (sessionStorage.getItem("token") == null) {
      console.log("logout");
      return <Redirect to={"/"} />;
    }*/
    //console.log("Home.js"+this.state.openEncounters);
    if (this.state.redirectToReferrer === true) {
      return <Redirect to={"/Login"} />;
    }

    return (
      <div>
        {/*=========== 
        TOP HEADER DIV 
          Dashboard for login and misc buttons
        ===========*/}
        <div className="header">
          <div className="header-right">
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
              onClick={this.handleLogout.bind(this)}
              value="Logout"
            />
          </div>
          <div className="header-left">
            <h3>MedTech</h3>
          </div>
        </div>
        {/*=========== 
        SIDEBAR DIV 
          Hyperlinks to various sections of the page
        ===========*/}
        <div className="sidenav">
          <a href="#patientList">Patient List</a>
          <a href="#patientProfile">Patient Profile</a>
          <a href="#encounterList">Encounter List</a>
          <a href="#encounterProfile">Encounter Profile</a>
          <a href="#encounterVitals">Vitals</a>
          <a href="#encounterSOAP">SOAP</a>
          <a href="#medicalProblem">Medical Problem</a>
          <a href="#allergy">Allergy</a>
          <a href="#surgery">Surgery</a>
          <a href="#dentalIssue">Dental Issue</a>
          <a href="#appointment">Appointment</a>
          <a href="#insurance">Insurance</a>
        </div>

        <div className="main">
          {/*=========== 
        MIDDLE BODY DIV 
          Includes patients list and indexer "wiki-style table of contents"
        ===========*/}
          <PatientList
            id="patientList"
            callbackFromParent={this.setOpenEncounters}
            openEncounters={this.state.openEncounters}
          />

          <EncounterList
            callbackFromParent={this.setOpenEncounters}
            openEncounters={this.state.openEncounters}
          />

          <Vital/>
          <Soap/>
          <MedicalProblem/>
          <Allergy/>
          <Medication/>
          <Surgery/>
          <DentalIssue/>
          <Appointment/>
          <Insurance/>

          {/* 
            Vitals
            Soap

            Medical Problem

            Allergy

            Medication

            Surgery

            Dental isue

            Appointment

            Insurance
          */}
          <p>Component Example Placeholder</p>
          <ComponentExample
            callbackFromParent={this.myCallback}
            tester={this.state.test}
          />
        </div>
      </div>
    );
  }
}

export default Home;
