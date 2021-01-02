import React, { Component } from "react";
import { React15Tabulator } from "react-tabulator"; // for React 15.x
import { logdata, userlist } from "./Formatter";
import { doFetch, getAuth } from "../RestController";
import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css";
import "./UserList.css";

export var selectedUsername = "";
var index = -1;

const userColumns = [
  { title: "ID", field: "id", width: 60 },
  { title: "Username", field: "username" },
  { title: "Name", field: "name" },
  { title: "Active", field: "active" },
  { title: "Specialty", field: "specialty" }
];

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: userlist,
      currentSelection: {},

      showCredential: false,
      showContact: false,
      showAccount: false,
      showOther: false,
      showAll: false
    };
  }

  rowClick = (e, row) => {
    //console.log("ref table: ", this.ref.table); // this is the Tabulator table instance
    //console.log("rowClick id: ${row.getData().id}", row, e);
    index = row._row.cells[0].value;
    selectedUsername = row._row.cells[1].value;
    this.setState({ currentSelection: userlist[index - 1] });
    console.log(this.state.currentSelection);
  };

  onChange = (e) => {
    this.setState({[e.target.name]: !this.state[e.target.name]});
  }

  showAll = () => {
    this.setState({
      showAll: true,
      showCredential : true,
      showContact: true,
      showAccount: true,
      showOther: true
    });
  }

  closeAll = () => {
    this.setState({
      showAll: false,
      showCredential : false,
      showContact: false,
      showAccount: false,
      showOther: false
    });
  }

  render() {
    const options = {
      height: 250
    };
    
    return (
      <div>
        <React15Tabulator
          ref={(ref) => (this.ref = ref)}
          columns={userColumns}
          data={userlist}
          rowClick={this.rowClick}
          options={options}
          data-custom-attr="test-custom-attribute"
          className="custom-css-class"
        />
        <div>
          <div className="row">
            <input
              type="button"
              value="Show All"
              name="showAll"
              onClick={this.showAll}
            />
            <input
            type="button"
            value="Close All"
            name="showAll"
            onClick={this.closeAll}
          />
            {/* IDENTITY AND CREDENTIALS */}
            <input
              type="button"
              value="Credentials"
              name="showCredential"
              className="tab"
              onClick={this.onChange}
            />
            {this.state.showCredential?
            <div className="column">
              <p>ID: {this.state.currentSelection.id}</p>
              <p>username: {this.state.currentSelection.username}</p>
              <p>Name:</p> {/* FULL NAME HERE*/}
              <p>authorized:{this.state.currentSelection.authorized}</p>
              <p>state_license_number:{this.state.currentSelection.state_license_number}</p>
            </div> 
            :null}
            {/* CONTACT INFO */}
            <input
              type="button"
              value="Contact"
              name="showContact"
              className="tab"
              onClick={this.onChange}
            />
            {this.state.showContact?
            <div className="column">
              <p>phone:{this.state.currentSelection.phone}</p>
              <p>fax:{this.state.currentSelection.fax}</p>
              <p>phonew1:{this.state.currentSelection.phonew1}</p>
              <p>phonew2:{this.state.currentSelection.phonew2}</p>
              <p>phonecell:{this.state.currentSelection.phonecell}</p>
              <p>Address 1: </p> {/* FULL ADDRESS HERE */}
              <p>Address 2: </p> {/* FULL ADDRESS HERE */}
              <p>email:{this.state.currentSelection.email}</p>
              <p>email_direct:{this.state.currentSelection.email_direct}</p>
              <p>url:{this.state.currentSelection.url}</p>
            </div>
            :null}
          {/* ACCOUNT INFO */}
            <input
              type="button"
              value="Account"
              name="showAccount"
              className="tab"
              onClick={this.onChange}
            />
            {this.state.showAccount?
            <div className="column">
            <p>info:{this.state.currentSelection.info}</p>
            <p>source:{this.state.currentSelection.source}</p>
            <p>federaltaxid:{this.state.currentSelection.federaltaxid}</p>
            <p>federaldrugid:{this.state.currentSelection.federaldrugid}</p>
            <p>upin:{this.state.currentSelection.upin}</p>
            <p>facility:{this.state.currentSelection.facility}</p>
            <p>facility_id:{this.state.currentSelection.facility_id}</p>
            <p>see_auth:{this.state.currentSelection.see_auth}</p>
            <p>active:{this.state.currentSelection.active}</p>
            <p>npi:{this.state.currentSelection.npi}</p>
            <p>title:{this.state.currentSelection.title}</p>
            <p>specialty:{this.state.currentSelection.specialty}</p>
            <p>billname:{this.state.currentSelection.billname}</p>
            <p>assistant:{this.state.currentSelection.assistant}</p>
            <p>organization:{this.state.currentSelection.organization}</p>
            <p>valedictory:{this.state.currentSelection.valedictory}</p>
            <p>notes:{this.state.currentSelection.notes}</p>
            <p>cal_ui:{this.state.currentSelection.cal_ui}</p>
            <p>taxonomy:{this.state.currentSelection.taxonomy}</p>
            <p>calendar:{this.state.currentSelection.calendar}</p>
            <p>weno_prov_id:{this.state.currentSelection.weno_prov_id}</p>
            <p>physician_type:{this.state.currentSelection.physician_type}</p>
            <p>main_menu_role:{this.state.currentSelection.main_menu_role}</p>
            <p>newcrop_user_role:{this.state.currentSelection.newcrop_user_role}</p>
            <p>patient_menu_role:{this.state.currentSelection.patient_menu_role}</p>
          </div>
          :null}
          {/* OTHER */}
            <input
              type="button"
              value="Other"
              name="showOther"
              className="tab"
              onClick={this.onChange}
            />
            {this.state.showOther?
          <div className="column">
            <p>abook_type:{this.state.currentSelection.abook_type}</p>
            <p>pwd_expiration_date:{this.state.currentSelection.pwd_expiration_date}</p>
            <p>pwd_history1:{this.state.currentSelection.pwd_history1}</p>
            <p>pwd_history2:{this.state.currentSelection.pwd_history2}</p>
            <p>default_warehouse:{this.state.currentSelection.default_warehouse}</p>
            <p>irnpool:{this.state.currentSelection.irnpool}</p>
            <p>cpoe:{this.state.currentSelection.cpoe}</p>
          </div>:null}
          </div>
        </div>
      </div>
    );
  }
}

export default UserList;
