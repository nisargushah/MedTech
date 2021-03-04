import React, { Component } from "react";

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

  handleButton() {
  }

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
          Medical Problem file details
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
