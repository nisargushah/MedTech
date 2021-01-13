//Creatings this component should be similar to PatientList.js
//You should have a table listing encounters with a formatter to truncate the information for easy reading
/*
Test data for ONE encounter, see ending index variable
GET /api/patient/:pid/encounter/:eid
*/
/*
var testdata = {}
*/

import { doFetch, getAuth } from "../RestController";
import React, { Component } from "react";
import { React15Tabulator } from "react-tabulator";
import { selectedPatientIndex } from "./PatientList";
import "../styles.css";
const columns = [
  { title: "ID", field: "id", width: 60 },
  { title: "Date", field: "date" },
  { title: "Catname", field: "pc_catname" },
  { title: "Reason", field: "reason" }
];

export var selectedEncounterIndex;

class EncounterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Data states holds patient data, formattedData is for table
      data: [],
      formattedData: [],
      currentSelection: {},
      //This is from JSON data which will be set upon patient selection for display
      openEncounters: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log(prevProps.openEncounters + " "+ this.props.openEncounters);
    if (this.props.openEncounters) {
      //Perform some operation here
      this.getEncounter();
      this.setState({ openEncounters: false });
      this.props.callbackFromParent(this.state.openEncounters);
    }
  }

  getEncounter(index) {
    var indexerStr = "";
    if (index) {
      indexerStr = "/" + index;
    }
    doFetch(
      "GET",
      "patient/" + selectedPatientIndex.toString() + "/encounter" + indexerStr,
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
    this.getEncounter();
  }

  rowClick = (e, row) => {
    selectedEncounterIndex = row._row.cells[0].value;
    this.setState({
      currentSelection: this.state.data[selectedEncounterIndex]
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
  };

  render() {
    //console.log("Encounterlist.js state "+this.state.openEncounters);
    //console.log("Encounterlist.js props "+this.props.openEncounters);

    if (this.state.openEncounters) {
      //this.getEncounter();
      //this.setState({openEncounters: false});
    }

    const options = {
      height: 150,
      movableRows: true
    };
    return (
      <div>
        <input
          type="button"
          value="Encounter List"
          name="showEncounterList"
          className="tab"
          id="encounterList"
          onClick={this.onChange}
        />

       {this.state.showEncounterList ?(
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
        ): null}

        <input
          type="button"
          value="Encounter File"
          name="showEncounterFile"
          className="subtab"
          id="encounterFile"
          onClick={this.onChange}
        />
        {this.state.showEncounterFile ?(
        <div>
          <p>Encounter ID: {this.state.id}</p>
        </div>
        ): null}
      </div>
    );
  }
}

export default EncounterList;
