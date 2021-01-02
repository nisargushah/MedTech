import React, { Component } from "react";
import { React15Tabulator } from "react-tabulator"; // for React 15.x
import { logdata, userlist } from "./components/Formatter";
import { doFetch, getAuth } from "./RestController";
import UserList from "./components/UserList";
import LogList from "./components/Log";
import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css";

export var selectedUsername = "";
var index = -1;

const userColumns = [
  { title: "ID", field: "id", width: 60 },
  { title: "Username", field: "username" },
  { title: "Name", field: "name" },
  { title: "Active", field: "active" },
  { title: "Specialty", field: "specialty" }
];

const logColumns = [
  { title: "Date", field: "date" },
  { title: "Username", field: "user" },
  { title: "Event", field: "event" },
  { title: "Comment", field: "comments" }
];

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logData: logdata,
      currentSelection: {}
    };
  }

  handleLogout() {
    sessionStorage.removeItem("token");
    this.setState({ redirectToReferrer: true });
  }

  handleButton() {
    console.log("Component 1 handle");

    //This sends state information over to the Home.js parent
    this.props.callbackFromParent(this.state);
    //this.getPatient("1"); //Gets one patient of index 1
  }

  rowClick = (e, row) => {
    //console.log("ref table: ", this.ref.table); // this is the Tabulator table instance
    //console.log("rowClick id: ${row.getData().id}", row, e);
    index = row._row.cells[0].value;
    selectedUsername = row._row.cells[1].value;
    this.setState({ currentSelection: userlist[index - 1] });
    console.log(this.state.currentSelection);
  };

  render() {

    return (
      <div>
        {/*=========== 
        TOP HEADER DIV 
          Dashboard for login and misc buttons
        ===========*/}
        <div className="header">
          <div className="header-right">
            <input
              type="button"
              //onClick={this.handleGetAllFacilities.bind(this)}
              value="Placeholder"
            />
            <input
              type="button"
              //onClick={this.handleGetAllFacilities.bind(this)}
              value="Patient Management"
            />
            <input
              type="button"
              onClick={this.handleLogout.bind(this)}
              value="Logout"
            />
          </div>
          <div className="header-left">
            <h3>MedTech Administration</h3>
          </div>
        </div>
        {/*=========== 
        SIDEBAR DIV 
          Hyperlinks to various sections of the page
        ===========*/}
        <div className="sidenav">
          <a href="#userList">Users</a>
          <a href="#logList">Logs</a>
        </div>

        <div className="main">
          <h3 id="userList">Users</h3>

          <UserList/>

          <h3 id="logList">Log</h3>

          <LogList/>

          <div></div>
        </div>
      </div>
    );
  }
}

export default Admin;
