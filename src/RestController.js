const authURL = "https://mlp9791.uta.cloud/openemr/apis/api/auth";

export function PostAuth(type, userData) {
  return new Promise((resolve, reject) => {
    fetch(authURL, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/*import React from 'react';

	const URL = "http://localhost/openemr/apis/api/patient"
	const authURL = "http://localhost/openemr/apis/api/auth";
	const patientURL = "http://localhost/openemr/apis/api/facility";
	var user_Tok_Type: "";
	var user_Tok_Code: "";
	
class RestController extends React.Component {
	constructor(props) {
		super(props);
		this.state = 
		{
			user: [],
			get: []
		};
	}

	componentDidMount() {
		
	}
	
	getCredentials(){
		fetch(authURL, {
			method: 'POST',
			body: JSON.stringify({
				grant_type: 'password',
				username: 'administrator',
				password: 'administrator',
				scope: 'default'
			}),
			headers: {
				"Content-Type": "application/json",
			}
		}).then(response => {
			console.log(response);
				return response.json()
			}).then(json => {
				this.setState({
					user:json
				});
			});
	}
	
	buttonHandleClick(){
		fetch(patientURL, {
			method: 'GET',
			headers: {
				"Authorization": "Bearer"+" "+ this.state.user.access_token
			}
		}).then(response => {
				return response.json()
			}).then(json => {
				this.setState({
					get:json
				});
				console.log(this.state.get);
			});
	}
	
	button2HandleClick(){
		fetch(URL, {
			method: 'GET',
			headers: {
				"Authorization": "Bearer"+" "+ this.state.user.access_token
			}
		}).then(response => {
				return response.json()
			}).then(json => {
				this.setState({
					get:json
				});
				console.log(this.state.get);
			});
	}
	
	render() {                            
		return (
			<div>
				<p><b>New Resource created in the server as shown below</b></p>
				<p>The state of token_type : {this.state.user.token_type}</p>
				<p>The state of access_token : {this.state.user.access_token}</p>
				<p>The state of expires_in : {this.state.user.expires_in}</p>
				<button onClick={this.buttonHandleClick.bind(this)}>Facility</button>
				<button onClick={this.button2HandleClick.bind(this)}>Fetch Test</button>
			</div>
		)
	}
}

export default RestController;*/
