import React from 'react'

export default class Login extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="section columns">
				<div className="login container column is-3">
					<div className="form">
						{/* label and input for email */}
						<div className="field">
							<label class="label is-light has-text-centered">Email</label>
							<p className="control has-icons-left">
								<input
									className="input is-primary"
									type="email"
									placeholder="Email"
								/>
								<span className="icon is-small is-left">
									<i className="fas fa-envelope" />
								</span>
							</p>
						</div>
						{/* label and input for password */}
						<div className="field">
							<label class="label is-light has-text-centered">Password</label>
							<p className="control has-icons-left">
								<input
									className="input is-primary"
									type="password"
									placeholder="Password"
								/>
								<span className="icon is-small is-left">
									<i className="fas fa-lock" />
								</span>
							</p>
						</div>
						{/* button to login */}
						<div className="field">
							<p className="control">
								<button className="button is-link is-inverted is-fullwidth is-outlined">
									Login
								</button>
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
