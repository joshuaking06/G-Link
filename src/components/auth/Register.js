import React from 'react'
import axios from 'axios'

export default class Register extends React.Component {
	constructor() {
		super()

		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			image:
				'https://www.accountingweb.co.uk/sites/all/modules/custom/sm_pp_user_profile/img/default-user.png'
		}

		this.onSubmit = this.onSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
	}

	onChange({ target: { name, value } }) {
		this.setState({ [name]: value })
	}

	onSubmit(e) {
		e.preventDefault()
		const { email, password, image, passwordConfirmation, username } = this.state
		const mutationString = `mutation{createUser(userInput:{
			username: "${username}", 
			email: "${email}", 
			password: "${password}", 
			passwordConfirmation:"${passwordConfirmation}",
			image: "${image}"
		}){ _id username }}`
		axios
			.post('/api/graphql', { query: mutationString })
			.then(() => this.props.history.push('/login'))
			.catch((err) => console.log(err))
	}

	render() {
		const { username, email, password, passwordConfirmation } = this.state
		return (
			<div className="section form-section columns">
				<div className="column is-4 is-offset-4">
					<form onSubmit={this.onSubmit} className="form">
						{/* label and input for username */}
						<div className="field">
							<label className="label is-light has-text-centered">Username</label>
							<p className="control has-icons-left">
								<input
									onChange={this.onChange}
									className="input"
									type="text"
									placeholder="Username"
									name="username"
									value={username}
								/>
								<span className="icon is-small is-left">
									<i className="fas fa-user" />
								</span>
							</p>
						</div>
						{/* label and input for email */}
						<div className="field">
							<label className="label is-light has-text-centered">Email</label>
							<p className="control has-icons-left">
								<input
									onChange={this.onChange}
									className="input"
									type="email"
									placeholder="Email"
									name="email"
									value={email}
								/>
								<span className="icon is-small is-left">
									<i className="fas fa-envelope" />
								</span>
							</p>
						</div>
						{/* label and input for password */}
						<div className="field">
							<label className="label is-light has-text-centered">Password</label>
							<p className="control has-icons-left">
								<input
									onChange={this.onChange}
									className="input "
									type="password"
									placeholder="Password"
									name="password"
									value={password}
								/>
								<span className="icon is-small is-left">
									<i className="fas fa-lock" />
								</span>
							</p>
						</div>
						{/* label and input for password confirmation */}
						<div className="field">
							<label className="label is-light has-text-centered">
								Password Confirmation
							</label>
							<p className="control has-icons-left">
								<input
									onChange={this.onChange}
									className="input"
									type="password"
									placeholder="Password"
									name="passwordConfirmation"
									value={passwordConfirmation}
								/>
								<span className="icon is-small is-left">
									<i className="fas fa-lock" />
								</span>
							</p>
						</div>
						{/* button to login */}
						<div className="field">
							<p className="control">
								<button className="button is-link is-fullwidth is-outlined">
									Register
								</button>
							</p>
						</div>
					</form>
				</div>
			</div>
		)
	}
}
