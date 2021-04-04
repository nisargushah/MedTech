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

class Insurance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //add states here
      showInsuranceList:false,
      showInsuranceFile:false,
      showInsuranceUpdate:false,
      showInsurancePost:false,
      showInsuranceDelete:false,
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
        value="Insurance"
        name="showInsuranceList"
        className="tab"
        id="InsuranceList"
        onClick={this.onChange}
      />
      {this.state.showInsuranceList ? (<div>
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
        value="Insurance File"
        name="showInsuranceFile"
        className="subtab"
        id="InsuranceFile"
        onClick={this.onChange}
      />
      {this.state.showInsuranceFile ? (<div>
        Insurance file details
      </div>):null}

      <input
        type="button"
        value="Update Insurance"
        name="showInsuranceUpdate"
        className="subtab"
        id="InsuranceUpdate"
        onClick={this.onChange}
      />
      {this.state.showInsuranceUpdate ? (<div>
      <input
        type="button"
        onClick={this.handleButton.bind(this)}
        value="Update SOAP"
      />
      </div>):null}

      <input
        type="button"
        value="New Insurance"
        name="showInsurancePost"
        className="subtab"
        id="InsurancePost"
        onClick={this.onChange}
      />
      {this.state.showInsurancePost ? (<div>
      <input
        type="button"
        onClick={this.handleButton.bind(this)}
        value="Post New SOAP"
      /></div>):null}

      <input
        type="button"
        value="Delete Insurance"
        name="showInsuranceDelete"
        className="subtab"
        id="InsuranceDelete"
        onClick={this.onChange}
      />
      {this.state.showInsuranceDelete ? (<div>
      <input
        type="button"
        onClick={this.handleButton.bind(this)}
        value="Post New SOAP"
      /></div>):null}
      </div>
    );
  }
}

export default Insurance;
