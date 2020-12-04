//Formats recieving JSON to appropriate strings for easy display

//Calculate Age from today and DOB which is formatted in international standard
var today = new Date();
//DOB is a Date() object
export function getAge(DOB) {
  var age = today.getFullYear() - DOB.getFullYear();
  var m = today.getMonth() - DOB.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < DOB.getDate())) {
    age--;
  }
  return age;
}

//Orders first name first
export function getName(fname, mname, lname) {
  if (fname == null && mname == null && lname == null) return "N/A";

  return fname + " " + mname + " " + lname;
}

export function getAddress(street, city, state, zip) {
  return street + ", " + city + ", " + state + ", " + zip;
}
