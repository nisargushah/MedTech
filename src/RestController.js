const authURL = "https://mlp9791.uta.cloud/openemr/apis/api/auth";
const patientURL = "https://mlp9791.uta.cloud/openemr/apis/api/patient";
const facilityURL = "https://mlp9791.uta.cloud/openemr/apis/api/facility";
const mainURL = "https://mlp9791.uta.cloud/openemr/apis/api/";

export var ct = { "Content-Type": "application/json" };

//Authorization function that updates upon login
export function getAuth() {
  return {
    Authorization:
      sessionStorage.getItem("token_type") +
      " " +
      sessionStorage.getItem("token")
  };
}

//======================================================
//Universal Functions
var hd;
export function doFetch(method, resource, headers, body) {
  return new Promise((resolve, reject) => {
    fetch(mainURL + resource, {
      method: method,
      body: JSON.stringify(body),
      headers: headers
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
}
/*
export function a(){
  var a;
doFetch("GET", "/patient", getAuth()).then((responseJson) => {
  if (responseJson) {
    a= responseJson;
  }
  return a;
}

);

return a;
}
export var bc = a();*/
//RETURNS UNDEFINED, DO NOT REDESIGN FETCHING

/*
//=========================================
// TESTING doFetch
var a = {"Content-Type": "application/json"};
var b = {
  grant_type: "password",
  username: "administrator",
  password: "administrator",
  scope: "default",
  redirectToReferrer: false
};
var c = doFetch("POST", "/auth", a,b).then((result) => {
  console.log(result);
});
*/
/*
//Testing parameter functions
function get1(a, b){
  if(a)console.log("a");
  if(b)console.log("b");
  console.log("c");
};
var r = 1; var d = 2;
get1(r,d);
*/
/*
var a4 = "abc";
var a3 = "/o";
console.log(a4 + a3);*/
