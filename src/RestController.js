import React from 'react';

	const URL = "http://localhost/openemr"
	const authURL = "http://localhost/openemr/apis/api/auth";
	const patientURL = "http://localhost/openemr/apis/api/patefsdfient";

class RestController extends React.Component {
	constructor(props) {
		super(props);
		this.state = {user: []};
	}

	componentDidMount() {
		
		fetch(authURL, {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify({
				grant_type: 'password',
				username: 'administrator',
				password: 'administrator',
				scope: 'default'
			}),
			headers: {
				"Content-type": "application/json",
			}
		}).then(response => {
			console.log(response);
				return response.json()
			}).then(json => {
				this.setState({
					user:json
				});
				//console.log(this.state.user);
			});
			
			
			
			fetch(patientURL, {
			method: 'GET',
			credentials: 'include',
			headers: {
				"Content-type": "application/json",
				"Authorization": "Bearer ibt0ig69DaPzh0OZBaAlSM0Pzb2TNZEd6f656d7264656661756c74"
			}
		}).then(response => {
				return response.json()
			}).then(json => {
				this.setState({
					user:json
				});
				console.log(this.state.user);
			});
	}
	
	render() {                            
		return (
			<div>
				<p><b>New Resource created in the server as shown below</b></p>
				<p>The state of token_type : {this.state.user.token_type}</p>
				<p>The state of access_token : {this.state.user.access_token}</p>
				<p>The state of expires_in : {this.state.user.expires_in}</p>
			</div>
		)
	}
}

export default RestController;