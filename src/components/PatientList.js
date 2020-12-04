import React, { Component } from "react";
import { React15Tabulator } from "react-tabulator"; // for React 15.x
import { getAge,getName,getAddress } from "./Formatter";
import {doFetch, auth} from "../RestController";
import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css";

const columns = [
  { title: "ID", field: "id", width: 60 },
  { title: "Name", field: "name", width: 150 },
  { title: "Age", field: "age", align: "left" },
  { title: "Sex", field: "sex", align: "left", width: 70 },
  { title: "Address", field: "age", align: "left" }
];

var testdata = [
  {"id":"1",
  "pid":"1",
  "pubpid":"11",
  "title":"",
  "fname":"Andrew",
  "mname":"L",
  "lname":"Forsman",
  "street":"1000 Main Rd.",
  "postal_code":"76018",
  "city":"Fiction",
  "state":"TX",
  "country_code":"USA",
  "phone_contact":"0111111111",
  "email":"AndyForsman@gmail.com",
  "dob":"1997-10-22",
  "sex":"Male",
  "race":"white",
  "ethnicity":"not_hisp_or_latin"}

  ,{"id":"2",
  "pid":"2",
  "pubpid":"22222",
  "title":"",
  "fname":"Randy",
  "mname":"A",
  "lname":"Johson",
  "street":"1001 Main Rd.",
  "postal_code":"76018",
  "city":"Fiction",
  "state":"TX",
  "country_code":"",
  "phone_contact":"",
  "email":"",
  "dob":"1997-10-31",
  "sex":"Male",
  "race":"",
  "ethnicity":""}];




  //console.log(testdata[1]); //Get index 1
  
  //console.log(testdata[1].state); //Get index 1, get its state
const data = [{ name: "Andy", age: "15" }];

class PatientList extends Component {
  constructor() {
    super();

    this.state = {
      data: []
      //add states here
    };
  }

  //index MUST BE STRING
  getPatient(index){
    var indexerStr ="";
    if(index){
      indexerStr = "/"+index;
    }
    doFetch("GET","/patient"+indexerStr, auth).then((responseJson)=>{
      if (responseJson) {
        console.log(responseJson);
      }
    });
    
  }

  handleGetPatient(){
    this.getPatient("1"); //Gets all patients
    
    //this.getPatient("1"); //Gets one patient of index 1
  }


  //TABLE STUFF
  rowClick = (e, row) => {
    console.log("ref table: ", this.ref.table); // this is the Tabulator table instance
    console.log("rowClick id: ${row.getData().id}", row, e);
  };
  setData = () => {
    this.setState({ data });
  };
  clearData = () => {
    this.setState({ data: [] });
  };

  render() {
    const options = {
      height: 150,
      movableRows: true
    };
    return (
      <div>
        <input
            type="button"
            onClick={this.handleGetPatient.bind(this)}
            value="Get Patient"
          />

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
    );
  }
}

export default PatientList;
