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

class Surgery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //add states here
      showSurgeryList: false,
      showSurgeryFile: false,
      showSurgeryUpdate: false,
      showSurgeryPost: false,
      showSurgeryDelete: false,
      data: [],
      currentSelection: {}
    };
  }

  getSurgery(index) {
    var indexerStr = "";
    if (index) {
      indexerStr = "/" + index;
    }
    doFetch(
      "GET",
      "patient/" + selectedPatientIndex.toString() + "/surgery" + indexerStr,
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
      showSurgeryFile: true
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
    if (e.target.name === "showSurgeryList") {
      this.getSurgery();
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
          value="Surgery"
          name="showSurgeryList"
          className="tab"
          id="SurgeryList"
          onClick={this.onChange}
        />
        {this.state.showSurgeryList ? (
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
          value="Surgery File"
          name="showSurgeryFile"
          className="subtab"
          id="SurgeryFile"
          onClick={this.onChange}
        />
        {this.state.showSurgeryFile ? <div>Surgery file details</div> : null}

        <input
          type="button"
          value="Update Surgery"
          name="showSurgeryUpdate"
          className="subtab"
          id="SurgeryUpdate"
          onClick={this.onChange}
        />
        {this.state.showSurgeryUpdate ? (
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
          value="New Surgery"
          name="showSurgeryPost"
          className="subtab"
          id="SurgeryPost"
          onClick={this.onChange}
        />
        {this.state.showSurgeryPost ? (
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
          value="Delete Surgery"
          name="showSurgeryDelete"
          className="subtab"
          id="SurgeryDelete"
          onClick={this.onChange}
        />
        {this.state.showSurgeryDelete ? (
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

export default Surgery;
