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

class Allergy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //add states here
      showAllergyList: false,
      showAllergyFile: false,
      showAllergyUpdate: false,
      showAllergyPost: false,
      showAllergyDelete: false,
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
          value="Allergy List"
          name="showAllergyList"
          className="tab"
          id="AllergyList"
          onClick={this.onChange}
        />
        {this.state.showAllergyList ? (<div>
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
          value="Allergy File"
          name="showAllergyFile"
          className="subtab"
          id="AllergyFile"
          onClick={this.onChange}
        />
        {this.state.showAllergyFile ? (<div>
          Soap file details
        </div>):null}

        <input
          type="button"
          value="Update AllergyAP"
          name="showAllergyUpdate"
          className="subtab"
          id="AllergyUpdate"
          onClick={this.onChange}
        />
        {this.state.showAllergyUpdate ? (<div>
        <input
          type="button"
          onClick={this.handleButton.bind(this)}
          value="Update SOAP"
        />
        </div>):null}

        <input
          type="button"
          value="New Allergy"
          name="showAllergyPost"
          className="subtab"
          id="AllergyPost"
          onClick={this.onChange}
        />
        {this.state.showAllergyPost ? (<div>
        <input
          type="button"
          onClick={this.handleButton.bind(this)}
          value="Post New SOAP"
        /></div>):null}

        <input
          type="button"
          value="Delete Allergy"
          name="showAllergyDelete"
          className="subtab"
          id="AllergyDelete"
          onClick={this.onChange}
        />
        {this.state.showAllergyDelete ? (<div>
        <input
          type="button"
          onClick={this.handleButton.bind(this)}
          value="Post New SOAP"
        /></div>):null}
      </div>
    );
  }
}

export default Allergy;
