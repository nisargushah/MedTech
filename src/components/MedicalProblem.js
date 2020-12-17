import React, { Component } from "react";
class ComponentExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //add states here
      test: "2"
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
    console.log("Component 1 handle");

    //This sends state information over to the Home.js parent
    this.props.callbackFromParent(this.state);
    //this.getPatient("1"); //Gets one patient of index 1
  }

  render() {
    return (
      <div>
        <input
          type="button"
          onClick={this.handleButton.bind(this)}
          value="Test Button"
        />
        <p>test prop recieve: {this.props.tester}</p>
      </div>
    );
  }
}

export default ComponentExample;
