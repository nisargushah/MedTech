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
      showAppointmentList:false,
      showAppointmentFile:false,
      showAppointmentUpdate:false,
      showAppointmentPost:false,
      showAppointmentDelete:false,
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
          value="Appointments"
          name="showAppointmentList"
          className="tab"
          id="AppointmentList"
          onClick={this.onChange}
        />
        {this.state.showAppointmentList ? (<div>
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
          value="Appointment File"
          name="showAppointmentFile"
          className="subtab"
          id="AppointmentFile"
          onClick={this.onChange}
        />
        {this.state.showAppointmentFile ? (<div>
          Appointment file details
        </div>):null}

        <input
          type="button"
          value="Update Appointment"
          name="showAppointmentUpdate"
          className="subtab"
          id="AppointmentUpdate"
          onClick={this.onChange}
        />
        {this.state.showAppointmentUpdate ? (<div>
        <input
          type="button"
          onClick={this.handleButton.bind(this)}
          value="Update SOAP"
        />
        </div>):null}

        <input
          type="button"
          value="New Appointment"
          name="showAppointmentPost"
          className="subtab"
          id="AppointmentPost"
          onClick={this.onChange}
        />
        {this.state.showAppointmentPost ? (<div>
        <input
          type="button"
          onClick={this.handleButton.bind(this)}
          value="Post New SOAP"
        /></div>):null}

        <input
          type="button"
          value="Delete Appointment"
          name="showAppointmentDelete"
          className="subtab"
          id="AppointmentDelete"
          onClick={this.onChange}
        />
        {this.state.showAppointmentDelete ? (<div>
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
