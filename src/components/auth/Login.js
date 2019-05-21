import React from 'react'
import axios from 'axios'

import Auth from '../helpers/Auth'
export default class Login extends React.Component {
	constructor() {
		super()

		this.state = {
			email: '',
			password: ''
		}

		this.onSubmit = this.onSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
	}

	onChange({ target: { name, value } }) {
		this.setState({ [name]: value })
	}

	onSubmit(e) {
		const { email, password } = this.state
		e.preventDefault()
		const queryString = `query{ login(
			email: "${email}", 
			password:"${password}"
			){ token }}`
		axios
			.post('/api/graphql', { query: queryString })
			.then((data) => {
				Auth.setToken(data.data.data.login.token)
				this.props.history.push('/')
			})
			.catch((err) => console.log(err))
	}

	render() {
		const { email, password } = this.state
		return (
			<div className="section form-section columns">
				<div className="column is-4 is-offset-4">
					<form onSubmit={this.onSubmit} className="form">
						{/* label and input for email */}
						<div className="field">
							<label className="label is-light has-text-centered">Email</label>
							<p className="control has-icons-left">
								<input
									onChange={this.onChange}
									className="input is-medium"
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
									className="input is-medium"
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
						{/* button to login */}
						<div className="field">
							<p className="control">
								<button className="button is-link is-fullwidth is-outlined">
									Login
								</button>
							</p>
						</div>
					</form>
				</div>
			</div>
		)
	}
}
