import React, { Component } from "react";
import { React15Tabulator } from "react-tabulator"; // for React 15.x
import { formatPatients } from "./Formatter";
import { doFetch, getAuth } from "../RestController";
import EncounterList from "./EncounterList";
import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css";
import "./PatientList.css";

const columns = [
  { title: "ID", field: "id", width: 60 },
  { title: "Name", field: "name" },
  { title: "Age", field: "age", width: 70 },
  { title: "Sex", field: "sex", align: "left", width: 70 },
  { title: "Address", field: "address", align: "left" }
];

export var selectedPatientIndex = 0;

class PatientList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Data states holds patient data, formattedData is for table
      data: [],
      formattedData: [],
      //This is from JSON data which will be set upon patient selection for display
      currentSelection: {},

      openEncounters: false,
      showPatientList: true,
      showPatientFile: false,

      getFromLogin: false
    };
  }

  componentDidMount() {
    this.getPatient();
  }

  //index MUST BE STRING
  //Also index variable is never used, unsure if it is useful
  //You cannot use this function outside another component, and cannot redesign either, you need the .then part so it recieves the JSON.
  getPatient(index) {
    var indexerStr = "";
    if (index) {
      indexerStr = "/" + index;
    }
    doFetch("GET", "/patient" + indexerStr, getAuth()).then((responseJson) => {
      if (responseJson) {
        this.setState({ data: responseJson });
        this.setState({ formattedData: formatPatients(responseJson) });
      }
    });
  }

  handleGetPatient() {
    this.getPatient();
    //this.getPatient("1"); //Gets one patient of index 1
  }

  //TABLE STUFF
  //This function changes the index of the selected patient and sets all of its JSON info into state for display
  rowClick = (e, row) => {
    //console.log("ref table: ", this.ref.table); // this is the Tabulator table instance
    //console.log("rowClick id: ${row.getData().id}", row, e);
    selectedPatientIndex = row._row.cells[0].value;
    this.setState({
      currentSelection: this.state.data[selectedPatientIndex - 1],
      showPatientFile: true
    });

    this.setState({ openEncounters: true });
    this.props.callbackFromParent(this.state.openEncounters);
    this.setState({ openEncounters: false });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
  };

  render() {
    //console.log("PatientList.js"+this.state.openEncounters);
    const options = {
      height: 150,
      movableRows: true
    };

    return (
      <div>
        {/*=================
        PATIENT LIST IN TABLE
        =================*/}
        <input
          type="button"
          value="Patient List"
          name="showPatientList"
          className="tab"
          id="patientList"
          onClick={this.onChange}
        />
        {this.state.showPatientList ? (
          <div>
            <React15Tabulator
              ref={(ref) => (this.ref = ref)}
              columns={columns}
              data={this.state.formattedData}
              rowClick={this.rowClick}
              options={options}
              data-custom-attr="test-custom-attribute"
              className="custom-css-class"
            />
          </div>
        ) : null}

        {/*=================
        PATIENT FILE
        =================*/}
        <input
          type="button"
          value="Patient File"
          name="showPatientFile"
          className="subtab"
          id="patientProfile"
          onClick={this.onChange}
        />

        {this.state.showPatientFile ? (
          <div>
            <p>
              Name: {this.state.formattedData[selectedPatientIndex - 1]["name"]}
            </p>
            <p>
              Date of Birth {this.state.currentSelection.dob} (
              {this.state.formattedData[selectedPatientIndex - 1]["age"]} Years)
            </p>
            <p>Sex: {this.state.currentSelection.sex}</p>
            <p>Phone Number: {this.state.currentSelection.phone}</p>
            <p>Email: {this.state.currentSelection.email}</p>

            {/*ID of patient in system*/}
            <p>ID: {this.state.currentSelection.id}</p>
            <p>PID: {this.state.currentSelection.pid}</p>
            <p>PUBID: {this.state.currentSelection.pubid}</p>

            {/*Patient's ancestry*/}
            <p>Ethnicity {this.state.currentSelection.ethnicity}</p>
            <p>Race: {this.state.currentSelection.race}</p>

            {/*Patient's Address*/}
            {/*
            <p>State: {this.state.currentSelection.state}</p>
            <p>Street: {this.state.currentSelection.street}</p>
            <p>Postal Code: {this.state.currentSelection.postal_code}</p>
            <p>City {this.state.currentSelection.city}</p>
            <p>country code {this.state.currentSelection.country}</p>*/}
            <p>
              Address:{" "}
              {this.state.formattedData[selectedPatientIndex - 1]["address"]}
            </p>
            <p>country code {this.state.currentSelection.country}</p>

            <p>Title: {this.state.currentSelection.title}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default PatientList;
