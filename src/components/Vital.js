import React, { Component } from "react";
import { selectedPatientIndex } from "./PatientList";
import { doFetch, getAuth } from "../RestController";
import { selectedEncounterIndex } from "./EncounterList";

class Vital extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  getVitals(index){
    var indexerStr = "";
    if (index) {
      indexerStr = "/" + index;
    }
    doFetch(
      "GET",
      "patient/" + selectedPatientIndex.toString() + "/encounter" + selectedEncounterIndex.toString() + "/vital" + indexerStr,
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
    this.getVitals();
    //console.log("Component 1 handle");

    //This sends state information over to the Home.js parent
    //this.props.callbackFromParent(this.state);
    //this.getPatient("1"); //Gets one patient of index 1
  }

  render() {
    return (
      <div>
        <input
          type="button"
          onClick={this.handleButton.bind(this)}
          value="Get Vitals List"
        />
      </div>
    );
  }
}

export default Vital;
