//Formats recieving JSON to appropriate strings for easy display
//This file contains variables and functions to be exchanged across components

//Patient test data
var testdata = [
  {
    id: "1",
    pid: "1",
    pubpid: "11",
    title: "",
    fname: "Andrew",
    mname: "L",
    lname: "Forsman",
    street: "1000 Main Rd.",
    postal_code: "76018",
    city: "Fiction",
    state: "TX",
    country_code: "USA",
    phone_contact: "0111111111",
    email: "AndyForsman@gmail.com",
    dob: "1997-10-22",
    sex: "Male",
    race: "white",
    ethnicity: "not_hisp_or_latin"
  },

  {
    id: "2",
    pid: "2",
    pubpid: "22222",
    title: "",
    fname: "Randy",
    mname: "A",
    lname: "Johson",
    street: "1001 Main Rd.",
    postal_code: "76018",
    city: "Fiction",
    state: "TX",
    country_code: "",
    phone_contact: "",
    email: "",
    dob: "1997-10-31",
    sex: "Male",
    race: "",
    ethnicity: ""
  }
];

var encounterTestData = [{
  billing_facility: "3",
billing_facility_name: "Your Clinic Name Here",
billing_note: null,
date: "2020-12-02 00:00:00",
external_id: "",
facility: "Your Clinic Name Here",
facility_id: "3",
id: "2",
invoice_refno: "",
last_level_billed: "0",
last_level_closed: "0",
last_stmt_date: null,
onset_date: "0000-00-00 00:00:00",
pc_catid: "10",
pc_catname: "New Patient",
pid: "1",
pos_code: "0",
provider_id: "1",
reason: "Reason for visit\r\nEnter key\r\nEnter key\r\nHe has diabetes",
referral_source: "",
sensitivity: "normal",
stmt_count: "0",
supervisor_id: "0"
}];

