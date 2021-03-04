import React, { Component } from "react";

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

class ComponentExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMedicationList:false,
      showMedicationFile:false,
      showMedicationUpdate:false,
      showMedicationPost:false,
      showMedicationDelete:false,
      data: [], 
      currentSelection: {}
    };
  }

  handleButton() {
    console.log("Component 1 handle");

    //This sends state information over to the Home.js parent
    this.props.callbackFromParent(this.state);
    //this.getPatient("1"); //Gets one patient of index 1
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
          value="Medications"
          name="showMedicationList"
          className="tab"
          id="MedicationList"
          onClick={this.onChange}
        />
        {this.state.showMedicationList ? (<div>
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
          value="Medication File"
          name="showMedicationFile"
          className="subtab"
          id="MedicationFile"
          onClick={this.onChange}
        />
        {this.state.showMedicationFile ? (<div>
          Medication file details
        </div>):null}

        <input
          type="button"
          value="Update Medication"
          name="showMedicationUpdate"
          className="subtab"
          id="MedicationUpdate"
          onClick={this.onChange}
        />
        {this.state.showMedicationUpdate ? (<div>
        <input
          type="button"
          onClick={this.handleButton.bind(this)}
          value="Update SOAP"
        />
        </div>):null}

        <input
          type="button"
          value="New Medication"
          name="showMedicationPost"
          className="subtab"
          id="MedicationPost"
          onClick={this.onChange}
        />
        {this.state.showMedicationPost ? (<div>
        <input
          type="button"
          onClick={this.handleButton.bind(this)}
          value="Post New SOAP"
        /></div>):null}

        <input
          type="button"
          value="Delete Medication"
          name="showMedicationDelete"
          className="subtab"
          id="MedicationDelete"
          onClick={this.onChange}
        />
        {this.state.showMedicationDelete ? (<div>
        <input
          type="button"
          onClick={this.handleButton.bind(this)}
          value="Post New SOAP"
        /></div>):null}
      </div>
    );
  }
}

export default ComponentExample;
