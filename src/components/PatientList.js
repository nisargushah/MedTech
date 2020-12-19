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
      city: "",
      country_code: "",
      dob: "",
      email: "",
      ethnicity: "",
      fname: "",
      id: "",
      lname: "",
      mname: "",
      phone_contact: "",
      pid: "",
      postal_code: "",
      pubpid: "",
      race: "",
      sex: "",
      state: "",
      street: "",
      title: "",

      openEncounters: false
    };
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
    let selection = this.state.data[selectedPatientIndex-1];
    this.setState({city: selection["city"]});
    this.setState({country_code: selection["country_code"]});
    this.setState({dob: selection["dob"]});
    this.setState({email: selection["email"]});
    this.setState({ethnicity: selection["ethnicity"]});
    this.setState({fname: selection["fname"]});
    this.setState({id: selection["id"]});
    this.setState({lname: selection["lname"]});
    this.setState({mname: selection["mname"]});
    this.setState({phone_contact: selection["phone_contact"]});
    this.setState({pid: selection["pid"]});
    this.setState({postal_code: selection["postal_code"]});
    this.setState({pubpid: selection["pubpid"]});
    this.setState({race: selection["race"]});
    this.setState({sex: selection["sex"]});
    this.setState({state: selection["state"]});
    this.setState({street: selection["street"]});
    this.setState({title: selection["title"]});

    this.setState({openEncounters: true});
    this.props.callbackFromParent(this.state.openEncounters);
    this.setState({openEncounters: false});
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
        <div>
          <input
            type="button"
            onClick={this.handleGetPatient.bind(this)}
            value="Get Patient"
          />

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

        {/*=================
        PATIENT PROFILE
        =================*/}
        <div>
          <p id="patientProfile">Patient Profile</p>
          <p>Phone Number: {this.state.phone_contact}</p>
        </div>
      </div>
    );
  }
}

export default PatientList;
