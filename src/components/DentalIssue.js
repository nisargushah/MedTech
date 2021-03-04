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

class Dentalissue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //add states here
      showDentalissueList:false,
      showDentalissueFile:false,
      showDentalissueUpdate:false,
      showDentalissuePost:false,
      showDentalissueDelete:false,
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
        value="Dental Issue List"
        name="showDentalissueList"
        className="tab"
        id="DentalissueList"
        onClick={this.onChange}
      />
      {this.state.showDentalissueList ? (<div>
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
        value="Dental Issue File"
        name="showDentalissueFile"
        className="subtab"
        id="DentalissueFile"
        onClick={this.onChange}
      />
      {this.state.showDentalissueFile ? (<div>
        Dentalissue file details
      </div>):null}

      <input
        type="button"
        value="Update Dental Issue"
        name="showDentalissueUpdate"
        className="subtab"
        id="DentalissueUpdate"
        onClick={this.onChange}
      />
      {this.state.showDentalissueUpdate ? (<div>
      <input
        type="button"
        onClick={this.handleButton.bind(this)}
        value="Update SOAP"
      />
      </div>):null}

      <input
        type="button"
        value="New Dental Issue"
        name="showDentalissuePost"
        className="subtab"
        id="DentalissuePost"
        onClick={this.onChange}
      />
      {this.state.showDentalissuePost ? (<div>
      <input
        type="button"
        onClick={this.handleButton.bind(this)}
        value="Post New SOAP"
      /></div>):null}

      <input
        type="button"
        value="Delete Dental Issue"
        name="showDentalissueDelete"
        className="subtab"
        id="DentalissueDelete"
        onClick={this.onChange}
      />
      {this.state.showDentalissueDelete ? (<div>
      <input
        type="button"
        onClick={this.handleButton.bind(this)}
        value="Post New SOAP"
      /></div>):null}
      </div>
    );
  }
}

export default Dentalissue;
