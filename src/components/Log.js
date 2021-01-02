import React, { Component } from "react";
import { React15Tabulator } from "react-tabulator"; // for React 15.x
import { logdata, userlist } from "./Formatter";
import { doFetch, getAuth } from "../RestController";
import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css";
import Calendar from './Calendar'

import "./Log.css";
var index = -1;

const logColumns = [
  { title: "Date", field: "date" },
  { title: "Username", field: "user" },
  { title: "Event", field: "event" },
  { title: "Comment", field: "comments" }
];

class Log extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logData: logdata,
      currentSelection: {},

      showLog: false,
      startDate: null
    };
  }

  onChange = (e) => {
    this.setState({[e.target.name]: !this.state[e.target.name]});
  }
  rowClick = (e, row) => {
    //console.log("ref table: ", this.ref.table); // this is the Tabulator table instance
    //console.log("rowClick id: ${row.getData().id}", row, e);
    //index = row._row.cells[0].value;
    this.setState({ currentSelection: logdata[row.getPosition()] });
    this.setState({showLog:true});
    console.log(this.state.currentSelection);
  };

  calendarChange = (startDate, endDate) => {
    console.log(startDate);
    console.log(endDate);
    this.setState({startDate,endDate});
  }

  render() {
    const options = {
      height: 250
    };

    console.log(this.state.startDate);
    return (
      <div>
        <Calendar startDate={this.state.startDate} /> 

        <React15Tabulator
          ref={(ref) => (this.ref = ref)}
          columns={logColumns}
          data={logdata}
          options={options}
          rowClick={this.rowClick}
          data-custom-attr="test-custom-attribute"
          className="custom-css-class"
        />

        <div className="row">
          <input
              type="button"
              value="Log Summary"
              name="showLog"
              className="tab"
              onClick={this.onChange}
          />
            
          {this.state.showLog?
          <div className="container">
          <div className="column-left">
            <p>Date: {this.state.currentSelection.date}</p>
            <p>Username: {this.state.currentSelection.user}</p>
            <p>Event: {this.state.currentSelection.event}</p>
          </div>
          <div className="column-right">
            <p>Comments: {this.state.currentSelection.comments}</p>
          </div>
          </div>
        :null}
        </div>
      </div>
    );
  }
}

export default Log;
