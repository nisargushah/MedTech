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

  getAppointment(index){
    var indexerStr = "";
    if (index) {
      indexerStr = "/" + index;
    }
    doFetch(
      "GET",
      "patient/" + selectedPatientIndex.toString() + "/appointment" + indexerStr,
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
      showAppointmentFile: true
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
    if(e.target.name === "showAppointmentList"){
      this.getAppointment();
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
          <p>DOB: {this.state.currentSelection.DOB}</p>
          <p>Billing Facility Name: {this.state.currentSelection.billing_location_name}</p>
          <p>Facility Name: {this.state.currentSelection.facility_name}</p>
          <p>Name: {this.state.currentSelection.fname}    {this.state.currentSelection.lname}</p>
          <p>PC Appointment Status: {this.state.currentSelection.pc_apptstatus}</p>
          <p>PC Billing Location: {this.state.currentSelection.pc_billing_location}</p>
          <p>PC EID: {this.state.currentSelection.pc_eid}</p>
          <p>PC End Time: {this.state.currentSelection.pc_endTime}</p>
          <p>PC Event Date: {this.state.currentSelection.pc_eventDate}</p>
          <p>PC Facility: {this.state.currentSelection.pc_facility}</p>
          <p>PC Start Time: {this.state.currentSelection.pc_startTime}</p>
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