export var userlist = [{id:"1",
username:"administrator",
password:"NoLongerUsed",
authorized:"1",
info:null,
source:null,
fname:"Administrator",
mname:null,
lname:"Administrator",
suffix:null,
federaltaxid:null,
federaldrugid:null,
upin:null,
facility:null,
facility_id:"3",
see_auth:"1",
active:"1",
npi:null,
title:null,
specialty:null,
billname:null,
email:null,
email_direct:"",
url:null,
assistant:null,
organization:null,
valedictory:null,
street:null,
streetb:null,
city:null,
state:null,
zip:null,
street2:null,
streetb2:null,
city2:null,
state2:null,
zip2:null,
phone:null,
fax:null,
phonew1:null,
phonew2:null,
phonecell:null,
notes:null,
cal_ui:"3",
taxonomy:"207Q00000X",
calendar:"1",
abook_type:"",
pwd_expiration_date:null,
pwd_history1:null,
pwd_history2:null,
default_warehouse:"",
irnpool:"",
state_license_number:null,
weno_prov_id:null,
newcrop_user_role:null,
cpoe:null,
physician_type:null,
main_menu_role:"standard",
patient_menu_role:"standard"},
{id:"2",
username:"phimail-service",
password:"NoLogin",
authorized:"0",
info:null,
source:null,
fname:null,
mname:null,
lname:"phiMail Gateway",
suffix:null,
federaltaxid:null,
federaldrugid:null,
upin:null,
facility:null,
facility_id:"0",
see_auth:"1",
active:"0",
npi:null,
title:null,
specialty:null,
billname:null,
email:null,
email_direct:"",
url:null,
assistant:null,
organization:null,
valedictory:null,
street:null,
streetb:null,
city:null,
state:null,
zip:null,
street2:null,
streetb2:null,
city2:null,
state2:null,
zip2:null,
phone:null,
fax:null,
phonew1:null,
phonew2:null,
phonecell:null,
notes:null,
cal_ui:"1",
taxonomy:"207Q00000X",
calendar:"0",
abook_type:"",
pwd_expiration_date:null,
pwd_history1:null,
pwd_history2:null,
default_warehouse:"",
irnpool:"",
state_license_number:null,
weno_prov_id:null,
newcrop_user_role:null,
cpoe:null,
physician_type:null,
main_menu_role:"standard",
patient_menu_role:"standard"},
{id:"3",
username:"portal-user",
password:"NoLogin",
authorized:"0",
info:null,
source:null,
fname:null,
mname:null,
lname:"Patient Portal User",
suffix:null,
federaltaxid:null,
federaldrugid:null,
upin:null,
facility:null,
facility_id:"0",
see_auth:"1",
active:"0",
npi:null,
title:null,
specialty:null,
billname:null,
email:null,
email_direct:"",
url:null,
assistant:null,
organization:null,
valedictory:null,
street:null,
streetb:null,
city:null,
state:null,
zip:null,
street2:null,
streetb2:null,
city2:null,
state2:null,
zip2:null,
phone:null,
fax:null,
phonew1:null,
phonew2:null,
phonecell:null,
notes:null,
cal_ui:"1",
taxonomy:"207Q00000X",
calendar:"0",
abook_type:"",
pwd_expiration_date:null,
pwd_history1:null,
pwd_history2:null,
default_warehouse:"",
irnpool:"",
state_license_number:null,
weno_prov_id:null,
newcrop_user_role:null,
cpoe:null,
physician_type:null,
main_menu_role:"standard",
patient_menu_role:"standard"},
{id:"4",
username:"TesterNurse",
password:"NoLongerUsed",
authorized:"0",
info:"This is a nurse acount. Access control is clinicians",
source:null,
fname:"Tester",
mname:"",
lname:"Tester",
suffix:null,
federaltaxid:"",
federaldrugid:"",
upin:"",
facility:"Your Clinic Name Here",
facility_id:"3",
see_auth:"1",
active:"1",
npi:"",
title:null,
specialty:"Nurse Description",
billname:null,
email:null,
email_direct:"",
url:null,
assistant:null,
organization:null,
valedictory:null,
street:null,
streetb:null,
city:null,
state:null,
zip:null,
street2:null,
streetb2:null,
city2:null,
state2:null,
zip2:null,
phone:null,
fax:null,
phonew1:null,
phonew2:null,
phonecell:null,
notes:null,
cal_ui:"1",
taxonomy:"207Q00000X",
calendar:"0",
abook_type:"",
pwd_expiration_date:"0000-00-00",
pwd_history1:null,
pwd_history2:null,
default_warehouse:"",
irnpool:"",
state_license_number:"",
weno_prov_id:"",
newcrop_user_role:"",
cpoe:null,
physician_type:"",
main_menu_role:"standard",
patient_menu_role:"standard"},
{id:"5",
username:"Clinician",
password:"NoLongerUsed",
authorized:"0",
info:"Access Control is clinician",
source:null,
fname:"Clyde",
mname:"",
lname:"Clove",
suffix:null,
federaltaxid:"",
federaldrugid:"",
upin:"",
facility:"Your Clinic Name Here",
facility_id:"3",
see_auth:"1",
active:"1",
npi:"",
title:null,
specialty:"",
billname:null,
email:null,
email_direct:"",
url:null,
assistant:null,
organization:null,
valedictory:null,
street:null,
streetb:null,
city:null,
state:null,
zip:null,
street2:null,
streetb2:null,
city2:null,
state2:null,
zip2:null,
phone:null,
fax:null,
phonew1:null,
phonew2:null,
phonecell:null,
notes:null,
cal_ui:"1",
taxonomy:"207Q00000X",
calendar:"0",
abook_type:"",
pwd_expiration_date:"0000-00-00",
pwd_history1:null,
pwd_history2:null,
default_warehouse:"",
irnpool:"",
state_license_number:"",
weno_prov_id:"",
newcrop_user_role:"",
cpoe:null,
physician_type:"community_health_physician",
main_menu_role:"standard",
patient_menu_role:"standard"},
{id:"6",
username:"Accounting",
password:"NoLongerUsed",
authorized:"0",
info:"Access Control is accounting",
source:null,
fname:"Accountant",
mname:"",
lname:"Accounto",
suffix:null,
federaltaxid:"",
federaldrugid:"",
upin:"",
facility:"Your Clinic Name Here",
facility_id:"3",
see_auth:"1",
active:"1",
npi:"",
title:null,
specialty:"",
billname:null,
email:null,
email_direct:"",
url:null,
assistant:null,
organization:null,
valedictory:null,
street:null,
streetb:null,
city:null,
state:null,
zip:null,
street2:null,
streetb2:null,
city2:null,
state2:null,
zip2:null,
phone:null,
fax:null,
phonew1:null,
phonew2:null,
phonecell:null,
notes:null,
cal_ui:"1",
taxonomy:"207Q00000X",
calendar:"0",
abook_type:"",
pwd_expiration_date:"0000-00-00",
pwd_history1:null,
pwd_history2:null,
default_warehouse:"",
irnpool:"",
state_license_number:"",
weno_prov_id:"",
newcrop_user_role:"",
cpoe:null,
physician_type:"",
main_menu_role:"standard",
patient_menu_role:"standard"},
{id:"7",
username:"NewCrop_Nurse",
password:"NoLongerUsed",
authorized:"0",
info:"",
source:null,
fname:"NewCrop_Nurse",
mname:"",
lname:"NewCrop_Nurse",
suffix:null,
federaltaxid:"",
federaldrugid:"",
upin:"",
facility:"Your Clinic Name Here",
facility_id:"3",
see_auth:"1",
active:"1",
npi:"",
title:null,
specialty:"",
billname:null,
email:null,
email_direct:"",
url:null,
assistant:null,
organization:null,
valedictory:null,
street:null,
streetb:null,
city:null,
state:null,
zip:null,
street2:null,
streetb2:null,
city2:null,
state2:null,
zip2:null,
phone:null,
fax:null,
phonew1:null,
phonew2:null,
phonecell:null,
notes:null,
cal_ui:"1",
taxonomy:"207Q00000X",
calendar:"0",
abook_type:"",
pwd_expiration_date:"0000-00-00",
pwd_history1:null,
pwd_history2:null,
default_warehouse:"",
irnpool:"",
state_license_number:"",
weno_prov_id:"",
newcrop_user_role:"erxnurse",
cpoe:null,
physician_type:"",
main_menu_role:"standard",
patient_menu_role:"standard"}];

