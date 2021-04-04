import React, { Component } from "react";
import { selectedPatientIndex } from "./PatientList";
import { doFetch, getAuth } from "../RestController";
import { React15Tabulator } from "react-tabulator"; // for React 15.x
import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css";

const columns = [
  { title: "ID", field: "id", width: 60 },
  { title: "Username", field: "username" },
  { title: "Name", field: "name" },
  { title: "Active", field: "active" },
  { title: "Specialty", field: "specialty" }
];

class MedicalProblem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMedicalProblemList:false,
      showMedicalProblemFile:false,
      showMedicalProblemUpdate:false,
      showMedicalProblemPost:false,
      showMedicalProblemDelete:false,
      data: [], 
      currentSelection: {}
    };
  }

  getMedicalProblem(index){
    var indexerStr = "";
    if (index) {
      indexerStr = "/" + index;
    }
    doFetch(
      "GET",
      "patient/" + selectedPatientIndex.toString() + "/medical_problem" + indexerStr,
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
      showMedicalProblemFile: true
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
    if(e.target.name === "showMedicalProblemList"){
      this.getMedicalProblem();
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
          value="Medical Problems"
          name="showMedicalProblemList"
          className="tab"
          id="MedicalProblemList"
          onClick={this.onChange}
        />
        {this.state.showMedicalProblemList ? (<div>
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
          value="Medical Problem File"
          name="showMedicalProblemFile"
          className="subtab"
          id="MedicalProblemFile"
          onClick={this.onChange}
        />
        {this.state.showMedicalProblemFile ? (<div>
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
          <p> {this.state.currentSelection.user}</p>
        </div>):null}

        <input
          type="button"
          value="Update Medical Problem"
          name="showMedicalProblemUpdate"
          className="subtab"
          id="MedicalProblemUpdate"
          onClick={this.onChange}
        />
        {this.state.showMedicalProblemUpdate ? (<div>
        <input
          type="button"
          onClick={this.handleButton.bind(this)}
          value="Update SOAP"
        />
        </div>):null}

        <input
          type="button"
          value="New Medical Problem"
          name="showMedicalProblemPost"
          className="subtab"
          id="MedicalProblemPost"
          onClick={this.onChange}
        />
        {this.state.showMedicalProblemPost ? (<div>
        <input
          type="button"
          onClick={this.handleButton.bind(this)}
          value="Post New SOAP"
        /></div>):null}

        <input
          type="button"
          value="Delete Medical Problem"
          name="showMedicalProblemDelete"
          className="subtab"
          id="MedicalProblemDelete"
          onClick={this.onChange}
        />
        {this.state.showMedicalProblemDelete ? (<div>
        <input
          type="button"
          onClick={this.handleButton.bind(this)}
          value="Post New SOAP"
        /></div>):null}
      </div>
    );
  }
}

export default MedicalProblem;
