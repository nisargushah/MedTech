import React, { Component } from "react";
import { selectedPatientIndex } from "./PatientList";
import { doFetch, getAuth } from "../RestController";
import { selectedEncounterIndex } from "./EncounterList";

import { React15Tabulator } from "react-tabulator"; // for React 15.x
import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css";

const userColumns = [
  { title: "ID", field: "id", width: 60 },
  { title: "Username", field: "username" },
  { title: "Name", field: "name" },
  { title: "Active", field: "active" },
  { title: "Specialty", field: "specialty" }
];

class Soap extends Component {
  constructor() {
    super();

    this.state = {
      //add states here
      data: [],
      currentSelection: {}
    };
  }

  getSoapNote(index){
    var indexerStr = "";
    if (index) {
      indexerStr = "/" + index;
    }
    doFetch(
      "GET",
      "patient/" + selectedPatientIndex.toString() + "/encounter" + selectedEncounterIndex.toString() + "/soap_note" + indexerStr,
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
          value="Test Button"
        />
        <React15Tabulator
          ref={(ref) => (this.ref = ref)}
          columns={userColumns}
          data={this.state.data}
          rowClick={this.rowClick}
          options={options}
          data-custom-attr="test-custom-attribute"
          className="custom-css-class"
        />

        
        <input
          type="button"
          onClick={this.handleButton.bind(this)}
          value="Post New SOAP"
        />
        <input
          type="button"
          onClick={this.handleButton.bind(this)}
          value="Update SOAP"
        />
      </div>
    );
  }
}

export default Soap;
