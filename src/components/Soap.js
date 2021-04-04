import React, { Component } from "react";
import { selectedPatientIndex } from "./PatientList";
import { doFetch, getAuth } from "../RestController";
import { selectedEncounterIndex } from "./EncounterList";

import { React15Tabulator } from "react-tabulator"; // for React 15.x
import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css";

const columns = [
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
      showSoapList: false,
      showSoapFile: false,
      showSoapUpdate: false,
      showSoapPost: false,

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
      "patient/" + selectedPatientIndex.toString() + "/encounter/" + selectedEncounterIndex.toString() + "/soap_note" + indexerStr,
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
    this.setState({
      currentSelection: this.state.data[row.getPosition()],
      showSoapFile: true
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
  };

  render() {
    const options = {
      height: 250
    };
    return (
      <div>
        <input
          type="button"
          value="SOAP List"
          name="showSoapList"
          className="tab"
          id="SoapList"
          onClick={this.onChange}
        />
        {this.state.showSoapList ? (<div>
          <React15Tabulator
            ref={(ref) => (this.ref = ref)}
            columns={columns}
            data={this.state.data}
            rowClick={this.rowClick}
            options={options}
            data-custom-attr="test-custom-attribute"
            className="custom-css-class"
          />
        </div>):null}

        
        <input
          type="button"
          value="SOAP File"
          name="showSoapFile"
          className="subtab"
          id="SoapFile"
          onClick={this.onChange}
        />
        {this.state.showSoapFile ? (<div>
          Soap file details
        </div>):null}

        <input
          type="button"
          value="Update SOAP"
          name="showSoapUpdate"
          className="subtab"
          id="SoapUpdate"
          onClick={this.onChange}
        />
        {this.state.showSoapUpdate ? (<div>
        <input
          type="button"
          onClick={this.handleButton.bind(this)}
          value="Update SOAP"
        />
        </div>):null}

        <input
          type="button"
          value="New SOAP"
          name="showSoapPost"
          className="subtab"
          id="SoapPost"
          onClick={this.onChange}
        />
        {this.state.showSoapPost ? (<div>
        <input
          type="button"
          onClick={this.handleButton.bind(this)}
          value="Post New SOAP"
        /></div>):null}
      </div>
    );
  }
}

export default Soap;