export var logdata = [{"user":"TesterNurse",
"comments":" INSERT INTO api_token SET user_id=4, token=EZbA0KxJ52fl8I1Szqt21itochp7WFUJ, expiry=DATE_ADD(NOW(), INTERVAL 1 HOUR)","date":"2020-12-23 18:29:34","event":"REST-login"}
,{"user":"TesterNurse",
"comments":" BLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAH INSERT INTO api_token SET user_id=4, token=EZbA0KxJ52fl8I1Szqt21itochp7WFUJ, expiry=DATE_ADD(NOW(), INTERVAL 1 HOUR)","date":"2020-12-23 18:29:34","event":"REST-login"}
]


//var formattedData= [];
//console.log(testdata[0].dob);

//For all components relying on the index (Selected patient)

/*=========================================
FORMATTER FOR PatientList.js
=========================================*/
//For PatientsList.js to display table data
export function formatPatients(list) {
  var age, fullname, address, sex, id;
  var formattedData = [];
  for (var i = 0; i < list.length; i++) {
    age = getAge(list[i].dob);
    fullname = getName(list[i].fname, list[i].mname, list[i].lname);
    address = getAddress(
      list[i].street,
      list[i].city,
      list[i].state,
      list[i].postal_code
    );
    sex = list[i].sex;
    id = list[i].pid;
    formattedData[i] = {
      age: age,
      name: fullname,
      id: id,
      sex: sex,
      address: address
    };
    //Found odd behavior here, at index 0 there should be only 1 object but it behaves as if there are 2 objects. 2 printouts should be different
    //console.log(formattedData);
  }
  return formattedData;
}
//Calculate Age from today and DOB which is formatted in international standard
var today = new Date();
export function getAge(DOB) {
  var DOBdate = new Date(DOB);
  var age = today.getFullYear() - DOBdate.getFullYear();
  var m = today.getMonth() - DOBdate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < DOBdate.getDate())) {
    age--;
  }
  return age;
}
//Orders first name first
export function getName(fname, mname, lname) {
  if (fname == null && mname == null && lname == null) return "N/A";
  if (fname == null && mname != null && lname == null)
    return fname + " " + lname;
  return fname + " " + mname + " " + lname;
}

export function getAddress(street, city, state, zip) {
  return street + ", " + city + ", " + state + ", " + zip;
}