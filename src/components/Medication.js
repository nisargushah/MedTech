import React, { Component } from "react";
import { selectedPatientIndex } from "./PatientList";
import { doFetch, getAuth } from "../RestController";

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

class Medication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMedicationList: false,
      showMedicationFile: false,
      showMedicationUpdate: false,
      showMedicationPost: false,
      showMedicationDelete: false,
      data: [],
      currentSelection: {}
    };
  }

  getMedication(index) {
    var indexerStr = "";
    if (index) {
      indexerStr = "/" + index;
    }
    doFetch(
      "GET",
      "patient/" + selectedPatientIndex.toString() + "/medication" + indexerStr,
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

  rowClick = (e, row) => {
    this.setState({
      currentSelection: this.state.data[row.getPosition()],
      showMedicationFile: true
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
    if (e.target.name === "showMedicationList") {
      this.getMedication();
    }
  };

  render() {
    const options = {
      height: 250
    };
    return (
      <div>
        <input
          type="button"
          value="Medications"
          name="showMedicationList"
          className="tab"
          id="MedicationList"
          onClick={this.onChange}
        />
        {this.state.showMedicationList ? (
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
        ) : null}

        <input
          type="button"
          value="Medication File"
          name="showMedicationFile"
          className="subtab"
          id="MedicationFile"
          onClick={this.onChange}
        />
        {this.state.showMedicationFile ? (
          <div>
            <p> {this.state.currentSelection.activity}</p>
            <p> {this.state.currentSelection.begdate}</p>
            <p> {this.state.currentSelection.classification}</p>
            <p> {this.state.currentSelection.comments}</p>
            <p> {this.state.currentSelection.date}</p>
            <p> {this.state.currentSelection.destination}</p>
            <p> {this.state.currentSelection.diagnosis}</p>
            <p> {this.state.currentSelection.enddate}</p>
            <p> {this.state.currentSelection.erx_source}</p>
            <p> {this.state.currentSelection.erx_uploaded}</p>
            <p> {this.state.currentSelection.external_allergyid}</p>
            <p> {this.state.currentSelection.external_id}</p>
            <p> {this.state.currentSelection.extrainfo}</p>
            <p> {this.state.currentSelection.groupname}</p>
            <p> {this.state.currentSelection.id}</p>
            <p> {this.state.currentSelection.injury_grade}</p>
            <p> {this.state.currentSelection.injury_part}</p>
            <p> {this.state.currentSelection.injury_type}</p>
            <p> {this.state.currentSelection.list_option_id}</p>
            <p> {this.state.currentSelection.modifydate}</p>
            <p> {this.state.currentSelection.occurrence}</p>
            <p> {this.state.currentSelection.outcome}</p>
            <p> {this.state.currentSelection.pid}</p>
            <p> {this.state.currentSelection.reaction}</p>
            <p> {this.state.currentSelection.referredby}</p>
            <p> {this.state.currentSelection.reinjury_id}</p>
            <p> {this.state.currentSelection.returndate}</p>
            <p> {this.state.currentSelection.severity_al}</p>
            <p> {this.state.currentSelection.subtype}</p>
            <p> {this.state.currentSelection.title}</p>
            <p> {this.state.currentSelection.type}</p>
            <p> {this.state.currentSelection.user}</p></div>
        ) : null}

        <input
          type="button"
          value="Update Medication"
          name="showMedicationUpdate"
          className="subtab"
          id="MedicationUpdate"
          onClick={this.onChange}
        />
        {this.state.showMedicationUpdate ? (
          <div>
            <input
              type="button"
              onClick={this.handleButton.bind(this)}
              value="Update SOAP"
            />
          </div>
        ) : null}

        <input
          type="button"
          value="New Medication"
          name="showMedicationPost"
          className="subtab"
          id="MedicationPost"
          onClick={this.onChange}
        />
        {this.state.showMedicationPost ? (
          <div>
            <input
              type="button"
              onClick={this.handleButton.bind(this)}
              value="Post New SOAP"
            />
          </div>
        ) : null}

        <input
          type="button"
          value="Delete Medication"
          name="showMedicationDelete"
          className="subtab"
          id="MedicationDelete"
          onClick={this.onChange}
        />
        {this.state.showMedicationDelete ? (
          <div>
            <input
              type="button"
              onClick={this.handleButton.bind(this)}
              value="Post New SOAP"
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Medication;
