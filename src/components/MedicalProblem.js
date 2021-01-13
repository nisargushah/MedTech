import React, { Component } from "react";
class ComponentExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //add states here
      data: [], 
      currentSelection: {}
    };
  }

  getMedicalProblem(index){
    var indexerStr = "";
    if (index) {
      indexerStr = "/" + index;
    }
    doFetch(
      "GET",
      "patient/" + selectedPatientIndex.toString() + "/medical_problem" + indexerStr,
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
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default ComponentExample;
