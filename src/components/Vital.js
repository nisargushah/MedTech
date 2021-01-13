import React, { Component } from "react";
import { selectedPatientIndex } from "./PatientList";
import { doFetch, getAuth } from "../RestController";
import { selectedEncounterIndex } from "./EncounterList";

import { React15Tabulator } from "react-tabulator"; // for React 15.x
import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css";

const columns = [
  { title: "ID", field: "id", width: 60 },
  { title: "Date", field: "date" },
  { title: "Username", field: "username" },
  { title: "Note", field: "note" },
  { title: "BMI", field: "BMI" },
  { title: "BMI Status", field: "BMI_status" }
];

class Vital extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      currentSelection: {}
    };
  }

  getVitals(index){
    var indexerStr = "";
    if (index) {
      indexerStr = "/" + index;
    }
    doFetch(
      "GET",
      "patient/" + selectedPatientIndex.toString() + "/encounter" + selectedEncounterIndex.toString() + "/vital" + indexerStr,
      getAuth()
    ).then((responseJson) => {
      if (responseJson) {
        this.setState({ data: responseJson });
        console.log(responseJson);
      } else {
        this.setState({ data: [] });
      }
    });
  }

  handleButton() {
    this.getVitals();
    //console.log("Component 1 handle");

    //This sends state information over to the Home.js parent
    //this.props.callbackFromParent(this.state);
    //this.getPatient("1"); //Gets one patient of index 1
  }

  rowClick = (e, row) => {
    //console.log("ref table: ", this.ref.table); // this is the Tabulator table instance
    //console.log("rowClick id: ${row.getData().id}", row, e);
    this.setState({ currentSelection: this.data[row.getPosition()] });
    console.log(this.state.currentSelection);
  };

  render() {
    const options = {
      height: 250
    };
    return (
      <div>
        <input
          type="button"
          onClick={this.handleButton.bind(this)}
          value="Get Vitals List"
        />
        <React15Tabulator
            ref={(ref) => (this.ref = ref)}
            columns={columns}
            data={this.state.data}
            rowClick={this.rowClick}
            options={options}
            data-custom-attr="test-custom-attribute"
            className="custom-css-class"
          />

        <input
          type="button"
          onClick={this.handleButton.bind(this)}
          value="Update Vital"
        />

        <input
          type="button"
          onClick={this.handleButton.bind(this)}
          value="Post New Vital"
        />
      </div>
    );
  }
}

export default Vital;
