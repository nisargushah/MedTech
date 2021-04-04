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

const postVariables = {
  
};



class Vital extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showVitalList: false,
      showVitalFile: false,
      showVitalPost: false,
      showVitalUpdate: false,
      data: [],
      currentSelection: {},

      inputData:{temp_method: "a"},
    };
  }

  getVitals(index){
    var indexerStr = "";
    if (index) {
      indexerStr = "/" + index;
    }
    doFetch(
      "GET",
      "patient/" + selectedPatientIndex.toString() + "/encounter/" + selectedEncounterIndex.toString() + "/vital" + indexerStr,
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

  postVitals(){
    let s = this.state;
    var postData = {
      "bps": s.bps,
      "bpd": s.bpd,
    };
    console.log(postData);
  }

  handleButton() {
    this.getVitals();
  }

  rowClick = (e, row) => {
    //console.log("ref table: ", this.ref.table); // this is the Tabulator table instance
    //console.log("rowClick id: ${row.getData().id}", row, e);
    this.setState({ 
      currentSelection: this.state.data[row.getPosition()],
      showVitalFile: true
    });
    //console.log(row.getPosition());
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClick = (e) => {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
    if(e.target.name === "showVitalList"){
      this.getVitals();
    }
  }

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
        <input
          type="button"
          value="Vitals"
          name="showVitalList"
          className="tab"
          id="vitalList"
          onClick={this.onClick}
        />
        {this.state.showVitalList ? (
        <div>
        <React15Tabulator
            ref={(ref) => (this.ref = ref)}
            columns={columns}
            data={this.state.data}
            rowClick={this.rowClick}
            options={options}
            data-custom-attr="test-custom-attribute"
            className="custom-css-class"
          />
        </div>
        ):null}

        <input
          type="button"
          value="Details"
          name="showVitalFile"
          className="subtab"
          id="vitalFile"
          onclick={this.onClick}
        />
        {this.state.showVitalFile ? (
          <div>
            <p>BMI: {this.state.currentSelection.BMI}</p>
            <p>BMI Status: {this.state.currentSelection.BMI_status}</p>
            <p>Activity: {this.state.currentSelection.activity}</p>
            <p>Authorized: {this.state.currentSelection.authorized}</p>
            <p>BPD: {this.state.currentSelection.bpd}</p>
            <p>BPS: {this.state.currentSelection.bps}</p>
            <p>Date & Time: {this.state.currentSelection.date}</p>
            <p>external ID: {this.state.currentSelection.external_id}</p>
            <p>Group name: {this.state.currentSelection.groupname}</p>
            <p>Head Circ: {this.state.currentSelection.head_circ}</p>
            <p>Height: {this.state.currentSelection.height}</p>
            <p>ID: {this.state.currentSelection.id}</p>
            <p>Note: {this.state.currentSelection.note}</p>
            <p>Oxygen Saturation: {this.state.currentSelection.oxygen_stauration}</p>
            <p>PID: {this.state.currentSelection.pid}</p>
            <p>Pulse: {this.state.currentSelection.pulse}</p>
            <p>Respiration: {this.state.currentSelection.respiration}</p>
            <p>Temperature Method: {this.state.currentSelection.temp_method}</p>
            <p>Temperature: {this.state.currentSelection.temperature}</p>
            <p>User: {this.state.currentSelection.user}</p>
            <p>Waist Circ: {this.state.currentSelection.waist_circ}</p>
            <p>Weight: {this.state.currentSelection.weight}</p>
          </div>
        ):null}

        <input
          type="button"
          value="Update Vitals"
          name="showVitalUpdate"
          className="subtab"
          id="vitalFile"
          onClick={this.onClick}
        />
        {this.state.showVitalUpdate ? (
          <div>
            <input
              type="button"
              onClick={this.handleButton.bind(this)}
              value="Update Vital"
            />
          </div>
        ):null}


        <input
          type="button"
          value="New Vitals"
          name="showVitalPost"
          className="subtab"
          id="vitalFile"
          onClick={this.onClick}
        />
        {this.state.showVitalPost ? (
          <div>
            <input
              type="button"
              onClick={this.postVitals.bind(this)}
              value="Create New Vital"
            />

            <p>BPS:</p>
            <input
              name="bps"
              placeholder="BPS"
              onChange={this.onChange}
            />
            <p>BPD:</p>
            <input
              name="bpd"
              placeholder="BPd"
              onChange={this.onChange}
            />
          </div>
        ):null}
      </div>
    );
  }
}

export default Vital;